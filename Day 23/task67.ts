/**
 * Write a function that takes two arguments one number and string return thier answer of arithmatic in number
 */

const add = (value1:string, value2:number) => {
    let value = Number.parseInt(value1)
    return value + value2;
}
console.log(add('2', 2))