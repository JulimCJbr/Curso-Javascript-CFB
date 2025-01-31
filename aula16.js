// Loops FOR IN e FOR OF

let num=[10,20,30,40,50]

for(let i=0;i<num.length;i++){ //length é a propriedade que retorna o comprimento do array(quantidade de elementos)
    console.log(i) //Posição
    console.log(num[i]) //Elemento
}

for(n in num){
    console.log(n) //FOR IN iterea posições do array
}

for(n of num){
    console.log(n) //FOR OF iterea elementos do array
}

//Também usado para percorrer coleções
const objs=document.getElementsByTagName("div")

for(o in objs){
    console.log(o)
}

for(o of objs){
    console.log(o)
}