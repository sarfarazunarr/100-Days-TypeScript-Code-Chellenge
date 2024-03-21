/*
Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
*/
let items: unknown[] = ["Hello", 12, true, undefined, "I am Faraz", 889, 12e2, {hello:'world'}];

let words = items.filter(item => typeof item === 'string');
console.log(words)