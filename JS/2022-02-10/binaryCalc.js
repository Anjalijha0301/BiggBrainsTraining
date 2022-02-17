let expr = "";


function onInput(s) {
    if (expr == "0") {
        if (s == "1") {
            expr = s;
        }
    } else {
        expr += s
    }
    document.getElementById("output").innerHTML = expr
}

function onInputExp(e) {
    expr += e
    document.getElementById("output").innerHTML = expr


}

function clrInputExp(c) {
    expr = c;
    document.getElementById("output").innerHTML = expr


}

function screenOutput() {
    // split expr according to operator
    const array = expr.split(/[+-/*]{1}/)
    const decimal1 = parseInt(array[0], 2);
    const decimal2 = parseInt(array[1], 2);
    let findOp = expr.match(/[+-/*]{1}/)
    findOp = findOp ? findOp[0] : "";
    // console.log(findOp)    let result = 0;
    // console.log(decimal1);
    // console.log(decimal2);

    const btnEql = document.getElementById("btnEql").value



    switch (findOp) {
        case "+":
            result = decimal1 + decimal2
            break;
        case "-":
            result = decimal1 - decimal1
            break;
        case "*":
            result = decimal1 * decimal2
            break;
        case "/":
            result = decimal1 / decimal2
    }
    document.getElementById("output").innerHTML = result.toString(2)
}

// console.log(totalSum);
// console.log(result)}