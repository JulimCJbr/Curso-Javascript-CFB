// Funções Geradoras

// As funções geradoras (generator functions) são funções onde a execução é adiada 
// até o momento que precisamos de seu retorno. Os contextos ficam salvos a cada reentrada.

// Funções geradoras são pilares para uma programação assíncrona que mitigam os problemas 
// com callbacks. Ao invocar a uma função geradora sua implementação não é execudata 
// imediatamente. Ao invés disso é retornado um iterator. Somente quando precisamos do 
// retorno de seu valor next() a implementação é executada até a parada com 
// o termo yield que especifíca o valor a ser retornado pela execução.

// O retorno não é o próprio valor em sim mas um objeto contendo dois atributos value e done 
// que indica se a função já terminou toda sua execução.

function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

let itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)

function* perguntas(){
    const nome=yield 'Qual seu nome?'
    const esporte=yield 'Qual seu esporte favorito?'
    return 'Seu nome é ' + nome + ', seu esporte favorito é ' + esporte
}

const itp=perguntas()
console.log(itp.next().value)
console.log(itp.next('Bruno').value)
console.log(itp.next('Natação').value)

function* contador(){
    let i=0
    while(true){
        yield i++
    }
}

const itcc=contador()
console.log(itcc.next().value)
console.log(itcc.next().value)
console.log(itcc.next().value)
