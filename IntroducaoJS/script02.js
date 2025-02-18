// Estruturas de Dados
// Condicionais
/*
If - Se
Else - Senão
Switch Case - Caso
*/

var precoProduco = 150;
if (precoProduco >= 100) {
    console.log('Valor a pagar é de R$' + precoProduco*0.9);
} else {
    console.log('Valor a pagar é de R$' + precoProduco);
}

// Switch Case
var mes = 2;
switch (mes) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;    
    case 3:
        console.log('Março');
        break;
    default:
        console.log('Informe um valor válido!');
        break;
}

// Estrutura de Repetição
// For - Para (Contavéis)

for(let i = 0; i <= 100; i++) {
    console.log(i);
}

//while - Enquanto (Continuar)

var continuar = true; // Condição de parada
var numeroEscolhido = 3; // Condição
var contador = 0;

while(continuar) { // Parada acontece quando a condição for falsa
    contador++; 
    let = numeroSorteado = Math.round(Math.random() * 10); // Sortea um número de 0 a 1, entre
    if (numeroSorteado == numeroEscolhido) {
        continuar = false; // Parada acontece quando a condição for verdadeira
        console.log('Acertou miseravi!');
    }
    console.log('Tentativas: ' + contador);
}

//Funções (Ação específica) podendo ser chamada a qualquer momento dentro do codigo

function ola(nome) { //Function return - Irá retornar um valor
    return 'Ola, ' + nome;
}

function hello(nome) { //Função do tipo void - Não irá retornar um valor
    console.log("Hello, " + nome);
}

console.log(ola('Marco'));

hello('Marco');