function chackSalay(salary) {

    if (salary < 10000) {
        throw new Error("Need to work more")
    } else {
        return "true";
    }
}

function pramotion(employeeDetail) {
    employeeDetail.forEach(employeeSalary => {
        try {
            chackSalay(employeeSalary.salary);
            console.log(`${employeeSalary.name} Congratulations you are promoted, your salary is ${employeeSalary.salary} now`)
        } catch (err) {
            console.log(`${employeeSalary.name} Sorry but you need to improve your self, your salary is ${employeeSalary.salary} now`)
        }
    })
}






const employeeDetail = [{
        "name": "Heena",
        "salary": 11000
    },
    {
        "name": "Tannu",
        "salary": 9000
    },

    {
        "name": "Vansh",
        "salary": "50000 you are the boss now"
    },

    {
        "name": "Shruti",
        "salary": 4000
    }

]
pramotion(employeeDetail);