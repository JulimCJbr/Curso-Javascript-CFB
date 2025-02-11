// Switch Case

/*
 É uma estrutura de controle de fluxo usada para lidar com múltiplas 
 condições de forma mais organizada e eficiente do que várias instruções if...else if.
*/

let colocacao=5

switch(colocacao){
    case 1:
        console.log("Primeiro Lugar") // Código executado se expressao === 1
        break // O break é usado para interromper a execução do switch no bloco de código atual
    case 2:
        console.log("Segundo Lugar") // Código executado se expressao === 2
        break
    case 3:
        console.log("Terceiro Lugar") // Código executado se expressao === 3
        break
    case 4: case 5: case 6:
        console.log("Prêmio de participação") // Código executado se expressao === 4, 5 ou 6
        break
    default:
        console.log("Não subiu ao pódio") // Código executado se expressao não corresponder a nenhum case
        break
}