// method1 to create object
const myCar = {
    name: "Ferrari",
    baran: "Ford",
    run: function(speed) {
        console.log(`${this.name} running at ${speed}`)
    }
}

console.log(myCar)

myCar.run(200)

// method2 to create object

function Person(name, age) {
    this.name = name;
    this.age = age;
}


const p1 = new Person("Anjali", 21)

console.log(JSON.stringify(p1))


// method3 to create object

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    intro() {
        console.log(`I am ${this.name} and i am ${this.age} years old.`)
    }
}

const p2 = new Student("Anjali", 12)

p2.intro()