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
//Teste Lógico ? se verdadei : se falso
res=(!(num%2) ? "Par" : "Impar") //! negando para inverter
console.log(res)