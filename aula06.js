//Aula de tirar dúvidas

let n1=1
let n2="1"

console.log(n1==n2)

// === comparadação mais profunda, variável compara tipo
console.log(n1===n2) 

// Em objeto compara posição de memória
let v1={nome:"Julio"}
let v2={nome:"Julio"}
let v3=v2
console.log(v1==v2)
console.log(v1===v2)
console.log(v2===v3)

//Leitura e impressão de dados só funciona com interface gráfica 
//Nesse caso só esse exemplo só funciona no Browser e não no node
let nome=prompt("Digite seu nome")
console.log(nome)

//Como identificar pelo javascript por onde o usuário está acessando
if(navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/iPhone|iPad|iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
|| navigator.userAgent.match(/Opera Mini/i)
|| navigator.userAgent.match(/IEMobile/i)
){
    console.log("Celular")
}else{
    console.log("PC")
}