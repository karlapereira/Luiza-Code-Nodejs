//forEach - para percorrer um array no javascript

let frutas = ["Maçã", "Banana", "Melancia"]

frutas.forEach(function(elemento, index, lista){
    if(elemento === 'Banana'){
        frutas[index] = 'Goiaba';
    }
    console.log(index, elemento);
});

console.log(frutas);
