// Loops FOR IN e FOR OF

/*

Quando precisar iterar sobre objetos (for...in).
Quando precisar iterar sobre arrays ou strings (for...of).

*/

let num=[10,20,30,40,50]

for(let i=0;i<num.length;i++){ //length é a propriedade que retorna o comprimento do array(quantidade de elementos)
    console.log(i) //Posição
    console.log(num[i]) //Elemento
}

console.log("")

for(let n in num){
    console.log(n) //FOR IN iterea posições do array, não os elementos. Também pode ser usado para objetos.
}

console.log("")

for(let n of num){
    console.log(n) //FOR OF iterea elementos do array, não as posições.
}

console.log("")

//Também usado para percorrer coleções
const objs=document.getElementsByTagName("div")

for(let o in objs){
    console.log(o) //Posição
}

console.log("")

for(let o of objs){
    console.log(o) //Elemento
}