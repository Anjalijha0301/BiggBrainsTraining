const prompt = require("prompt-sync")({ sigint: true });
const n = prompt("Enter Dates(MM/DD/YYYY) : ").split(' ');



function getDayName(dateString) {
    var dayName = ["sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"
    ];
    let d = new Date(dateString);

    return dayName[d.getDay()];
}

n.forEach(date => {
    console.log(getDayName(date))
});