// Problem 1

const number = Number(prompt("Type a number between 1 and 100:"));
if (number >= 0 && number <=100) {
    console.log(`Thank you! You entered ${number}, a valid number.`);
} else {
    console.log(`Sorry, ${number} is not a valid entry`);
}

// Problem 2

var studentName = prompt("Enter your name: ");
const number2 = Number(prompt("Enter number of credits:"));
console.log('Hello ' + studentName)
if (number >= 0 && number <=30) {
    console.log(`Your grade standing is Freshman.`);
} 
else if (number >= 31 && number <=60) {
    console.log(`Your grade standing is Sophomore.`);
}
else if (number >= 61 && number <=90) {
    console.log(`Your grade standing is Junior.`);
}
else if (number >= 91 && number <=120) {
    console.log(`Your grade standing is Senior.`);
}
else {
    console.log(`That input is not valid. Please try again.`);
}

// Problem 3

var day = prompt(`Enter the first three letters (lowercase) of the current day: `);
switch(day) {
    case "mon":
        console.log(`You entered: Monday\nThe following day is: Tuesday`);
        break;
    case "tue":
        console.log(`You entered: Tuesday\nThe following day is: Wednesday`);
        break;
    case "wed":
        console.log(`You entered: Wednesday\nThe following day is: Thursday`);
        break;
    case "thu":
        console.log(`You entered: Thursday\nThe following day is: Friday`);
        break;
    case "fri":
         console.log(`You entered: Friday\nThe following day is: Saturday`);
         break;
    case "sat":
        console.log(`You entered: Saturday\nThe following day is: Sunday`);
        break;
    case "sun":
        console.log(`You entered: Sunday\nThe following day is: Monday`);
        break;
    default:
    console.log(`Your input was invalid. Please try again.`)
}
