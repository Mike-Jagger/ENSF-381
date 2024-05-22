"use strict";
var pets;
(function (pets) {
    pets["dog"] = "dog";
    pets["cat"] = "cat";
    pets["pig"] = "pig";
    pets["horse"] = "horse";
    pets["porcupine"] = "porcupine";
})(pets || (pets = {}));
let gerard = {};
gerard.favAnimal = pets.cat;
let yourAnimal = {};
yourAnimal.yourFavAnimal = pets.pig;
console.log(gerard, yourAnimal);
