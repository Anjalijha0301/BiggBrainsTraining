var n = parseInt(process.argv[2]);

let res = n;
while (n > 1) {
    n--;
    res = res * n;
}
console.log(res)