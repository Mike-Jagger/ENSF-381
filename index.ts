enum pets {
    dog,
    cat,
    pig,
    horse,
    porcupine
}

let gerard: {[index: string]: number} = {};

gerard.favAnimal = pets.cat;

let yourAnimal: { [index: string]: number} =  {};

yourAnimal.yourFavAnimal = pets.pig;


console.log(gerard, yourAnimal);