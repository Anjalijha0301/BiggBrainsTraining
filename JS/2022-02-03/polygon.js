class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
    perimeter() {
        let sum = 0;
        this.sides.forEach(item => {
            sum += item
        });
        return sum;
    }
}
const rectangle = new Polygon([10, 20, 40, 50]);
const square = new Polygon([20, 40, 30, 50]);
const pentagon = new Polygon([10, 10, 10, 20]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());