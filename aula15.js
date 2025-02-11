// Loop FOR

/*

Em JavaScript, a estrutura de repetição for é usada para executar um bloco de código 
várias vezes. Ela é muito útil quando você sabe com antecedência 
quantas vezes deseja repetir um conjunto de instruções.

for (inicialização; condição; incremento) {
  // Código a ser executado em cada iteração
}

*/

console.log("Inicio do programa")

for(let i=0; i < 10; i++){
    console.log("CFB Cursos - valor do i: " + i)
}

console.log("Fim do programa")
console.log("")

for(let i=0; i < 10; i++){
    if(i%2==0){
        console.log(i + " é par")
    }else{
        console.log(i + " é impar")
    }
}