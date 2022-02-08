/*
Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece 
quando faz o seguinte comando no console: console.log(0.1 + 0.2);
O resultado será: 0.30000000000000004.
Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula 
e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função 
JavaScript paraque ela receba um valor como 0.30000000000000004 e retorne R$0,30 
(observe a vírgula e o ponto).

*/

function classificaAluno(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aprovado com nota ${notaCorrigida}`);
    } else {
        console.log(`Reprovado com nota ${notaCorrigida}`);
    }
}

function arredondar (nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(84)
