const prompt = require("prompt-sync")({ sigint: true });
const s = prompt(`Enter a word => `)


function isVowel(c) {
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
        return true;
    } else {
        return false;
    }
}

function vowelAndConsonants(s) {
    let vowels = [];
    let consonants = [];
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
    for (let j = 0; j < consonants.length; j++) {
        console.log(consonants[j])
    }

}
vowelAndConsonants(s)