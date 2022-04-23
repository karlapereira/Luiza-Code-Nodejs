let listaLetras = ["A", "B", "C", "D", "E"]
let indexElemento = 0 

//length - tamanho da lista
console.log(listaLetras.length);

//pop() - remover um item no final da nossa lista
listaLetras.pop()

//push() - adicionar um elemento no fim da nossa lista
listaLetras.push("F");

//shift() - remove um elemento no inicio da lista
console.log(listaLetras.shift());

//unshift() - adicionar um elemento no inicio da lista
listaLetras.unshift("AA");

//indexOf() - retorna o indice do elemento da nossa lista
indexElemento = listaLetras.indexOf("C");
console.log(indexElemento)

//splice(pos, quantidade) - remove 1 item pela posição 
listaLetras.splice(indexElemento, 2);

console.log(`Lista ${listaLetras}`);
