try {
    let a = "Hello"
    console.log(a);
    throw 'Kitne Aadmi the kaliya??'
} catch (err) {
    console.log(`Error : ${err}`)
} finally {
    console.log(`I always run...`)
}