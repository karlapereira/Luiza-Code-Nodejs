let exemploDois = new Array("João", "José", "Maria");

exemploDois.push("Marta");
console.log(exemploDois);

exemploDois = new Array("João", "José", "Maria");

exemploDois.unshift("Marta", "Marcos");
console.log("");
console.log(exemploDois);

exemploDois = new Array("João", "José", "Maria");

exemploDois.splice(2, 0, "Marta");
console.log("");
console.log(exemploDois);