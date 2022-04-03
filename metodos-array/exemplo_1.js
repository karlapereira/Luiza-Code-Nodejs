let listaNumeros = [1, 2, 3, 4, 5]

//length - tamanho da lista
console.log(listaNumeros.length)

//pop - remover um item no final da nossa lista
console.log("Removendo: "+listaNumeros.pop())

//push - adicionar um elemento no fim da nossa lista
console.log(listaNumeros.push(6))

//shift - remove um elemento no inicio da lista
console.log(listaNumeros.shift())

//unshift - adicionar um elemento no inicio da lista
console.log(listaNumeros.unshift(0))

//indexOf - retorna o indice do elemento da nossa lista
let indexElemento = listaNumeros.indexOf(2)

//splice - remove 1 item pela posição
listaNumeros.splice(indexElemento, 2)


console.log("Lista: "+listaNumeros)
