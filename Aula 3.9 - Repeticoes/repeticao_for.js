
let resultado = 0;

for(let i=10; i>=0; i--){
    console.log(i);
}





//continue: pular algum pedaço fluxo no laço de retição sem sair do laço
for(let i=0; i<=10; i++){
    if(i%2==0){
        continue
    }
    console.log(i);
    //codigos
}




// // break: serve para interromper o laço de repeticão se caso um condição for atendida
massaBolo = 'heterogenea'
for(let quantidadeBatidas=0; quantidadeBatidas<=30; quantidadeBatidas++){
    if(quantidadeBatidas===25){
        massaBolo = 'homogenea';
    }
    if(massaBolo === 'homogenea'){
        break
    }
    console.log(quantidadeBatidas);
}

