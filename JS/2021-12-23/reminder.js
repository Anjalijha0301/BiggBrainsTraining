var num = parseInt(process.argv[2]);



for (i = 2; i < num; i++) {
    let rem = num % i;

    if (rem == 0) {
        console.log("** ** ** ** **")
    }
    console.log(rem)
}