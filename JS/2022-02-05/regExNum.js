const prompt = require("prompt-sync")({ sigint: true });
const inputtxt = prompt("Enter your mob number: ").split(' ').map(item => {
    return parseInt(item);
});

function checkNum(inputtxt) {
    let reg = /^[6-9]\d{9}$/;
    if (reg.test(inputtxt)) {
        return true;
    } else {
        return "Enter Valid number"
    }
}

console.log(checkNum(inputtxt))