let n=5;

function recursiveFatorial(n){
    if (n === 1) {  // criterio de parada
        console.log("criterio de parada com "+n)
        return 1;
    }
    console.log("n:"+n)
    let fatorial = n * recursiveFatorial(n - 1); // chamada recursiva
    console.log(`fatorial de : ${n} é ${fatorial}`)
    return fatorial; 
}

console.log(recursiveFatorial(n))
