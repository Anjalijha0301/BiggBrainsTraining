var n = parseInt(process.argv[2]);

function circle(r) {

    this.r = r;
    //area of circle
    this.area = function() {
        return Math.PI * r * r;
    }
    // perimeter of circle
    this.perimeter = function() {
        return 2 * Math.PI * r;
    }

}
let c = new circle(n)
console.log(`Area of circle=> ${c.area()}`)
console.log(`Perimeter of circle=> ${c.perimeter()}`)