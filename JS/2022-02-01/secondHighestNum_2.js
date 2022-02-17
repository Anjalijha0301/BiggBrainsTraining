const prompt = require("prompt-sync")({ sigint: true });
const arr = prompt(`Enter numbers to create your array : `).split(' ').map(item => {
    return parseInt(item);

});

function findSecondHighestNum(arr) {
    let highestNum = -999999999999999999999999;
    let secondHighetsNum = -99999999999999999999999;
    const arrLen = arr.length

    for (var i = 0; i < arrLen; i++) {
        if (highestNum == arr[i]) {
            continue;
        } else if (highestNum < arr[i]) {
            secondHighetsNum = highestNum;
            highestNum = arr[i];
        } else if (secondHighetsNum < arr[i]) {
            secondHighetsNum = arr[i]
        }
    }
    return secondHighetsNum;
}

console.log(findSecondHighestNum(arr))