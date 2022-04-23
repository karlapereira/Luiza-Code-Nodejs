// Função Hash - mapeamento de dados grandes em dados de tamanho menor
// json - Javascript Object Notation 
let pessoa = {
    "nome": "Luiza do Magalu",
    "idade": 22,
    "empresa": "Magazine Luiza"
}

// key access
pessoa["idade"] = 26

// delete key
delete pessoa["idade"]

console.log(pessoa);

for(let chave in pessoa) {
      console.log(`
            chave: ${chave}, 
            valor: ${pessoa[chave]}
      `);
}