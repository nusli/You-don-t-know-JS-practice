const url = "http://jsonplaceholder.typicode.com/posts/1",
failUrl = "fail";
let buttons = document.getElementsByClassName("execButton");

fetch(url)
.then( function (response) { return response.json() })
.then( function (responsejson) { console.log(responsejson.id); })
.catch( function (e) {console.log(e) });

function printAfterButton(text, button) {
    console.log(this);
    let paragraph = button.nextElementSibling;
    paragraph.innerHTML += text;
    console.log(button, paragraph);
};

function printSuccess ( successMessage) {
    let text = "Success! \n" + successMessage;
    printAfterButton(text);
}

//loop through buttons and apply eventlistener

    //buttons[0].addEventListener("click", printAfterButton("Hello World!", this) );

    function testprint ( text , me = this) {
        console.log(this);
    }
    
    var testobject = {
        print: function () {testprint("Hello World")},
        hello: function () {console.log(this)}
    }
    testprint.apply(testobject);
    testobject.hello();



