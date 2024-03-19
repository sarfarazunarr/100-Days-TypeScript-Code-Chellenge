/*
Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
*/
function myHobby(...hobbies:string[]){
    hobbies.map((hobby) => {
        console.log(`You enjoy that ${hobby} hobby!`);
    })
}
myHobby('Reading Quran', 'Daily Coding', 'Visiting Park' )