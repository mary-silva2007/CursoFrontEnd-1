// Tipos de Operações
// Operadores Aritméticos
/*

+ - Adição
- - Subtração
* - Multiplicação
/ - Divisão
% - Resto da Divisão

*/ 

var a = 10; //Definindo as variáveis
var b = 3;

console.log('Soma: '+ (a + b)); //Mostrando o resultado da soma no terminal = 13
console.log('Subtração: '+ (a - b)); //Mostrando o resultado da subtração no terminal = 7
console.log('Multiplicação: '+ (a * b));//Mostrando o resultado da multiplicação no terminal = 30
console.log('Divisão: '+ (a / b));//Mostrando o resultado da divisão no terminal = 3.333333......
console.log('Resto da Divisão: '+ (a % b));//Mostrando o resultado do resto da divisão no terminal = 1

//Operadores Relacionais - Sempre retornará um boolean, True ou False
/*

> - Maior que 
< - Menor que
>= - Maior ou igual
<= - Menor ou igual
== - Igual
=== - Igual e do mesmo tipo

*/

var a = 10; //Tipo de dados Number
var b = 20; //Tipo de dados Number
var c = '10'; //Tipo de dados String

console.log('Relacionais: '+ (a > b)); //Mostrando o resultado da maior que no terminal = False
console.log('Igualdades Simples: '+ (a == c)); //Mostrando o resultado da igualdade simples no terminal = True
console.log('Igualdades Estritamente: '+ (a === c)); //Mostrando o resultado da igualdade estritamente no terminal = False

//Operadores Logicos
/*
E - &&
OU - ||
Negação - !
*/

var nota1 = 5; //Tipo de dados Number
var nota2 = 8; //Tipo de dados Number

console.log('Aprovação: '+ (nota1 > 7 && nota2 > 7)); //Mostrando o resultado da maior que no terminal = False
console.log('Aprovação: '+ (nota1 > 7 || nota2 > 7)); //Mostrando o resultado da maior que no terminal = True
console.log(!false); //Mostrando o resultado da negação no terminal = True