let a = 99;
let b = 155;

console.log(`${a} =>${(a).toString(2)}`)
console.log(`${b} =>${(b).toString(2)}`)


c = a & b;
console.log(`${c} =>${(c).toString(2)} =>${a} & ${b}`)
d = a | b;
console.log(`${d} =>${(d).toString(2)} =>${a} | ${b}`)
e = a ^ b;
console.log(`${e} =>${(e).toString(2)} =>${a} ^ ${b}`)
f = ~a;
console.log(`${f} =>${(f).toString(2)} =>${a} | ${b}`)
g = a >> b;
console.log(`${g} =>${(g).toString(2)} =>${a} >> ${b}`)