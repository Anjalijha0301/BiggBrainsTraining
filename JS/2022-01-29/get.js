const employee = {
    name: "anjali",
    age: 21,
    salary: 50000,
    lang: "en",
    get language() {
        return this.lang.toUpperCase();
    },

};
console.log(employee.language);