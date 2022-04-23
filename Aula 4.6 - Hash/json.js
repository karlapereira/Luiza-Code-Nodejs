// Função Hash - mapeamento de dados grandes em dados de tamanho menor
// json - Javascript Object Notation 
let pessoa = {
    "nome": "Luiza",
    "idade": 22,
    "empresa": "Magazine Luiza"
}

console.log(pessoa)


// key access
pessoa["estudante"] = true
console.log(pessoa)
console.log(pessoa["idade"]);

// // delete key
delete pessoa["idade"]
console.log(pessoa);

for(let chave in pessoa) {
      console.log(`chave: ${chave}, valor: ${pessoa[chave]}`);
}
