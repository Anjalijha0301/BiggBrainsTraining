//1. take an input for n where n is an integer and n denote number of rows 
//2. take another input m where m is an interger and denote number of cols
//3. now create a 2D array where n is number of row and m is number of col
//4. now take input for each element of 2D array
//5. print 2D array in 2 dimensional form

const prompt = require("prompt-sync")({ sigint: true });
const n = parseInt(prompt(`Enter number of rows => `));
const m = parseInt(prompt(`Enter number of cols => `));


function get2Darray(n) {
    let arr = [];
    let arrtext = '';
    for (let i = 0; i < n; i++) {
        const row = [];
        arr.push(row);
        for (let j = 0; j < m; j++) {
            row.push(parseInt(prompt(`Enter element (${i},${j}): `)));
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            arrtext += arr[i][j] + " "
        }
        console.log(arrtext)
        arrtext = ''
    }
}
get2Darray(n)