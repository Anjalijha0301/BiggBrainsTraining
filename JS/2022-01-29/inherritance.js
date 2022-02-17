class Person {
    constructor(personInfo) {
        this.persronName = personInfo;
    }
    Info() {
        return ` I'm ` + this.persronName;
    }
}

class ageInfo extends Person {
    constructor(name, age) {
        super(name);
        this.ageInfo = age;
    }
    show() {
        return this.Info() + " " + this.ageInfo;
    }
}
let personInfo = new ageInfo("Anjali", "21");
console.log(personInfo.show())