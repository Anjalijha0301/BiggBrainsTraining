const prompt = require("prompt-sync")({ sigint: true });
let permission = prompt("Do you want to participate (y/N) : ")

if (permission != "y") {
    console.log(`Ohk that's your choice`)
    return;
}

let num = parseInt(prompt("How many participants : "))

let participant = [];

for (i = 1; i < num; i++) {
    console.log("Enter participant details : ")
    let name = prompt("	Enter your name: ")
    let age = parseInt(prompt("	Enter your age: "))
    let participants = {
        "name": name,
        "age": age

    }
    console.log(" ")
    participant.push(participants)
}

function registration(participant) {
    participant.forEach(participant => {
        if (participant.age >= 18) {
            console.log(`${name} your registration is successful`)
        } else {
            console.log(`${name}you are not eligible`)
        }
    })
}
registration(participant)