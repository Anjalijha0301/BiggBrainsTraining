var num1 = parseInt(process.argv[2]);
var num2 = parseInt(process.argv[3]);
console.log(`Finding the Prime num b/w ${num1} and ${num2}`)

function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % 2 == 0) {
            return false
        }
        return true
    }
}
let count = 0;

for (var i = num1; i <= num2; i++) {
    if (isPrime(i)) {
        count++
    }
}
console.log(count)