// Introdução Java Script

//Tipos de dados (Escopo e Tipagem)

//Escopo (Local e Global)
var nome = "João"; //Variável Global - String
let idade = 25; //Variável Local - Número
const PI = 3.14159; //Variável Constante - Número

console.log("Nome: " + nome);
console.log("Idade: " + idade); //Mostrará o valor da variável no terminal
console.log("PI: " + PI);

//const PI = 3.14159; //Erro, pois a variável constante não pode ser redeclarada

var aprovado = true; //Variável Global - Booleano
var média; //Variável Global - Undefined
var info = null; //Variável Global - Null
var dinheiro = 0; //Variável Global - Number
var nome = 'Marco' //Variável Global - String

console.log('Aprovaçãp: ' + aprovado); //Irá mostrar os resultados no terminal
console.log('Média: ' + média);
console.log('Informações: ' + info);
console.log('Dinheiro: ' + dinheiro);
console.log('Nome: ' + nome);