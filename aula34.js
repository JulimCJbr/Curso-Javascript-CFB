// Adicionando eventos com addEventListener

//const c1=document.getElementById("c1")
// const c1=document.querySelector("#c1")

// // const msg=()=>{
// //     alert("Clicou")
// // }

// c1.addEventListener("click",(evt)=>{
//     alert("Clicou")
//     const el=evt.target
//     el.classList.add("destaque")
// })

const cursos=[...document.querySelectorAll(".curso")]

let cor

cursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const el=evt.target
        el.classList.add("destaque")
        console.log(el.innerHTML + " foi clicado")
        alert("Clicou")
        cor="vermelho"
            
        el.addEventListener("click",evt=>{
            const el=evt.target
            el.classList.add("destaque2")
            console.log(el.innerHTML + " foi clicado 2")
            alert("Clicou 2")
            cor="azul"
        })
    })
})