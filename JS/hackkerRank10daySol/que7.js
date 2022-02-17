const prompt = require("prompt-sync")({ sigint: true });
const s = prompt("Enter a Letter => ");

function getLetter(s) {
    switch (s[0]) {
        case ("a" || "e" || "i" || "o" || "u"):
            return "A";
        case ("b" || "c" || "d" || "f" || "g"):
            return "B";
        case ("h" || "j" || "k" || "l" || "m"):
            return "C";
        default:
            return "D"
    }
}
console.log(getLetter(s))