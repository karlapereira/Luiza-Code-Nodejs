// continue: pular algum pedaço fluxo no laço de retição sem sair do laço
// break: serve para interromper o laço de repeticão se caso um condição for atendida

for(let i=0; i<=10; i++){
    console.log(i)
}

for(let i=0; i<=10; i++){
    if(i===5){
        continue
    }
    console.log(i)
}

for(let i=0; i<=10; i++){
    if(i===5){
        break
    }
    console.log(i)
}
