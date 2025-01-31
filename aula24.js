//Funções Anônimas

const f=function(v1,v2){ //Função anônima não tem nome e é atrelada a uma variável ou constante
    return v1+v2
}

console.log(f(10,5)) //Só ocupa espaço na memória quando é chamada

const ff=function(...valores){ //Mesma coisa, só que usando operador spread
    let res=0
    for(v of valores){
        res+=v
    }
    return res
}

console.log(ff(10,5,50))

const fff=new Function("v1","v2","return v1+v2") //Função Construtor Anônima, serve para operações simples

console.log(fff(10,5))