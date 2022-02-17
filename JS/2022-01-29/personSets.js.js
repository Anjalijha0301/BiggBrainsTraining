//method 1
const person = new Set();


person.add("anjali");
person.add("bhawna");
person.add("heena");

person.delete("anjali")
console.log(person)
console.log(person.size)

//method 2
const food = new Set(["Pizza", "Burger", "Momoz"]);
// food.add("BigPizza")

food.add("Pizza");
food.add("Pizza");

console.log(food)