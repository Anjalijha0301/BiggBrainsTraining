// console.log(5 * 2);
// let x = 5;
// let y = 6;

// console.log(x * y);

// console.log("hello heena");

// let a, b, c;
// a = 10;
// b = "Heena";
// c = a + b;
// console.log(c);
// // console.log(typeof(b));
// console.log(typeof(c));

// let z;
// console.log(z);

// let q = 3;
// q++
// let p = (50 + 60) * q;
// console.log(p);
// let t = 50;
// ++t
// let l = t;
// console.log(l ** 3);
// console.log(t + 40);


let x = "Anjali";
console.log("Name:" + x)

console.log("Global 5:" + x)

{
    let y = 20;
    console.log("age:" + y)
}
const name = ["Hey", "I'm", "Bhawna"]
console.log(name[2])
name.unshift("Hello")
console.log(name)
name[3] = "who"
console.log(name)

teamF = {
    Fmem: {
        name: "Anjali",
        age: 20,
        project: "first",
    },
    Smem: {
        name: "Shruti",
        age: 18,
        project: "none",
    },

    greeting: ["This", "is", "javascript"]
}
console.log(teamF.Fmem)
console.log(teamF.Smem.project)

let z = 10;
let q = 5;
console.log(z++)
console.log(z)
console.log(++q)
console.log(q)

//ternatery 
let p = 20;
let msg = 900 == 900 ? "Thanks Sir" : "Sorry Sir"
console.log(msg)

//argument
console.log("Hello " + process.argv[2])
console.log("hii " + process.argv[3])


//function
function optr(n, m) {
    let c = n + m
    return c
}
let add = optr(500, 200)
console.log(c = +add)

//input question
const prompt = require("prompt-sync")({ sigint: true });
let intro = prompt("Hey what's your name:")
console.log(`Hii ${intro},I am anjali`)

let que = prompt("How are you:")
console.log(`That's good that you are ${que} now`)

let num = parseInt(prompt("Enter your age:"))
console.log(num)
console.log(typeof(num))

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(num) ? "even" : "odd")