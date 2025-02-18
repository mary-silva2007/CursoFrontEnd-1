//Calculadora simples em java script 
var prompt = Require("prompt-sync")();
//Funções de calculo
//Usaremos opções aritméticas de soma, subtração, divisão e multiplicação

function soma(a, b) { //Função para soma de dois numeros
    return (a + b);
}

function sub(a, b) { //Função para subtração de dois numeros
    return (a - b);
}

function div(a, b) { //Função para divisão de dois numeros
    return (a / b);
}

function mult(a, b) { //Função para multiplicação de dois numeros
    return (a * b);
}

//Menu 
function menu() {
    let operacao;
    let num1;
    let num2;
    let resultado;
    console.log('======Calculadora Simples======');
    console.log('1 - Soma                       ');
    console.log('2 - Subtração                  ');
    console.log('3 - Divisão                    ');
    console.log('4 - Multiplicação              ');
    operacao = prompt();
    num1 = Number(prompt("Informe o primeiro número:"));
    num2 = Number(prompt("Informe o segundo número:"));
    switch (operacao) {
        case '1':
            resultado = soma (num1,num2)
            break;
        case '2':
            resultado = sub (num1,num2)
            break;
        case '3':
            if (num2==0) {
                console.log('Não dividirás por zero')
                resultado = nul;
            } else {
                resultado = div (num1,num2)
            }
            break;
        case '4':
            resultado = mult (num1,num2)
            break;
        default:
            console.log('Operação Inválida')
            resultado = null
            
    }
    console.log('O resultado é '+resultado)
}

//Aplicar a função menu

var continuar = true
while (continuar) {
    menu();
    let escolha = prompt('1. Continuar // 2. Sair')
    if (escolha == 2) {
        escolha = false
        console.log('Cansei...')
    }
}