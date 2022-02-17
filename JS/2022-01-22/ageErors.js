function checkAge(age) {
    if (age < 18) {
        throw new Error("Age Error");
    } else {
        return true;
    }
}

function letsParty(participants) {
    participants.forEach(participant => {
        try {
            checkAge(participant.age);
            console.log(`${participant.name} allowed`)
        } catch (err) {
            console.log(`${participant.name} not allowed`)
        }
    });
}

const participants = [{
        "name": "Anjali",
        "age": 21
    },
    {
        "name": "CMPundhir",
        "age": 12
    },
    {
        "name": "Gyan Sir",
        "age": 5
    }
]

letsParty(participants);