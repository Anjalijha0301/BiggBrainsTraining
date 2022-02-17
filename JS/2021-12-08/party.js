const prompt = require("prompt-sync")({ sigint: true });

let age = parseInt(prompt("Enter your age: "))



function party(age) {
    if (age > 17) {
        return "congratulations"
    } else {
        return "Getout"
    }
}
console.log(party(age))