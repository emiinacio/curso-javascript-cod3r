
//par nome / valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' //conteto léxico 2
    return saudacao
}

const saudacao = 'Epa'

//Objetos são grupos aninhados pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)