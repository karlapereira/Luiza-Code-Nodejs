let nomeEmpresa = "ComSchool";
let anosExperiencia = 10;

/** Sem template string **/
let textoComum = "Oi, somos a " + nomeEmpresa + "! Um grupo de pessoas apaixonadas pelo digital e queremos convidar você a fazer parte dessa Revolução." + 
				 "\n\nCom mais de " + anosExperiencia + " anos de experiência em cursos de performance digital, nos tornamos referência no Brasil." + 
				 "\n\nAqui, você aprende na prática, de forma facil e leve." + 
				 "\n\nA gente acredita na troca de conhecimento e em conexões verdadeiras para dar mais poder às pessoas e às empresas no desenvolvimento de negócios." + 
				 "\n\nVamos juntos?";

console.log("Sem template string:");
console.log(textoComum);

/** Com template string **/
let textoTemplateString = `
Oi, somos a ${nomeEmpresa}! Um grupo de pessoas apaixonadas pelo digital e queremos convidar você a fazer parte dessa Revolução.

Com mais de ${anosExperiencia} anos de experiência em cursos de performance digital, nos tornamos referência no Brasil.

Aqui, você aprende na prática, de forma facil e leve.

A gente acredita na troca de conhecimento e em conexões verdadeiras para dar mais poder às pessoas e às empresas no desenvolvimento de negócios.

Vamos juntos?
`;

console.log("");
console.log("Com template string:");
console.log(textoTemplateString);
