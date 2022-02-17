var num = parseInt(process.argv[2]);

function isPrime(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}


for (var i = 2; i < num; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}