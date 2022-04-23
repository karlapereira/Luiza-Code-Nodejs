// complexidade de algoritmo
//1 - Levar em consideração apenas as repetições do código
//2 - Pontuar a quantidade de passos de cada laço com notação Big O.
//3 - Somar todas as complexidade anotadas.
//4 - Ignorar as constantes e utilizar o termo de maior grau.

let N = 10;

function exemplo1(N){
    for(let i=0; i<N; i++){             //O(N)        
        if(i%2 === 0) console.log(i); 
    }
}

exemplo1(N)
// O(N)