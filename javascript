const number = Number(prompt("Type a number between 1 and 100:"));
if (number >= 0 && number <=100) {
    console.log(`Thank you! You entered ${number}, a valid number.`)
} else {
    console.log(`Sorry, ${number} is not a valid entry`);
}