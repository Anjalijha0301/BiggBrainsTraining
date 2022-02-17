const employee = {
    name: "",
    age: 21,
    salary: 50000,
    lang: "en",
    set setname(n) {
        this.name = n.toUpperCase();
    }

};
employee.setName = "anjali";

console.log(employee);