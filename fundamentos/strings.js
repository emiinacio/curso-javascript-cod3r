const escola = "Cod3r";

console.log(escola.charAt(4))
console.log(escola.charAt(5)) //pega a posição
console.log(escola.charCodeAt(3)) //pega uma referencia do unicode
console.log(escola.indexOf('3')) //pega a referente da string

console.log(escola.substring(1)) //Pega todos a partir do primeiro
console.log(escola.substring(0, 3))//pega o primeiro e vai até o terceiro, sem incluir o terceiro

console.log('Escola '.concat(escola).concat("!")) //concatena
console.log(escola.replace(3, "e")) //faz a subistituição do 3 pelo "e"

console.log('Ana, Maria, Pedro'.split(',')) //vai gerar um array