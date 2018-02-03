const url = "http://jsonplaceholder.typicode.com/posts/1",
failUrl = "fail";
let buttons = document.getElementsByClassName("execButton");

fetch(url)
.then( function (response) { return response.json() })
.then( function (responsejson) { console.log(responsejson.id); })
.catch( function (e) {console.log(e) });

function printAfterButton(text, button) {
    let paragraph = button.nextElementSibling;
    paragraph.innerHTML += text;
    console.log(button, paragraph);
};

function printSuccess ( successMessage, button) {
    let text = "Success! <br/>" + successMessage;
    printAfterButton(text, button);
}

function printError ( errorMessage, button) {
    let text = "Error: <br/>" + errorMessage;
    printAfterButton(text, button);
}

// Promise

function promiseCode (button) {
    fetch(url)
    .then( function (response) { return response.json() })
    .then( function (responsejson) { printSuccess(responsejson.title, button)})
    .catch( function (e) {
        console.log(e);
        printError(e, button)
     });
}

function promiseFailCode (button) {
    fetch(failUrl)
    .then( function (response) { return response.json() })
    .then( function (responsejson) { printSuccess(responsejson.title, button)})
    .catch( function (e) {
        console.log(e);
        printError(e, button);
     });
}

let codeArr = [
    promiseCode,
    generatorOne,
    promiseFailCode
];

//loop through buttons and apply eventlistener
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () { codeArr[i](this); })
}

// Generator + Promises

function* prGenerator (button) {
    let response = yield fetch(failUrl);
    let responsejson = yield response.json();
    console.log("Generator completed");
    printSuccess(responsejson.title, button);
}

function generatorOne (button) {
    let it = prGenerator(button);
    let p1 = it.next().value; //Generator returns promise

    p1.then(
        function firstPromise (response) {
            // go on with generator - returns new promise
            let p2 = it.next(response).value;

            p2.then ( 
                function secondPromise (responsejson) {
                    it.next(responsejson);
                } )
        }
    ).catch (function handleError (e) {
        console.log(e);
        printError(e, button);
    })
}



