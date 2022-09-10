const prompt = require("prompt-sync")({ sigint: true });
const a = parseInt(prompt(`Enter a length of rectangle => `));
const b = parseInt(prompt(`Enter a width of rectangle => `));

function rectangle(a, b) {
    const rec = {
        length: a,
        width: b,
        area: a * b,
        perimeter: 2 * a + 2 * b
    }
    return rec;
}
const rec = new rectangle(a, b);

console.log(rec.length);
console.log(rec.width);
console.log(rec.perimeter);
console.log(rec.area);