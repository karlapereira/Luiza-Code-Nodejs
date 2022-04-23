
/**
 * implementem hash usando outra funcao hash da criatividade de vcs
 */

let arrayHash = new Array();
// Luiza, Maria, Luna, Gabi
let words = ["Luiza", "Luna", "Bia", "Luana"];


//console.log("Criando o hash");

// funcao de espalhamento para array
function hash(word){
      hashmap = word.length;

      // colisao
      while(arrayHash[hashmap] !== undefined){
            hashmap++;
      }

      //console.log("hashmap:"+hashmap)
      return hashmap; 
}


words.forEach(function(value, index, list){
      //console.log("");
      //console.log(value, index);
      let index_hash = hash(value);
      arrayHash[index_hash] = value;
      //console.log(arrayHash);
})

// [, , , Bia,Luna, Luiza, Luana]
console.log("Encontrando elemento atraves do hash \n\n");


// funcao de busca de um index
function findHash(word){
      hashmap = word.length;

      //colisao
      while(arrayHash[hashmap] !== word){
            hashmap++;
      }
      console.log(`hashmap encontrado: ${word} -> ${hashmap}`);
      return hashmap;
}


// console.log(findHash("Luana"));
// console.log(arrayHash[6]);

words.forEach(function(value, index, list){
      index = findHash(value);
      console.log(arrayHash[index]);
})
