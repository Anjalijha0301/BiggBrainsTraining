const pattern1 = /^A.+Z$/
const pattern2 = /^A.*Z$/
const pattern3 = /^A.?Z$/

console.log(pattern1.test("A2Z"))
console.log(pattern2.test("A2Z"))
console.log(pattern3.test("A2Z"))

console.log(pattern1.test("AZ"))
console.log(pattern2.test("AZ"))
console.log(pattern3.test("AZ"))

console.log(pattern1.test("A12Z"))
console.log(pattern2.test("A12Z"))
console.log(pattern3.test("A12Z"))

const pattern4 = /^[(Mr\.|Ms\.|Mrs\.|Dr\.|Er\.)].+[A-Za-z]$/

console.log(pattern4.test("Mr#amk"))