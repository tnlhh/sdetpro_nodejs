let intArray = [12, 34, 1, 16, 28, 99, 95, 21, 100];
let total = intArray.length;

for (let outerIndex = 0; outerIndex < total; outerIndex++) {
    for (let innerIndex = 0; innerIndex < total - 1 - outerIndex; innerIndex++) {
        if (intArray[innerIndex + 1] < intArray[innerIndex]) {
            let currentValue = intArray[innerIndex];
            intArray[innerIndex] = intArray[innerIndex + 1];
            intArray[innerIndex + 1] = currentValue;
        }
    }
}

console.log(`Sort min to max: ${intArray}`);
