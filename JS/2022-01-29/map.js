const fruits = new Map([
    ["papaya", 500],
    ["grapes", 600],
    ["orange", 800],
]);

console.log(fruits.get("papaya"))
console.log(fruits.has("apples"))
console.log(fruits instanceof Map)

let text = " ";
fruits.forEach(function(value, key) {
    text += key + " => " + value + " "
})

console.log(text)

let text2 = " ";


for (const x of fruits.entries()) {
    text2 += x + " ";
}
console.log(text2)