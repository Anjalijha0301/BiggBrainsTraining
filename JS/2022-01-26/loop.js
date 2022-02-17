const num = [2, 4, 5, 8, 45];
// let txt = "";
var returnValue;
// for (let x in num) {
//     txt += num[x]
// }
// console.log(txt)


function checkNum(x) {
    if (x < 10) {
        return true;
    } else {
        return false;
    }
}


function myFunction(num) {
    num.forEach(num => {
        returnValue = checkNum(num);
        if (returnValue) {
            console.log("number is less then 10")
        } else {
            console.log("number is greater then 10")
        }
    })
}
myFunction(num);