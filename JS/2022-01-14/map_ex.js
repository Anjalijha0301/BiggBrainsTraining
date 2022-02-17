const myLife = new Map();

myLife.set("Name", "Anjali")
myLife.set("Phone", "Iphone 13 Pro")
myLife.set("Dost", ["Sachin", "Riya"])

console.log(`Size : ${myLife.size}`)
for (key in myLife) {
    console.log(`${key} = ${myLife.get(key)}`)
}

myLife.forEach((item) => {
    console.log(`${item}`)
});