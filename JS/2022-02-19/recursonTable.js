const prompt = require("prompt-sync")({ sigint: true });
const n = prompt(`Enter a number => `)

function getTable(n) {
    for (let i = 1; i < 11; i++) {
        const result = i * n;
        console.log(`${n} X ${i} = ${result}`);
    }
}
getTable(n)