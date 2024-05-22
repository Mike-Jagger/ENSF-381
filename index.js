"use strict";
let w = 1;
console.log(typeof w);
w = {
    letter: "hey",
    unknownFunction: () => {
        console.log("I think therefore I am");
    }
};
console.log(w);
if (w !== null && typeof w === 'object') {
    console.log(w.letter);
    w.unknownFunction();
}
