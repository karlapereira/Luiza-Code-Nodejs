let arrayHash = new Array()
// Luiza, Maria, Luna, Gabi
let words = ["Luiza", "Luna"]


// funcao de espalhamento para array
function hash(word){
      hashmap = word.length
      // colisao
      // while(arrayHash[hashmap] !== undefined){
      //       hashmap++;
      // }
      console.log("hashmap:"+hashmap)
      return hashmap
}

words.forEach(function(value, index, list){
      console.log("")
      console.log(value, index)
      index = hash(value)
      arrayHash[index] = value
      console.log(arrayHash)
})



// funcao de busca de um index
// function findHash(word){
//       hashmap = word.length
//       while(arrayHash[hashmap] !== word){
//             hashmap++;
//       }
//       console.log(`hashmap: ${hashmap} of ${word}`);
//       return hashmap
// }

// words.forEach(function(value, index, list){
//       index = findHash(value)
//       console.log(arrayHash[index])
// })