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