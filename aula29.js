// Operador THIS

// this aponta para o contexto onde uma função está sendo executada. 
// Seu valor dentro de uma função depende de como a função foi invocada. 
// Em uma mesma função, this pode ter diferentes valores, em diferentes momentos, 
// dependendo da invocação.

function aluno(nome,nota){
    this.nome=nome
    this.nota=nota

    this.dados_arrow=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const al1=new aluno("Bruno",100)
al1.dados_arrow()