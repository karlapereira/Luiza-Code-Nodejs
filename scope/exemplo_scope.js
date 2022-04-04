// contexto global
let sistemaUniverso = "Solar";

function printPlanetas(){
    // contexto local
    let planetas = ["Mercúrio", "Vênus", "Terra", "Marte"]
    console.log(planetas)
    console.log(sistemaUniverso)
}

console.log(sistemaUniverso) //Solar
printPlanetas()
