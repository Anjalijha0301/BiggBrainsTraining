const colors = ["red", "yellow", "orange", "green", "black"]
let text = "";

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}
// console.log(text)

for (let i = 4; i > colors.length; i--) {
    text += colors[i] + " ";
}
console.log(colors.reverse())

for (let i = 1; i < 11; i++) {
    console.log(i * 18)
}
for (var i = 10; i > 0; i--) {
    console.log(i)
}