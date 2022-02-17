const prompt = require("prompt-sync")({ sigint: true });
const n = prompt("Enter Date (DD/MM/YYYY : ").split(' ');

function getDayName(x) {
    var dayName = ["sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];
    let d = new Date(x)
    return dayName[d.getDay()];
}

d.forEach(date => {
    console.log(getDayName(date))
})