/**
 * Dividing and finding the remainder: write a function that divides two number and returns both the quotient and remainder. use an objecy to retrn both values.
 */

function divide(mainValue:number, table:number){
    let quotient = Math.round((mainValue / table) * 100) / 100;
    let remainder = mainValue % table;
    return {quotient, remainder}
}
console.log(divide(200, 10))