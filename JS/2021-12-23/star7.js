var num = parseInt(process.argv[2]);

function spaceLine(n) {
    var output = ""
    for (var i = 0; i < n; i++) {
        output += "  ";
    }
    return output;
}

function starLine(n) {
    var output = ""
    for (var i = 0; i < n; i++) {
        output += " " + "*"
    }
    return output;
}

function rightStars(n) {
    var output = ""
    for (var i = 0; i < n - 1; i++) {
        output += " " + "*"

    }
    return output;
}


for (var i = 1; i <= num / 2; i++) {
    console.log(`${spaceLine(num-i)} ${starLine(i)}${rightStars(i)}`)
}

for (var i = (num / 2) - 1; i > 0; i--) {
    console.log(`${spaceLine(num-i)} ${starLine(i)}${rightStars(i)}`)
}