/*
Average Score Calculator: Write a simple program that can take lots of scores and find their average.
*/

function AverageScore(...values:number[]):number {
    let totalScore = values.reduce((sum, value) => sum + value, 0);
    return totalScore / values.length;
}   

console.log(AverageScore(120, 90, 99, 34, 23, 90, 100,150));