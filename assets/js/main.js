// console.log(nome, "chamando variavel com varios");

// var nome = "fiap";

// escreve("teste")

// function escreve(x){
//     alert(x)
// }

function mudaTitulo(target,novoTitulo){
    document.querySelector(target).innerHTML = novoTitulo
}

mudaTitulo("h1","vai coringao")

const mudaTitulo2 = function(novoTitulo) {
    document.querySelector("h2").innerHTML = novoTitulo
}


const relogio = () =>{
    const date = new Date();
   mudaTitulo2(date.toLocaleTimeString());
}


const phrases = ["A vida e bela", "A vida é curta", "A vida e uma dadiva"]

let i =0;
setInterval(()=>{
    mudaTitulo("h1",phrases[i])
    i++;
    if(i > 2){
        i = 0;
    }
}, 4000);