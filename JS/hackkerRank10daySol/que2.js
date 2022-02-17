const prompt = require("prompt-sync")({ sigint: true });
const secondInteger = parseInt(prompt("Enter a integer number: "))
const secondDecimal = parseInt(prompt("Enter a decimal number: "))
const secondString = prompt("Enter a string : ")

function performOperation(secondInteger, secondDecimal, secondString) {
    const firstInteger = 4;
    console.log(firstInteger + parseInt(secondInteger))
    const firstDecimal = 4.0;
    console.log(firstDecimal + parseFloat(secondDecimal))

    const firstString = 'HackerRank ';

    console.log(firstString.concat(secondString))
}
performOperation(secondInteger, secondDecimal, secondString)