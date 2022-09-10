const prompt = require("prompt-sync")({ sigint: true });
const s = prompt(`Enter a string => `)



function reverseString(s) {
    try {
        s = s.split("").reverse().join("")
    } catch (err) {
        console.log(err.message)

    } finally {
        console.log(s)
    }
}

reverseString(s)