// objeto Boolean
let varVerdadeira = new Boolean(20);
let varFalsa = new Boolean();

console.log("");
console.log(varVerdadeira.valueOf());
console.log(varFalsa.valueOf());

let varString = "Olá";
let varStringVazia = "";

let varBooleanString = new Boolean(varString)
let varBooleanStringVazia = new Boolean(varStringVazia)

console.log("");
console.log(varBooleanString.valueOf());
console.log(varBooleanStringVazia.valueOf());

let varNumerico = 20;
let varNumericoZero = 0;

let varBooleanNumerico = new Boolean(varNumerico)
let varBooleanNumericoVazio = new Boolean(varNumericoZero)

console.log("");
console.log(varBooleanNumerico.valueOf());
console.log(varBooleanNumericoVazio.valueOf());