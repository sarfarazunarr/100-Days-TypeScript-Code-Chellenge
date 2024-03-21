/*
Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
*/

let profile = (function () {
    let name: string = 'Sarfaraz';
    let age: number = 19;
    return {
        message : () => {
            console.log(`Hi ${name} your age is ${age}`)
        }
    }
})();

profile.message();