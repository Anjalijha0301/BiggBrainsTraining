const prompt = require("prompt-sync")({ sigint: true });
const n = prompt(`Enter a number to get factorial => `)

function getFactorial(n) {
    let fac = 1;
    for (let i = n; i > 0; i--) {

        fac *= i
    }
    return fac;
}

let res = getFactorial(n)
console.log(res)