console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('DENTRO DE UMA FUNÇÃO')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()