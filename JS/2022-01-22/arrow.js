let a = 4;
let b = 10;

let c = (a, b) => a * b / a;
console.log(c(4, 5))

let person = (name, age) => {
    let p = {
        "name": name,
        "age": age
    }
    return p;
}
console.log(person("anjali", 21))