let str1 = process.argv[2];


function isVowel(n) {
    n = n.toLowerCase()
    if (n == "a" || n == "e" || n == "i" || n == "o" || n == "u") {
        return true;
    }
    return false;
}

function vowelsAndConsonants(s) {

    if (!s) {
        console.log("Empty")
        return;
    }

    const vowels = []
    const consonants = []

    for (let i = 0; i < s.length; i++) {

        let c = s[i];
        if (isVowel(c)) {
            vowels.push(c)
        } else {

            consonants.push(c)
        }
    }
    for (let i = 0; i < vowels.length; i++) {
        console.log(vowels[i])
    }
    for (let i = 0; i < consonants.length; i++) {
        console.log(consonants[i])
    }
}
vowelsAndConsonants(str1)