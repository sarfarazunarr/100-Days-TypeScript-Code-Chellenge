/*
Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
*/

let numbers: number[] = [2, 4, 8, 15, 90, 23, 9];

let newNum:number[] = numbers.map((number) => number * 2);

console.log(numbers, newNum)