// Declaração de Array []
let array = []; // Array Dinâmico
let arrayNumeros = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9];
let arrayTexto = ["Sapato", "Caixa", "Meia"];
let arrayMisto = [1, "José", true];

// Medir o tamanho do ARRAY (length)
console.log(arrayNumeros.length);

// Acessar um elemento do Array (index)
console.log(arrayTexto[1]); // Posição 1 = Caixa

// Adicionar elementos em um array 
// No começo (Unshift)
arrayTexto.unshift("Tênis");
console.log(arrayTexto);

// No final 
arrayTexto.push("Chinelo");
console.log(arrayTexto);

// Trocar um valor
arrayTexto[2] = "Sacola";
console.log(arrayTexto);

// Remover um elemnto do array
// No começo (Shift)
arrayTexto.shift();
console.log(arrayTexto);

// Final (Pop)
arrayTexto.pop();
console.log(arrayTexto);

// Percorrer um array (Laço de repetição)
// Percorrer o meu array de numeros
for (let i = 0; i < arrayNumeros.length; i++) {
    console.log("Indice["+i+"] =" +[arrayNumeros[i]]);
}

// For Each
arrayTexto.forEach(elemento => {
    console.log(elemento);
});

// Métodos Úteis em arrays
// Index OFF
console.log(arrayNumeros.indexOf(5)); // Posição 5 = 4
console.log(arrayNumeros.indexOf(10)); // Posição 10 = -1 (Nao Encontrado) Elemento Inexistente

// Splice (Remover Elemnto da posição)
arrayMisto.splice(2, 1);
// ["a", "b", "c"]
console.log(arrayMisto);

// Remove 2 vezes o valor da casa 2 = 1
arrayMisto.splice(1, 2);
console.log(arrayMisto);

// Operações Avançadas de Arrays
// Map permite fazer novos valores 
let valores =  [10, 20, 30, 40, 50];
let valoresDobro = valores.map(x => x * 2);
console.log(valoresDobro);

// Filter 
// Filtra os valores permitindo comparar valroes
let valoresFilter = valores.filter(x => x > 20);
console.log(valoresFilter);

// Desafio (FIltro para todos o x menor que 35 e depois que fazer a filtragem triplicar o valor de x)
let desafioFiltro = valores.filter(x => x < 35);
console.log(desafioFiltro);

let desafioFIltroTriplicar = desafioFiltro.map(x => x *3);
console.log(desafioFIltroTriplicar);


// Reduce (Transforma um vetor em váriavel simples)
let soma = valores.reduce((valorSoma,valorElemento)=> valorSoma+valorElemento);
console.log(soma);

// Sort
let aleatorio = [7, 4, 2, 9, 1, 5, 8, 3, 6];
console.log(aleatorio);
let ordenado = aleatorio.sort();
console.log(ordenado);

