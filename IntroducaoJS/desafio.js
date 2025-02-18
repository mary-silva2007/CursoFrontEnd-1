var prompt = require("prompt-sync")();

function verificarIdade() {
    let idade = Number(prompt("Digite sua idade: "));
    
    if (idade < 18) {
      console.log("Você é menor de idade.");
    } else if (idade >= 18 && idade < 60) {
      console.log("Você é adulto.");
    } else (idade >= 60)
      console.log("Você é idoso.");
    
  }
  
  verificarIdade();

// Tabuada do 5

for (let i = 5; i<= 50; i+=5) {
    console.log(i);
} console.log("=====================================")

// Números pares do 0 ao 20

for (let i = 2; i<= 20; i+=2) {
    console.log(i);
}
