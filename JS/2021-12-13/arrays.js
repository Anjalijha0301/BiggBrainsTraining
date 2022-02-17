const laptop = {
    "brand": "DELL",
    "product": "Inspiron 15 3000"
}

const hobbies = ["Sachin ko Dantna", "Singing", "Dancing"]

console.log(laptop.brand)
console.log(hobbies[0])

hobbies.splice(1, 0, "Drawing", "makeup")

console.log(hobbies)

// sorting
hobbies.sort()
console.log(hobbies)

hobbies.reverse()
console.log(hobbies)


const marks = [78, 90, 50, 64, 89, 85]
marks.sort(function(a, b) {
    return a - b
})

console.log(marks)

marks.forEach(function(x) {
    console.log(x * x)
})

let totalMarks = 0
marks.forEach(function(x) {
    totalMarks += x
})

console.log(totalMarks)


const fruits = ["Banana", "Papaya", "Orange", "Guava", "Kiwi", "Grapes"];
// console.log(fruits.join("*"))
// console.log(fruits.pop())
// console.log(fruits)
// console.log(fruits)
// fruits.push("Litchi");
// console.log(fruits)

// console.log(fruits.unshift("Lemon"))
// console.log(fruits)
// fruits[fruits.length] = "red"
// console.log(fruits)
// delete fruits[0]
// console.log(fruits)
// fruits.splice(2, 3, "pink", "yelow");
console.log(fruits)
const color = fruits.concat("3")
console.log(color)