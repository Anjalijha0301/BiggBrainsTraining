const prompt = require("prompt-sync")({ sigint: true });
const s = prompt(`Enter a string => `)

function getFactorial(n) {
    let res = 1;
    for (let i = n; i > 0; i--) {
        res *= i
    }
    return res
}
getFactorial(s)