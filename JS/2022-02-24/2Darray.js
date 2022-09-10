let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let nRow = arr.length
for (let i = 0; i < nRow; i++) {
    const row = arr[i];
    const length = row.length;
    console.log(`row ${i} => ${row}`)
    for (let j = 0; j < length; j++) {
        console.log(`    col ${j} => ${row[j]}`)
    }
}