//const grid = [1, 2, 3, 4, 5, 6, 7, 8, 9]



// function getOnClick() {
//     for (var i = 0; i < 9; i++) {

//         // console.log(grid[i])
//         if (grid[i] === 1) {
//             grid[i] = 4;
//         } else if (grid[i] === 4) {
//             grid[i] = 7;
//         } else if (grid[i] === 7) {
//             grid[i] = 8;
//         } else if (grid[i] === 8) {
//             grid[i] = 9;
//         } else if (grid[i] === 9) {
//             grid[i] = 6;
//         } else if (grid[i] === 6) {
//             grid[i] = 3;
//         } else if (grid[i] === 3) {
//             grid[i] = 2;
//         } else if (grid[i] === 2) {
//             grid[i] = 1;
//         } else if (grid[i] === 5) {
//             continue;
//         }

//     }
// }
// getOnclick()
function getOnClick() {
    const b1 = document.getElementById('btn1')
    const b2 = document.getElementById('btn2')
    const b3 = document.getElementById('btn3')
    const b4 = document.getElementById('btn4')
    //const b5 = document.getElementById('btn1')
    const b6 = document.getElementById('btn6')
    const b7 = document.getElementById('btn7')
    const b8 = document.getElementById('btn8')
    const b9 = document.getElementById('btn9')

    const x = b1.innerHTML

    b1.innerHTML = b4.innerHTML
    b4.innerHTML = b7.innerHTML
    b7.innerHTML = b8.innerHTML
    b8.innerHTML = b9.innerHTML
    b9.innerHTML = b6.innerHTML
    b6.innerHTML = b3.innerHTML
    b3.innerHTML = b2.innerHTML
    b2.innerHTML = x
}