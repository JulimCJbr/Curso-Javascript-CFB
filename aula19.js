// Break e Continue

// 'Break' para o loop, O 'Continue' pula para a próxima iteração do loop

let n=0
let max=1000
let pares=0

while(n<max){
    console.log("CFB Cursos - " + n)
    if(n>10){
        break //parou o loop
    }
    n++
}
console.log("Fim do programa 1")
console.log("")

n=0

for(let i=n;i<max;i++){
    if(i%2!=0){ //Todo resto que é diferente de 0
        continue //Vai pular iteração
    }
    pares++
}
console.log("Quantida de pares: " + pares)
console.log("Fim do programa 2")