function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value.replaceAll("+", " ");
    });
    return vars;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function num2words(num) {
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Ninteen", "Twenty"
    ]
    const tens = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninty"]
    const others = ["Hundred", "Thousands", "Lakhs", "Crores"]

    function oneTo99(n) {
        if (n < 20) {
            return ones[n]
        } else {
            let t = parseInt(n / 10)
            let o = n % 10
            console.log(`t = ${t} , o = ${o}`)

            return tens[t] + (o == 0 ? "" : " " + ones[o])
        }
    }

    function oneTo999(n) {
        if (n < 100) {
            return oneTo99(n)
        } else if (n < 1000) {
            let h = parseInt(n / 100)
            let d = n % 100
            console.log(`h = ${h} , d = ${d}`)
            return ones[h] + " Hundred " + oneTo99(d)
        }
    }

    function oneTo99999(n) {
        if (n < 1000) {
            return oneTo999(n)
        } else {
            let th = parseInt(n / 1000)
            let h = n % 1000
            console.log(`th = ${th} , h = ${h}`)
            return oneTo99(th) + " Thousand " + oneTo999(h)
        }
    }

    function oneTo9999999(n) {
        if (n < 100000) {
            return oneTo99999(n)
        } else {
            let th = parseInt(n / 100000)
            let h = n % 100000
            console.log(`th = ${th} , h = ${h}`)
            return oneTo99(th) + " Lakh " + oneTo99999(h)
        }
    }

    function oneTo999999999(n) {
        if (n < 10000000) {
            return oneTo9999999(n)
        } else {
            let th = parseInt(n / 10000000)
            let h = n % 10000000
            console.log(`th = ${th} , h = ${h}`)
            return oneTo99(th) + " Crore " + oneTo9999999(h)
        }
    }

    return oneTo999999999(num)
}

function getToday() {
    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', hour12: false, minute: 'numeric' };
    return new Date().toLocaleDateString("en-US", options)
}

function setUi(params) {
    document.getElementById('currentDate').innerHTML = getToday()
    document.getElementById('name').innerHTML = params['name']
    document.getElementById('bname').innerHTML = params['bname']
    document.getElementById('Depositor').innerHTML = params['Depositor']

    document.getElementById('receiver').innerHTML = params['receiver']


    document.getElementById('Mnumber').innerHTML = getRndInteger(999999999, 9999999999)
    document.getElementById('txnid').innerHTML = getRndInteger(10000, 100000)

    //for cd print form
    document.getElementById('t2000').innerHTML = params['n2000']
    let p2000 = parseInt(params['n2000'])
    p2000 = isNaN(p2000) ? 0 : p2000
    document.getElementById('r2000').innerHTML = "\u20b9 " + p2000 * 2000

    document.getElementById('t500').innerHTML = params['n500']
    let p500 = parseInt(params['n500'])
    p500 = isNaN(p500) ? 0 : p500
    document.getElementById('r500').innerHTML = "\u20b9 " + p500 * 500

    document.getElementById('t200').innerHTML = params['n200']
    let p200 = parseInt(params['n200'])
    p200 = isNaN(p200) ? 0 : p200
    document.getElementById('r200').innerHTML = "\u20b9 " + p200 * 200

    document.getElementById('t100').innerHTML = params['n100']
    let p100 = parseInt(params['n100'])
    p100 = isNaN(p100) ? 0 : p100
    document.getElementById('r100').innerHTML = "\u20b9 " + p100 * 100

    document.getElementById('t50').innerHTML = params['n50']
    let p50 = parseInt(params['n50'])
    p50 = isNaN(p50) ? 0 : p50
    document.getElementById('r50').innerHTML = "\u20b9 " + p50 * 50

    // document.getElementById('t20').innerHTML = params['n20']
    // let p20 = parseInt(params['n20'])
    // p20 = isNaN(p20) ? 0 : p20
    // document.getElementById('r20').innerHTML = "\u20b9 " + p20 * 20

    // document.getElementById('t10').innerHTML = params['n10']
    // let p10 = parseInt(params['n10'])
    // p10 = isNaN(p10) ? 0 : p10
    // document.getElementById('r10').innerHTML = "\u20b9 " + p10 * 10

    let sum = p2000 * 2000 + p500 * 500 + p200 * 200 + p100 * 100 + p50 * 50 //+ p20 * 20 + p10 * 10
    document.getElementById("pTotal").innerHTML = "\u20b9 " + sum

    document.getElementById('amnt_word').innerHTML = num2words(sum)
}


const params = getUrlVars()
setUi(params)