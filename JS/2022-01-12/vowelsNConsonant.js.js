var str1 = process.argv[2];

function isVowel(c) {
    c = c.toLowerCase()
    if (c == "a" || c == "e" || c == "i" || c == "o" || c == "u") {
        return true;
    }
    return false;
}

function vowelsAndConsonants(s) {
    if (!s) {

        console.log("Empty string issue")

        return;
    }
    const vowels = []
    const consonants = []
    for (let i = 0; i < s.length; i++) {
        let c = s[i];

        if (isVowel(c)) {

            //console.log("vowel found")
            vowels.push(c)

        } else {

            //console.log("consonant found")

            consonants.push(c)
        }
    }
    console.log(`vowels count : ${vowels.length}`)
    console.log(`consonant count : ${consonants.length}`)
    for (let i = 0; i < vowels.length; i++) {
        console.log(vowels[i])
    }
    for (let i = 0; i < consonants.length; i++) {
        console.log(consonants[i])
    }
}


vowelsAndConsonants(str1)