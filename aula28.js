// Método MAP

// O método map() tem o objetivo de executar uma função em cada item de um array.

const cursos=['HTML','CSS','Javascript','PHP','React']
cursos.map((elemento,i)=>{
    console.log("Curso: " + elemento + " - Posição do curso: " + i)
})

console.log("")

let el=document.getElementsByTagName("div")
el=[...el]
el.map((e,i)=>{
    console.log(e)
    e.innerHTML="CFBCursos"
})