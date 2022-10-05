const aereasNacionais = ["Azul","Gol","Latam"]

const airCompanies = [
    ...aereasNacionais,
    "Delta",
    "United Airlines",
    "Emirates",
    "Qatar",
    "Tap"
]

console.log(airCompanies)

//atribuicao por desestruturacao

let [azul, gol, delta, ...internacional]= airCompanies;

console.log(internacional)


const user = {
    name:"Miguel Cardoso",
    email: "miguel.cardoso@avanade.com",
    password: "12345"
}

const {password, ...data} = user;

console.log(password, " retornado dados da api")


const body = document.querySelector("#resultado")
let toggle = 1;

body.addEventListener("mouseover", (event)=>{
    toggle = -toggle
    if(toggle == 1){
        body.style.background = "black";

    }else{
        body.style.background = "blue";
    }
    console.log("executou o evento");
})