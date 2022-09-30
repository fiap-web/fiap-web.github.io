const resultado = document.querySelector("#resultado");

let myFunc1 = {
    showArguments(){
        resultado.innerHTML = arguments;
        console.log(...arguments)
    }
}

// myFunc1.showArguments("vai coringao", "full stack dev", " avanade", "software enginneer")

let user =  {
    name: "Glaucio Daniel",
    usandoArrow: ()=>{
        console.log("meu nome é ",this.name)
    },
    usandoNominal: function(){
        console.log("meu nome é ",this.name)
    }
}

myFunc1.showArguments()