// scope - contexto atual do código
// escopo global - variáveis, funções que podem ser acessadas de qualquer parte do codigo
// escopo local - variáveis, funções que podem ser acessadas e manipuladas apenas dentro do contexto/codigo específico


// variavel global
let sistema = "Solar";


function exibirPlanetas(){
    // variavel local
    let planetas = ["Marte", "Terra", "Júpiter"];
    console.log(planetas)
    console.log(sistema)
};


console.log(planeta)
exibirPlanetas()
