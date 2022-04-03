let listNumeros = [1,2,3,4,5]
let listNumerosPares = []

Array.prototype.retornaPares = function(){
    let numeroPares = []
    this.forEach(elemento =>{
        if(elemento%2 === 0)
            numeroPares.push(elemento);
    })
    return numeroPares
}

listNumerosPares = listNumeros.retornaPares();

console.log(listNumerosPares)