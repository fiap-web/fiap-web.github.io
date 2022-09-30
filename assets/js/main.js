// console.log(nome, "chamando variavel com varios");

// var nome = "fiap";

// escreve("teste")

// function escreve(x){
//     alert(x)
// }

function mudaTitulo(novoTitulo){
    document.querySelector("h1").innerHTML = novoTitulo
}

mudaTitulo("vai coringao")

const mudaTitulo2 = function(novoTitulo) {
    document.querySelector("h2").innerHTML = novoTitulo
}


const relogio = () =>{
    const date = new Date();
   mudaTitulo2(date.toLocaleTimeString());
}

setInterval(relogio, 1000);