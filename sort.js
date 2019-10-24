function compareNumbers(num1, num2){
    return num1 - num2;
}

let numbersArray = [5,4,6,2,7,8,9,23,12,3,10,32,25];
numbersArray.sort(compareNumbers);
console.log(numbersArray);

let numbersArray2 = [5,4,6,2];
numbersArray2.sort(compareNumbers);
console.log(numbersArray2);

//console.log( compareNumbers(6, 4) );