var num = parseInt(process.argv[2]);

let a = 0;
let b = 1;

for (var i = 0; i < num; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
}