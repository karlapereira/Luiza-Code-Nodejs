function exemplo4(N, M){
    let a = 0;

    // O(N^2)
    for(let i=0; i<N; i++){                 //O(N)
        for(let j=0; j<N; j++){             //O(N)
            if(i !== j) a++;
        }
    }

    // ...
    //0(N)
    let b = 0;
    for(let i=0; i<N; i++){                 //O(N)
        if(i !== j) b = i+j;
    }

    // ...
    //O(N)
    let c = 0;
    for(let i=0; i<N; i++){                 //O(N)
        if(i %2 == 0) c += i;
    }

    return a + b + c

}
//O(N^2) + O(N) + O(N)
//O(N^2) + 2O(N)
//O(N^2) + O(N)
//O(N^2)