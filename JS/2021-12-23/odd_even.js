var num = parseInt(process.argv[2]);

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }

}

for (var i = 0; i < num; i++) {
    if (isEven(i)) console.log(i)
}