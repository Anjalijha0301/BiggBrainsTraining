let a = -105;
let b = 2;

console.log(`${a}=> ${a.toString(2)}`)
console.log(`${b}=> ${b.toString(2)}`)

let c = a >> b;
let d = a << b;
let e = a >>> b;

console.log(`${c}=> ${c.toString(2)} => a >> b`)
console.log(`${d}=> ${d.toString(2)} => a << b`)
console.log(`${e}=> ${e.toString(2)} => a >>> b`)