let intArr = [1, 2, 3, 4, 5, 6, 7];

let evenAr = new Array();
let oddAr = new Array();

for (let i = 0; i < intArr.length; i++) {
    let type = intArr[i];
    type % 2 === 0 ? evenAr.push(type) : oddAr.push(type);
}

let countEvenNumbers = evenAr.length;
let countOddNumbers = oddAr.length;

console.log(`Event Numbers: ${countEvenNumbers}`);
console.log(`Odd Numbers: ${countOddNumbers}`);







