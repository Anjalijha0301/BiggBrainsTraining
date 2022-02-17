const num1 = [11, 12, 13, 4, 5, 6, 7, 8, 9, 10, 15]

function isPrime(n) {
    if (n % 2 == 0) {
        return false
    }
    return true
}

function primeNonPrime(c) {
    const prime = []
    const nonPrime = []

    for (let i = 0; i < num1.length; i++) {
        let s = num1[i]

        if (isPrime(s)) {
            prime.push(s)
        } else {
            nonPrime.push(s)
        }

    }
    for (let i = 0; i < prime.length; i++) {
        console.log(`Prime => ${prime[i]}`)
    }
    for (let i = 0; i < nonPrime.length; i++) {
        console.log(`Not a Prime => ${nonPrime[i]}`)
    }
}
primeNonPrime(num1)