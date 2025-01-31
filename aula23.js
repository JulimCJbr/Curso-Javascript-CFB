//Parametro REST

function soma(...valores){ //PARAMETRO REST:Usando operador spreead para pegar cada elemento do array 
    let tam=valores.length //Pegando a quantidade de número informados por parametro
    let res=0
    for(let i=0;i<tam;i++){ //Loop para somar o valores
        res+=valores[i]
    }
    return res
}

console.log(soma(10,5,2,15,8)) //Posso adicionar qualquer quantidade de valores
console.log(soma(10,7))
console.log("")

function soma2(...valores){
    let resultado=0
    for(let v of valores){ //Usando FOR OF(pega elementos do array)
        resultado+=v
    }
}

console.log(soma(10,5,2,15,8))
console.log(soma(10,7))