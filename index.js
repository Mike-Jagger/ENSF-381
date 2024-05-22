"use strict";
var pets;
(function (pets) {
    pets[pets["dog"] = 0] = "dog";
    pets[pets["cat"] = 1] = "cat";
    pets[pets["pig"] = 2] = "pig";
    pets[pets["horse"] = 3] = "horse";
    pets[pets["porcupine"] = 4] = "porcupine";
})(pets || (pets = {}));
let gerard = {};
gerard.favAnimal = pets.cat;
let yourAnimal = {};
yourAnimal.yourFavAnimal = pets.pig;
console.log(gerard, yourAnimal);
