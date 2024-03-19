/*
Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
*/
interface smartData {
    company: string,
    model: string,
    year: number,
    specifications: object
}
let smartphone: smartData[] = [{
    company: "Infinix",
    model: "HOT 10i",
    year: 2020,
    specifications: {
        betteryTiming: '10 Hours',
        RAM: '4GB',
        Storage: '128GB',
        Camera: '48MP'
    }
},
{
    company: "Oppo",
    model: "A53",
    year: 2023,
    specifications: {
        betteryTiming: '08 Hours',
        RAM: '4GB',
        Storage: '64GB',
        Camera: '64MP'
    }
}
];
console.log(smartphone)