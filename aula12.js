// Operador Spread

let n1=[10,20,30]
let n2=[11,22,33,44,55]
let n3=[n1,n2] // Ao se fazer a atribuição desse jeito o n3 será na verdade uma matriz com dois arrays, para se acessar por exemplo o valor 10 nessa matriz se deve usar a notação n3[0][0];
let n4=[...n1,...n2] //O operador spread quebra um array e devolve elemento a elemento
// Ao se fazer a atribuição desse jeito o n4 será um array, para se acessar o valor 10 nesse array se deve usar a notação n4[0]

console.log("n1: " + n1)
console.log("n2: " + n2)
console.log("n3: " + n3)
console.log("n4: " + n4)
console.log("n3[0][0]: " + n3[0][0])
console.log("n4[0]: " + n4[0])
console.log("")

//Usando em objetos

const jogador1={nome:"Bruno",energia:100,vidas:3,magia:150}
const jogador2={nome:"Bruce",energia:100,vidas:5,velocidade:80}
const jogador3={...jogador1,...jogador2} //Concatenação dos objetos usando Spread

console.log(jogador3)
console.log("")

//Usando em Funções

const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

let valores=[1,5,4]

console.log(soma(valores)) //Sem o Spread o v1 vai receber todos os valores do array
console.log(soma(...valores)) //Com o Spread os valores são espalhados nas posições
console.log("")

 //Usando HTML Collection
 
 const objs1=document.getElementsByTagName("div") //HTML Collection, Visualiza apenas no navegador, não no node
 const objs2=[...document.getElementsByTagName("div")] //Array de elementos HTML

 objs2.forEach(element => { //Exemplo de retornar os elementos da coleção (navegador)
    console.log(element)
 })

 objs2.forEach(element => {
    element.innerHTML="Curso" //Exemplo de alteração elementos
 })
 
 console.log(objs1) //Mostra o HTML Collection
 console.log(objs2) //Mostra o Array de elementos HTML