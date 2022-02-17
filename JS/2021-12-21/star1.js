var num = parseInt(process.argv[2]);

function starLine(n) {
    var output = ""
    for (var i = 0; i < n; i++) {
        output += "*"
    }
    return output;
}



for (var i = 1; i <= num; i++) {
    console.log(`${i}. ${starLine(i)}.${starLine(i)}`)
}