//Função parametrizada

function soma(n1,n2){
    console.log(n1+n2)
}

soma(10,5)

function soma2(n1=0,n2=0){ //Dessa forma se define valor se não for passado pro parametro
    console.log(n1+n2)
}

soma2(10)

function soma3(n1,n2){ //Parametrizada e com retorno
    let res
    res=n1+n2
    return res
}

console.log(soma3(10,10))

console.log("")

//Em Javascript pode-se operar uma variável de fora da função dentro da função
function add(v){
    valor+=v
}

let valor=0
console.log(valor)

add(100)
console.log(valor)

add(200)
console.log(valor)