const prompt = require("prompt-sync")({ sigint: true });
const arr = prompt(`Enter a number of array => `);


function getSecondHighestNum() {
    let highestNum = -9999999999999999999999999;
    let secondHighetsNum = -999999999999999999999999;
    for (let i = 0; i < arr.length; i++) {
        if (highestNum == arr[i]) {
            continue;
        } else if (highestNum < arr[i]) {
            secondHighetsNum = highestNum;
            highestNum = arr[i];
        } else if (secondHighetsNum < arr[i]) {
            secondHighetsNum = arr[i];
        }
    }
    return secondHighetsNum;
}

console.log(getSecondHighestNum(arr));