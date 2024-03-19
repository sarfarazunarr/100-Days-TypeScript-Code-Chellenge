/*
Task 46. Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
*/

let laptop: { make: string, model: string, year: number, describe: any } = {
    make: 'HP',
    model: 'ProBook 6570b',
    year: 2021,
    describe: function () {
        console.log(`This is best laptop by ${this.make} a best model ${this.model} of ${this.year}.`);
    }
}
laptop.describe();