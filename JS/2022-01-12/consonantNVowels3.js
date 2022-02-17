let str1 = process.argv[2];


function isVowel(n) {
    n = n.toLowerCase()
    if (n == "a" || n == "e" || n == "i" || n == "o" || n == "u") {
        return true;
    }
    return false;
}

function consonantsAndVowels(s) {
    if (!s) {
        console.log("Empty")
        return;
    }
    const consonants = []
    const vowels = []

    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (!isVowel(c)) {
            consonants.push(c)
        } else {
            vowels.push(c)
        }
    }
    for (i = 0; i < consonants.length; i++) {
        console.log(consonants[i])
    }
    for (i = 0; i < vowels.length; i++) {
        console.log(vowels[i])
    }

}
consonantsAndVowels(str1)