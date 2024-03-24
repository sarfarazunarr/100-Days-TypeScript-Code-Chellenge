/**
 * Multiplying Decimal: Create a function that accepts two arguments (deciaml numbers) and return their product. Round the result to two decmial places
 */

let multiply = (value1:number, value2:number) => {
    return Math.round((value1 * value2) * 100) / 100;
}
console.log(multiply(0.25, 0.05))