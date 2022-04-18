let listaNumeros = [1, 2, 3, 4, 5]
let indexElemento = 0 

//length - tamanho da lista
console.log(listaNumeros.length)

//pop() - remover um item no final da nossa lista
console.log(listaNumeros.pop())

//push() - adicionar um elemento no fim da nossa lista
listaNumeros.push(6)

//shift() - remove um elemento no inicio da lista
console.log(listaNumeros.shift())

//unshift() - adicionar um elemento no inicio da lista
listaNumeros.unshift(0)

//indexOf() - retorna o indice do elemento da nossa lista
indexElemento = listaNumeros.indexOf(4)
//console.log(indexElemento)

//splice(pos, quantidade) - remove 1 item pela posição 
listaNumeros.splice(indexElemento, 2)

console.log("Lista: "+listaNumeros)
