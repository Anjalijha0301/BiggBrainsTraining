const myJwels = new Set()

myJwels.add("Ring")
myJwels.add("9 Lakha Haar")
myJwels.add("earing")
myJwels.add("nose ring")
myJwels.add("bracelet")
myJwels.add("Gold Watch")
myJwels.add("earing")

console.log(`Total Jewllaries = ${myJwels.size}`)
myJwels.forEach((item) => {
    console.log(item)
});