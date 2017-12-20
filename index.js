var obj1 = {
    name: "obj1"
},
obj2 = {
    name: "obj2"
},
name = "Global Scope";

function printName () {
    return this.name;
}

function foo ( a ) {
    this.name = a;
    this.print = printName;
    this.wrap = function oneWrap () {
        this.print();
    };
    this.printWrap = function oneWrap () {
        printName();
    };
}

var obj3 = new foo("obj3");

const results = document.getElementById("results");

let resPrintName = printName(),
resPrintObj1 = printName.call(obj1),
resPrintObj3 = obj3.print(),
resObj3Wrap = obj3.wrap(),
resObj3PrintWrap = obj3.printWrap();


results.innerHTML += `<tr><td class="precode"> printName(): </td> <td class="code">${resPrintName}</td></tr>
<tr> <td class="precode"> printName.call(obj1): </td> <td class="code">${resPrintObj1}</td></tr>
<tr> <td class="precode"> obj3.print(): </td> <td class="code">${resPrintObj3}</td></tr>
<tr> <td class="precode"> obj3.wrap(): </td> <td class="code">${resObj3Wrap}</td></tr>
<tr> <td class="precode"> obj3.printWrap(): </td> <td class="code">${resObj3PrintWrap}</td></tr>
`