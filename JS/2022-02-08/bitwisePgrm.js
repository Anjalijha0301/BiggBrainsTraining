



const prompt = require("prompt-sync")({ sigint: true });
const n = parseInt(prompt("Enter n number: "))
const k = parseInt(prompt("Enter k number: "))

function getBitwiseAnd(n, k) {
    //const res = []
    let x = 0;
    for (var i = 1; i < n; i++) {
        for (var j = i + 1; j <= n; j++) {
            //let r = `${i}&${j}=${i&j} `
            //res.push(i & j);
            //console.log(r)
            let r = i & j;
            if (x < r && r < k) {
                x = r;
            }
        }
    }
    return x;
}

getBitwiseAnd(n, k);