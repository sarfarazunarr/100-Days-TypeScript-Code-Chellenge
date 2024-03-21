/*
Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
*/

function makeAdder(magicValue:number) : (number) => number {
    return function(value:number):number{
        return magicValue + value;
    }
}

let addSix = makeAdder(6);
console.log(addSix(15))