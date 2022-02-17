let a = 45;
let b = 52;


console.log(`${a} = ${(a).toString(2)}`)
console.log(`${b} = ${(b).toString(2)}`)

let c = a & b;
console.log(`${c} = ${(c).toString(2)} = ${a} & ${b}`)

let d = a | b;
console.log(`${d} = ${(d).toString(2)} = ${a} | ${b}`)

let e = a ^ b;
console.log(`${e} = ${(e).toString(2)} = ${a} ^ ${b}`)

let f = ~a;
console.log(`${f} = ${(f).toString(2)} = ~${a}`)

let g = a >> b
console.log(`${g} = ${(g).toString(2)} = ${a}>>${b}`)







// console.log(45 & 52)
// console.log(45 | 52)