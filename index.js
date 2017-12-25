
function NumberOnly () {
    this.count = 1;
};
NumberOnly.prototype = {
    set add(val) { // only accepts numbers, strings or arrays
        if (typeof val === 'number' || typeof val === 'string') {
            this["num" + this.count] = Number(val);
            this.count++;
        } else {
            val.forEach(element => {
                this["num" + this.count] = Number(element);
                this.count++;
            });
        }
        
    },
    
};

let numberObj = new NumberOnly(),
stringObj = new NumberOnly(),
arrayObj = new NumberOnly();

numberObj.add = 45;
stringObj.add = "48";
arrayObj.add = [1, "4", 7];
console.log(arrayObj);


