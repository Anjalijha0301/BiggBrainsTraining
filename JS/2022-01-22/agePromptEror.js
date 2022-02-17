const prompt = require("prompt-sync")({ sigint: true });

let permission = prompt("Do you want to start Party (y/n) : ")
if (permission != "y") {
    console.log("No Party Today")
    return;
}

let num = parseInt(prompt("How many participants: "))

const participants = [];

for (let i = 0; i < num; i++) {
    console.log(`Enter participant ${i+1} Details : `)
    let name = prompt(" Enter your name: ")
    let age = parseInt(prompt(" Enter your age: "))
    let participant = {
        "name": name,
        "age": age
    }
    console.log("")
    participants.push(participant)
}



function letsParty(participants) {
    participants.forEach(participant => {
        if (participant.age < 18) {
            console.log(`${participant.name} is not allowed`)
        } else {
            console.log(`${participant.name} is allowed`)
        }
    })
}
letsParty(participants);