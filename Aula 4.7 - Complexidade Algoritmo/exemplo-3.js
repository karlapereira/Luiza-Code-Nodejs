function exemplo3(N, M){
    for(let i=0; i<N; i++){             //O(N)       
        for(let j=0; j<M; j++){         //O(M)
            if(i !== j) console.log(i, j);
        }
    }
}

//O(N)*O(M)