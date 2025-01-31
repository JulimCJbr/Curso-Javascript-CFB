//Operadores Bitwise 

let n1=10,n2=11

let res = n1 & n2

/*  
    & ---> Como funciona esse operador?
    Resultado dessa operação pega os numeros binários equivalentes a 10 e 11
    Onde houver equivalencia de bit 1 ele retorna 1
    00001010 é 10 em binário
    00001011 é 11 em binário
        1 1  esses 1's nestas posições são equivalentes, o restante vai ser 0
    00001010 = resultado é 10 em binário

*/
console.log(res) 

let res2 = n1 | n2

/*
    | ---> Como funciona esse operador?
    Resultado dessa operação pega os numeros binários equivalentes a 10 e 11
    Onde houver bit 1 ele retorna 1 idependente de equivalencia
    00001010 é 10 em binário
    00001011 é 11 em binário
        1 11  esses 1's nestas posições são retornados, o restante vai ser 0
    00001011 = resultado é 11 em binário

*/
console.log(res2) 

//Operadores & e | funcionam parecido com && e || porém na comparação bit a bit

let res3 = n1 ^ n2

/*
    ^ ---> Como funciona esse operador?
    Resultado dessa operação pega os numeros binários equivalentes a 10 e 11
    Onde houver bit 1 ele retorna 1 se não houver equivalencia
    00001010 é 10 em binário
    00001011 é 11 em binário
           1  esses 1 nesta posição é retornados, o restante vai ser 0
    00000001 = resultado é 1 em binário
*/
console.log(res3)

let res4 = n1 << 1

/*
    << desloca todos os bits para a esquerda
    Colocando 1 na frente do operador vai deslocar em uma casa
    00001010 é 10 em binário
    00010100 deslocando para esquerda passa a ser 20 em binário
    Ele MATA o primeiro bit da esquerda e acrescenta 0 no último
    Quando é deslocado 1 para a esquerda o número é sempre dobrado
*/
console.log(res4)

let res5 = n1 >> 1

/*
    >> desloca todos os bits para a direita
    Colocando 1 na frente do operador vai deslocar em uma casa
    00001010 é 10 em binário
    00000101 deslocando para esquerda passa a ser 5 em binário
    Ele MATA o bit último bit da direita e acrescenta 0 no primeiro
    Quando é deslocado 1 para a direita o número é sempre dividido pela metade
*/
console.log(res5)

