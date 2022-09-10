const prompt = require("prompt-sync")({ sigint: true });
const n = prompt(`Enter a number => `)

function getTale(n, i = 1) {
    if (i > 10) {
        return;
    }
    console.log(`${n} x ${i} = ${n*i}`)
    getTale(n, i + 1);
}
getTale(n)