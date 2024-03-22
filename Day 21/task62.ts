/**
 * Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
 */

interface StudentInfo{
    name:string,
    age: number,
    classes: string[],
    classNumber: number,
    totalFee: number
}

let student: StudentInfo = {
    name: 'Sarfaraz',
    age: 20,
    classes: ['Programming Fundamental', 'Descreate Structure'],
    classNumber: 2,
    totalFee: 0
}
console.log(student.name)