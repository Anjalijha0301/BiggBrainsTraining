    const prompt = require("prompt-sync")({ sigint: true });
    const Integer = parseInt(prompt("Enter a number => "));
    const double = parseFloat(prompt("Enter a float Number => "));
    const string = prompt("Enter a string => ");

    function main() {
        let i = 4;
        let d = 4.0;
        let s = "HackerRank";
        console.log(Integer + i)
        console.log(parseFloat(d + double).toFixed(1))
        console.log(`${string} is the best place`)
    }
    main()