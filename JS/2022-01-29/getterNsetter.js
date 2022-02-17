const studentDetail = {
    studentName: "anjali",
    studentAge: 21,
    course: "web designing",
    timePeriod: "6 month",
    lang: "en",

    fullDetail: function() {
        return this.studentName + " " + this.studentAge + " " + this.course + " " + this.timePeriod;
    },
    get language() {
        return this.lang.toUpperCase()
    }
}
console.log(studentDetail.fullDetail())
console.log(studentDetail.lang)