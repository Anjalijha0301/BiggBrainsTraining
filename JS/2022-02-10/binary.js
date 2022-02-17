const prompt = require("prompt-sync")({ sigint: true });
const a = parseInt(prompt("Enter a number: "))
const b = parseInt(prompt("Enter b number: "))

let c = a + b
let d = parseInt(a / b)
let e = a * b


console.log(c.toString(2))
console.log(d.toString(2))
console.log(e.toString(2))