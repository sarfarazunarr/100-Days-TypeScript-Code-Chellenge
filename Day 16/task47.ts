/*
Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
*/
interface data {
    make: string,
    model: string,
    year: number,
    id: number
}
let laptopsData: data[] = [
    {
        make: 'HP',
        model: 'Probook 6570b',
        year: 2024,
        id: 12
    },
    {
        make: 'Dell',
        model: 'Dell Pro G8',
        year: 2019,
        id: 13
    },
    {
        make: 'Samsung',
        model: 'SamPad 122',
        year: 2020,
        id: 14
    },
    {
        make: 'Mac (Apple.inc)',
        model: 'Mac 3',
        year: 2023,
        id: 15
    }
]
let [laptop1, laptop2] = laptopsData;
console.log(laptop1)
console.log(laptop2)
