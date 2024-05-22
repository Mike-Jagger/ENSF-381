function add(num: number) {
    let arrayOfNumbers: number[] | null = [];
    
    while (num > 0) {
        arrayOfNumbers.push(num);
      num--;
    }
    console.log(arrayOfNumbers);
    
    return arrayOfNumbers.reduce((factorial, currVal) => factorial * currVal, 1);
  }
  
  console.log(add(6));