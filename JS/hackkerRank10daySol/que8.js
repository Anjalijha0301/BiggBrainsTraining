const prompt = require("prompt-sync")({ sigint: true });
const s = prompt("Enter a word => ");

function isVowel(c) {
    c = c.toLowerCase()
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
        return true;
    } else {
        return false;
    }
}

function vowelAndConsonants(s) {
    const vowels = []
    const consonants = []
    for (var i = 0; i < s.length; i++) {
        let c = s[i];
        if (isVowel(c)) {
            vowels.push(c)
        } else {
            consonants.push(c)
        }
    }
    for (var i = 0; i < vowels.length; i++) {
        console.log(vowels[i]);
    }
    for (var i = 0; i < consonants.length; i++) {
        console.log(consonants[i]);
    }
}

vowelAndConsonants(s)