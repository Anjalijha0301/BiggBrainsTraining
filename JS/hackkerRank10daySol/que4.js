const prompt = require("prompt-sync")({ sigint: true });
const num = prompt("Enter a number to find Factorial : ")

function factorial(num) {
    let num2 = 1;
    for (var i = 1; i <= num; i++) {
        num2 = num2 * i;
    }
    return num2;
}
console.log(factorial(num))