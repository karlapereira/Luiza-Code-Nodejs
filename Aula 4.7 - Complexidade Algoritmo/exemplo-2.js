let N = 10;


function exemplo2(N){
    for(let i=0; i<N; i++){            
        for(let j=0; j<N; j++){         
            if(i !== j) console.log(i, j);
        }
    }
    
}

exemplo2(N)
