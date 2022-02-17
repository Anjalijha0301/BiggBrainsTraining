const arr = [2, 4, 5, 6];

const sqr = arr.map(value => {
    return value * value;
})

console.log(sqr);

const sqrt = sqr.map(item => {
    return Math.sqrt(item);
})
console.log(sqrt)