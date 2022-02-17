 // Prime Number
 // A number which is divisible by 1 or itself and must have 2 factors is called prime number
 // For example : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53


 function isPrime(n) {
     for (var i = 2; i < n / i + 1; i++) {
         if (n % i == 0) {
             return false;
         }
     }
     return true;
 }

 // //console.log(isPrime(process.argv[2]) ? `${i} is prime` : `${i} is not prime`)

let count = 0;
let start = parseInt(process.argv[2])
let end = parseInt(process.argv[3])

for (var i = start; i <= end; i++) {
	if (isPrime(i)) {
		count++;
		//console.log(`${i} is prime`)
	}
}

console.log(`Total primary between ${start} to ${end} =>  ${count}`)

