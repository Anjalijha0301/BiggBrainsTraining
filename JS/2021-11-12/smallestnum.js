const prompt = require("prompt-sync")({ sigint: true })

var n = parseInt(prompt("Enter a number : "))
//console.log("You entered : " + n)

var smallest = n;
// enter numbers until encounter 0
while (n != 0) {
    if (smallest > n) {
        console.log("Updating smallest number, old smallest = " + smallest + ", new smallest = " + n)
        smallest = n;
    }
    n = parseInt(prompt("Enter a number : "))
}
console.log("Thanks for inputs. smallest number is " + smallest)