"use strict";
function add(num) {
    let arrayOfNumbers = [];
    while (num > 0) {
        arrayOfNumbers.push(num);
        num--;
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers.reduce((factorial, currVal) => factorial * currVal, 1);
}
console.log(add(6));
