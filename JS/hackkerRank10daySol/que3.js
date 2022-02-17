const prompt = require("prompt-sync")({ sigint: true });
const length = prompt("Enter length : ")
const width = prompt("Enter width : ")


function getArea(length, width) {
    let area;
    area = (length * width)
    return area;
}
console.log(getArea(length, width))



function getPerimeter(length, width) {
    let perimeter;
    perimeter = 2 * (length + width)
    return perimeter;

}
console.log(`Perimeter => ${getPerimeter(length, width)}`)
console.log(`Area => ${getArea(length, width)}`)