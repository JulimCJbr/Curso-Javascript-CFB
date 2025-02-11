// Operador Ternário

let num=10

let res=num%2

if(res==0){
    console.log("Par")
}else{
    console.log("Impar")
}

//Podemos usar o operador ? ao invez de usar esses if else
//0 = False
//1 = True
//Teste Lógico ? se verdadeiro : se falso
res=(!(num%2) ? "Par" : "Impar") //! negando para inverter, pois o resultado é 0, então é falso
console.log(res)