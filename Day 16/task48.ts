/*
Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
*/
let firstPrices: number[] = [100, 200, 300, 600];
let allPrices: number[] = [...firstPrices, 2500, 600];
console.log(allPrices.sort())