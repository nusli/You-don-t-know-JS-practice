const url = "http://jsonplaceholder.typicode.com/posts/1",
failUrl = "fail";
let buttons = document.getElementsByClassName("execButton");

fetch(url)
.then( function (response) { return response.json() })
.then( function (responsejson) { console.log(responsejson.id); })
.catch( function (e) {console.log(e) });

function print(text) {
    let $button = $(this),
    $paragraph = $button.next();
    $paragraph.text(text);
};
function printError (err) {
    let self = $(this);
    return print ("Error: /n" + err, self);
}
function getData () {
    return new Promise ( function (resolve,reject){
        $.get( {
            url: url,
            error: printError(),
            success: printSuccess(data)
        } );
    })
}

