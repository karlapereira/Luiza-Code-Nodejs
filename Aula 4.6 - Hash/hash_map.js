// Função Hash - mapeamento de dados grandes em dados de tamanho menor
let pessoaMap = new Map([
        ["nome", "Luiza"],
        ["idade", 21],
        ["estudante", true]
    ]
);

console.log(pessoaMap)
// map.size - elementos do hashmap
//console.log(pessoaMap.size)

// map.set() = adiciona uma nova chave e valor
//pessoaMap.set("empresa", "Magalu");

// map.get() - retorna o valor do elemento da chave fornecida
//console.log(pessoaMap.get("nome"));

// map.has() - verifica se o hashmap contém a chave que é passada como argumento
//console.log(pessoaMap.has("estudante"));

// map.delete() - exclui o par chave/valor que corresponde à chave que é passada como argumento
//pessoaMap.delete("estudante");

// map.clear() - limpa todos os elementos do hashmap
//pessoaMap.clear()

// map.keys() - Retorna um novo objeto iterador que contèm as chaves de cada elemento do objeto Map na ordem em que foram inseridos.
//console.log(pessoaMap.keys());

// map.values() - Retorna um novo objeto iterador que contém os valores para cada elemento do objeto Map na ordem em que foram inseridos.
//console.log(pessoaMap.values());

// map.entries() - Retorna um novo objeto iterador que contèm um array de [chave, valor] para cada elemento no objeto Map na ordem em que foram inseridos.
// console.log(pessoaMap.entries())

pessoaMap.forEach(function(valor, chave){
    console.log(`chave: ${chave}, valor: ${valor}`);
});

//pessoaMap.set("nome", "Karla");
//console.log(pessoaMap);