const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultado(6.1)
imprimirResultado(8.1)
imprimirResultado('Epa!')