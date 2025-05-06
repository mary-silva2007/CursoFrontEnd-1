class Aluno {
    constructor(nome, notas) {
        this.nome = nome;
        this.notas = notas || []; // Se notas não for fornecido, inicializa com array vazio
    }

    adicionarNota(nota) {
        this.notas.push(nota);
    }

    calcularMedia() {
        if (this.notas.length === 0) {
            return 0;
        }
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
    }

    situacao() {
        if (this.calcularMedia() >= 7) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }
}

const aluno1 = new Aluno("Alice", [8, 7, 9, 7]);
console.log(`${aluno1.nome}: ${aluno1.situacao()}`);

const aluno2 = new Aluno("Ricardo", [6, 2, 4, 5]);
console.log(`${aluno2.nome}: ${aluno2.situacao()}`);

