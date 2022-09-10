const prompt = require("prompt-sync")({ sigint: true });
const n = prompt(`Enter a number => `)


function recursonFactorial(n) {
    if (n <= 0) {
        return 1;
    }
    return n * recursonFactorial(n - 1);

}
let res = recursonFactorial(n);
console.log(res)