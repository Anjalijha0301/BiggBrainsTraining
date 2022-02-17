var n = parseInt(process.argv[2]);

let res = n;
while (n > 1) {
    n--;
    res = res * n;
}

console.log(`Factorial of ${n}! is ${res} `)


// H.W.
// 5! = 5 x 4!
//    = 5 x 4 x 3! 
//    = 5 x 4 x 3 x 2! 
//    = 5 x 4 x 3 x 2 x 1!
//    = 5 x 4 x 3 x 2 x 1
//    = 5 x 4 x 3 x 2
//    = 5 x 4 x 6
//    = 5 x 24
//    = 120