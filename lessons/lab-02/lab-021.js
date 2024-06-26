const reader = require("readline-sync");

let weight = getUserInput("User's weight in kilograms: ");
let height = getUserInput("User's height in meters: ");

const bmi = weight / (height * height);

console.log("--Result--")
console.log(`User's BMI: ${bmi.toFixed(2)}`);
console.log(`User's BMI category: ${categorizeBMI(bmi)}`);


////////

function getUserInput(prompt) {
    return parseFloat(reader.question(prompt));
}


function categorizeBMI(bmi) {
    if (bmi < 18.5) return "underweight";
    if (bmi <= 24.9) return "normal";
    if (bmi <= 29.9) return "overweight";
    else return "obese";
}