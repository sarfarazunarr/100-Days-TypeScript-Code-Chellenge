/*
Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
*/
const createObjectKeys = (key:string, value:string) => {
    let myObj:{} = {};
    
    myObj[key] = value;
    return myObj;
}

let myData = createObjectKeys('name', 'Sarfaraz');
console.log(myData)