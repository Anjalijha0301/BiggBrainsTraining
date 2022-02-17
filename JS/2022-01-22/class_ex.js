class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak(message) {
        console.log("My Message is : " + message);
    }
}

let p1 = new Person("Anjali", 21);
let p2 = new Person("CMPundhir", 12);
let p3 = new Person("Gyan Sir", 5);

console.log(p1);
console.log(p2);
console.log(p3);

p1.speak("Hello I'm anjali here");