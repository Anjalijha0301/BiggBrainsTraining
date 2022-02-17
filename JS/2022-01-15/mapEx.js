const salary = new Map();
salary.set("A", 5000)
salary.set("b", 10000)
salary.set("c", 20000)

// salary.forEach((item) => {
//     console.log(item)
// })


let text = "";
for (const x of salary.entries()) {
    text += x + "/";
}

console.log(text)