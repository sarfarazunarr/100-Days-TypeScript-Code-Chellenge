/*
Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
*/
type Data = {
    type: 'circle' | 'rectangle',
    radius?: number,
    width?: number,
    height?: number
}

let myCircle: Data = {
    type: "circle",
    radius: 50
}

let myRect:Data = {
    type: "rectangle",
    width: 40,
    height: 20
}
console.log(myCircle)
console.log(myRect)