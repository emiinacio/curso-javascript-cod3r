/*
Crie uma função que recebe dois parâmetros, 
base e expoente, e retorne a base elevada ao expoente.
*/
function potenciacao(base, expoente) {
    let resultado = Math.pow(base, expoente)
    resultado = base ** expoente

    return resultado
}

console.log(potenciacao(2, 2))
console.log(potenciacao(4, 2))