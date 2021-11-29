// data types
// 1. Numbers e.g. 1, 23.0, -67
// 2. String : String is a sequence of character. e.g. "Anjali"
// 3. Object : An object is an Entity which has 3 main things
//  a. Proprties
//  b. Methods
//  c. Identity
// e.g. 
// {
//  "name" : "Anjali",
//  "age" : 20,
//  "aadhaar" : 123456789012
// }    


let age = 20
let name = "Anjali"
let human1 = {
    "name": name,
    "age": age,
    "id": 1
}

console.log("age : " + age)
console.log("name : " + name)
console.log("obj : " + human1)
console.log("human1.name : " + human1.name)
console.log("human1.age : " + human1.age)
console.log("human1.id : " + human1.id)

let car = "Daimler"
let model = "AMG"
let mfd = 2002
let func = {
    "range": "comprehensive",
    "Fservice": "automotive",
    "carNum": 12346
}

console.log("car : " + car)
console.log("model : " + model)
console.log("func.range : " + func.range)
console.log("func.Fservice : " + func.Fservice)


console.log(typeof(car))

let name1 = "Shruti"
let age2 = 50
console.log("name1 : " + name1)