// Loop While

/*

O while em JavaScript é uma estrutura de repetição (loop) que executa um bloco de código 
enquanto uma condição for verdadeira. Ele é útil quando não sabemos exatamente 
quantas vezes o loop deve ser repetido, mas temos uma condição que precisa ser atendida.

*/

let n=0

while(n<10){
    console.log(n)
    n++
}

//Calcular fatorial por exemplo
//5! = 5*4*3*2*1 = 120

let num=5
let fat=1

while(num>=1){
    fat*=num //fat=fat*num
    num--
}

console.log("Fatorial de 5 é " + fat)