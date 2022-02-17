var num = parseInt(process.argv[2]);

function spaceLine(n) {
    var output = ""
    for (var i = 0; i < n; i++) {
        output += "  "
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

for (var i = num;
i > 0;
i--) {
    console.log(`${spaceLine(num-i)} ${starLine(i)}`)
}

for (var i = 1; i <= num; i++) {
    console.log(`${spaceLine(num-i)} ${starLine(i)}`)
}