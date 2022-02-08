/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
*/

function validarNumeros(valor) {
    if( valor % 3 == 0) {
        return true
    } else
        return false
}

console.log(validarNumeros(10))
console.log(validarNumeros(7))
console.log(validarNumeros(3))