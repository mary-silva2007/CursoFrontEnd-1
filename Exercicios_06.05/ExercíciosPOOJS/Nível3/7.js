class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome} - Salário: R$ ${this.salario}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }

    salarioTotal() {
        return this.salario + this.bonus;
    }

    exibirInfoGerente() {
        console.log(`Nome: ${this.nome} - Salário: R$ ${this.salario} - Bonus: R$ ${this.bonus}`);
    }
}

const func1 = new Funcionario("João", 2000);
func1.exibirInfo();
console.log(`Salário total: R$ ${func1.salario}`);


const ger1 = new Gerente("Maria", 3000, 500);
ger1.exibirInfoGerente();
console.log(`Salário total: R$ ${ger1.salarioTotal()}`);
