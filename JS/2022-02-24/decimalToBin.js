let x = 133334;
let y = x.toString(2)
console.log(`Decimal to binary converson => ${y}`)

let myArr = String(y).split("").map((num) => {
    return Number(num)
})

console.log(myArr)
let countOnse = 0;
let countZero = 0;


for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] == 1) {
        countOnse += 1
    } else if (myArr[i] != 1) {
        break;
        countZero = countOnse;
        countOnse = myArr[i]
    }
}
console.log(countOnse)