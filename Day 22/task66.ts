/**
 * Logical AND verification Create a function that checks two boolean (true and false) values. It should only say true if both are true an, using the & operator. 
 */
let myAge = -8;

if ((myAge > 18) && (myAge < 68)) {
    console.log('Aajana Kal Rs.500 kharcha lekar bana dengy tera license');
    console.log(true)
}
else if (myAge > 68) {
    console.log(`Chacha Allah Allah Karo! Doosron ko bhi marogy kiya?`)
} 
else if ((myAge > 4)&&(myAge < 18)) {
    console.log('Beta too cycle chala teri abhi umar nahi hai!')
}
else{
    console.log('Beta pehly peda to hoja baad mai dekhengy license ka!')
}