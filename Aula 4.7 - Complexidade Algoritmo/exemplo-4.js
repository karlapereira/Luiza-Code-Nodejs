function exemplo4(N, M){
    let a = 0;

    for(let i=0; i<N; i++){                 
        for(let j=0; j<N; j++){            
            if(i !== j) a++;
        }
    }

    // ...
    let b = 0;
    for(let i=0; i<N; i++){                 
        if(i !== j) b = i+j;
    }

    // ...
    let c = 0;
    for(let i=0; i<N; i++){                 
        if(i %2 == 0) c += i;
    }

    return a + b + c

}
