const prompt = require("prompt-sync")({ sigint: true });
const n = parseInt(prompt("Enter a number => "));

function IsWeird(n) {
    if (n % 2 == 0 & n <= 5) {
        console.log("Not Weird")
    } else if (n % 2 == 0 & n <= 20) {
        console.log("Weird")
    } else if (n % 2 == 0 & n > 20) {
        console.log("Not Weird")
    } else {
        console.log("Weird")
    }
}
IsWeird(n)