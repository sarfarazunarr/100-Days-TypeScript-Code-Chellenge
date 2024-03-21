/*
Find the Average Grade: Given a list of grades, calculate the average grade.
*/
let marks:number[] = [10, 10, 89, 56, 34, 79, 28, 64, 70];
let average = marks.reduce((totalMarks, mark) => totalMarks + mark, 0) / marks.length;
console.log(average)