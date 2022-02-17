const students = {

    studentName: "anjali",
    studentAge: 21,
    course: "web designing",
    timePeriod: "6 month",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};
students.lang = "hindi"
console.log(students.language);