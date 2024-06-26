const reader = require("readline-sync");

let inputNumber = reader.question("Please input a number: ");

if (inputNumber % 2 === 0)
    console.log("It was an even number!  ");
else
    console.log("It was an odd number!  ");