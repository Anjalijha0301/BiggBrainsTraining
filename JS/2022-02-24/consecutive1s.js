let x = parseInt(process.argv[2]);
let y = x.toString(2)

const arr = String(y).split(/0+/);
console.log(y);
console.log(arr)

console.log(String(Math.max(...arr)).length)