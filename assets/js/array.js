const carrosDOM = document.querySelector("#carros");

const veiculos = ["Chevrolet", "Ford", "Fiat", "VW", "Honda","Toyota", "Hyundai","Volvo"]
// EMPURRA NO FINAL
veiculos.push("BMW")

// ADICIONA AO COMECO
veiculos.unshift("Audi")

// TIRA O PRIMEIRO
// veiculos.shift()

//tira o ultimo
// veiculos.pop()

//tira um elemento e adiciona 3 
veiculos.splice(0,1,"Volvo","Gurgel", "Crysler")

//substring
let substring = veiculos.slice(11,12)
console.log(substring)

veiculos.forEach((value,key)=>{
    carrosDOM.innerHTML += `<option value = "${key}"> ${value} </option>`
})
/////////////

const nbaTeams = ["Warriors", "Raptors", "Lakers", "Celtics", "Bucks", "76ers"]
let nba = nbaTeams.slice(5,6)
console.log(nba)
/////////////

const name = "Luiz Miguel Cardoso"
const nameArray = name.split(" ")
const nameComplete = [nameArray[0], nameArray.slice(-1)]. join( " ")
console.log(nameComplete)

/////
const procuraCeltic = (nometime)=>{return nometime == 'Celtics' || nometime == 'Raptors'}
const celticsmap = nbaTeams.map(procuraCeltic)// retorna um novo array, mapeando e buscando
const celticsFilter = nbaTeams.filter(procuraCeltic) // retorna um n ovo array, procura do comeco a ofim
const celticsFind = nbaTeams.find(procuraCeltic) // retorna um novo array, procura a primeira ocorrencia

console.log(celticsmap, " map")
console.log(celticsFilter, " filter")
console.log(celticsFind, " find")