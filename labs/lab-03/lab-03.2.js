let intArr = [1, 2, 3, 4, 5, 6, 7, 99, 25];
let min = intArr[0];
let max = intArr[0];

for (let i = 0; i < intArr.length; i++) {
    let index = intArr[i];
    min = min < index ? min: index;
    max = max > index ? max : index;
}
console.log(`Minimum: ${min}`);
console.log(`Maximum: ${max}`);
