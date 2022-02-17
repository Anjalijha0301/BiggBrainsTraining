var num = parseInt(process.argv[2]);

function starLine(n) {
    var output = ""
    for (var i = 0; i < n; i++) {
        output += "*"
    }
    return output;
}


for (var i = num; i > 0; i--) {
    console.log(`${i}. ${starLine(i)}`)
}