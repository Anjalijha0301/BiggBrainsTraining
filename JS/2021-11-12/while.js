const prompt = require("prompt-sync")({ sigint: true })

var n = parseInt(prompt("Enter a number : "))
//console.log("You entered : " + n)

var largest = n;
// enter numbers until encounter 0
while (n != 0) {
    n = parseInt(prompt("Enter a number : "))
    if (largest < n) {
        console.log("Updating largest number, old largest = " + largest + ", new largest = " + n)
        largest = n;
    }
}
console.log("Thanks for inputs. Largest number is " + largest)