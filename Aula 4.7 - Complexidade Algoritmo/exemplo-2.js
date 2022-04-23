let N = 10;


function exemplo2(N){
    for(let i=0; i<N; i++){         //O(N)         
        for(let j=0; j<N; j++){     //O(N)    
            if(i !== j) console.log(i, j);
        }
    }
    
}

exemplo2(N)

// O(N) * O(N)
// O(N^2)