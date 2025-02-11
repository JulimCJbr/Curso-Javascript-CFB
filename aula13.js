// Comando condicional IF e IF ELSE

// if e else são usados para controle de fluxo, 
// permitindo que seu código execute diferentes blocos de instruções com base em condições.

//Sintaxe Básica

// if (condicao) {
//     // Código executado se a condição for verdadeira (true)
// } else {
//     // Código executado se a condição for falsa (false)
// }

//Exemplo

let num=100

if(num > 10){
    console.log("Numeral maior que 10")
    if(num > 50){
        console.log("Numeral maior que 50")
    }
}else if(num > 5){
    console.log("Numeral está entre 6 e 10")
}else{
    console.log("Numeral menor ou igual a 5")
}
console.log("Fim do programa\n")

// Explicação sobre if e else em JavaScript do ChatGPT

// 1. Estrutura básica do if...else
console.log("1. Exemplo básico do if e else:");
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

console.log("\n");

// 2. Exemplo com if...else if...else
console.log("2. Exemplo com múltiplas condições usando else if:");
let nota = 85;

if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80) {
    console.log("Nota B");
} else if (nota >= 70) {
    console.log("Nota C");
} else {
    console.log("Nota F");
}

console.log("\n");

// 3. Exemplo com operador ternário
console.log("3. Exemplo com operador ternário:");
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultado);