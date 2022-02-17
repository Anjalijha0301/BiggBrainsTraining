// const date1 = Date()
// const date2 = new Date()
// console.log(date1)
// console.log(date2)

const date3 = new Date(2021, 12, 15)
const date4 = new Date("2021")
const date5 = new Date(-100000000000)
const date6 = new Date()
console.log(date3)
console.log(date4)
console.log(date5)
// console.log(date6.toString())
// console.log(date6.toUTCString())
// console.log(date6.toDateString())
console.log(date6.toISOString())
console.log(new Date("2021-12-19T08:00:00Z"))
const date7 = new Date()
// console.log(date7.getMonth());
// console.log(date7.getMonth());

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// console.log()
// const d = new Date();
// let month = months[d.getMonth()]
// console.log(month)

// const setD = new Date()
// setD.setDate(15)
// console.log(setD)





const d = new Date();
d.setDate(d.getDate() + 50);
console.log(d);

let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2021, 0, 14);



//Maths
console.log(Math.round(2.5))
console.log(Math.ceil(2.5))
console.log(Math.floor(2.6))
console.log(Math.trunc(3.6))
console.log(Math.sign(3.6))
console.log(Math.pow(3, 3))
console.log(Math.acos(55))
console.log(Math.floor(Math.random() * 10) + 10)


console.log(Boolean(100))