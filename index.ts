enum pets {
    dog = 'dog',
    cat = 'cat',
    pig = 'pig',
    horse = 'horse',
    porcupine = 'porcupine'
}

let gerard: {[index: string]: string} = {};

gerard.favAnimal = pets.cat;

let yourAnimal: { [index: string]: string} =  {};

yourAnimal.yourFavAnimal = pets.pig;


console.log(gerard, yourAnimal);