const prompt = require("prompt-sync")({ sigint: true });
const r = prompt('Enter radius of Circle : ')

function main() {
    const PI = Math.PI;
    console.log(`Area of circle => ${PI*r*r}`)

    console.log(`Perimeter of circle => ${2*PI*r}`)
}
main(r)