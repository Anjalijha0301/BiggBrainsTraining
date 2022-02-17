const students = {
    firstName: "anjali",
    lastName: "jha",
    age: 21
};

// Object.defineProperty(students, "age", { value: "Don't ask" })
Object.defineProperty(students, "name", { writable: true })
console.log(students)