// Criar um programa que receba várias notas e calcule a média
const prompt = require("prompt-sync")();

let vetorNotas = [];
let contator = 0;
let continuar = true;

while (continuar) {
    console.log("--------------------");
    console.log("1. Digitar Nova Nota");
    console.log("2. Calcular Média   ");
    console.log("3. Sair             ");
    console.log("--------------------");
    
    let operacao = prompt("Escolha a opção desejada: ");
    switch (operacao) {
        case "1":
            contator++;
            let nota = Number(prompt("Digite a nota do aluno"+contator+": "));
            vetorNotas.push(nota);
            break;
        case "2":
            let media = vetorNotas.reduce((x,y)=> x+y,0)/contator;
            console.log("A Média da Sala é: "+media);
            break;
        case "3":
            continuar = false;
            console.log("Programa Finalizado");
            break;
        default:
            break;
    }
};
