//Funcoes de data e hora
let agora = new Date();
console.log(agora);

console.log(agora.toDateString());
console.log(agora.toLocaleString());

// Comandos GET (Pega informações)

console.log(agora.getFullYear()); // Puxa o ano atual

// Comandos SET (Muda informações)

agora.setFullYear(2030);
console.log(agora.toLocaleDateString());

// Operações de data e hora

let data1 = new Date("2025-02-04");
let data2 = new Date("2024-12-17");

let diferenca = data2 - data1;
console.log(diferenca/(1000*60*60*24)); // Calcular a diferenca em dias