const person1 = {
    fullName: function() {
        return this.firstName + "" + this.lastName;
    }
}
const person2 = {
    firstName: "Anjali",
    lastName: "jha",
}

let x = person1.fullName.call(person2)
console.log(x)