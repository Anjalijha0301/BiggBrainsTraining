const myArr1 = [
    [-1, 1, -1, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [-1, -1, -1, 0, 0, 0],
    [0, -9, 2, -4, -4, 0],
    [7, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0]
]

function maxSumHourGlass(myArr1, n, m) {
    let maxSum = -99999999999
    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < m - 2; j++) {
            let sum = myArr1[i][j] + myArr1[i][j + 1] + myArr1[i][j + 2] +
                myArr1[i + 1][j + 1] +
                myArr1[i + 2][j] + myArr1[i + 2][j + 1] + myArr1[i + 2][j + 2];

            if (sum > maxSum) {
                maxSum = sum;
            }

        }
    }
    return maxSum;
}

const maxSum = maxSumHourGlass(myArr1, 6, 6);
console.log(maxSum)