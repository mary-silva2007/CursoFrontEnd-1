// Manipulação de String (Cadeia de caracteres)
let texto = "Aula de Javascript";

// Contar quantos caracteres tem essa variável
console.log(texto.length);

// Transformar tudo em maiúsculo
console.log(texto.toUpperCase()); // MAIÚSCULO
console.log(texto.toLowerCase()); // minúsculo

// Extrair parte da String
console.log(texto.substring(0, 4)); // Aula
console.log(texto.slice(-10)); // Javascript

// Substituir parte da String
let texto2 = texto.replace("Java", "Type"); // Substituir Java por Type (Resultando em TypeScript)
console.log(texto2);

// Tesoura (Trim)

let texto3 = "   Javascript   ";
console.log(texto3); //'   Java Script   '
console.log(texto3.trim()); //Java Script

// Split (Separação)

let linguagens = "Javascript, Python, PHP, C++, Java";
let linguagensArray = linguagens.split(", ");
console.log(linguagens);
console.log(linguagensArray);

// Desafio 
// Contar a quantidade de caracteres sem espaço
let desafio = "Bom Dia Com Muita Alegria"
let solucaoDesafio = desafio.replaceAll(" ", "");
console.log(desafio);
console.log(solucaoDesafio);
console.log(desafio.length);
console.log(solucaoDesafio.length);