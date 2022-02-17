const person = new Set(["anjali", "bhawna", "heena"]);

let text = "";

person.forEach(function(name) {
    text += name + " "
})
console.log(text)

const food = new Set(["Pizza", "BiggPizza", "Momoz"])

let FoodName = " ";
food.forEach(function(types) {
    FoodName += types + " "
})

console.log(FoodName)