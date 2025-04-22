// Diferença entre POO e Procedural

// Procedural
// Declaração de variável
let produto1 = {
  nome: "Celular",
  preco: 1000,
  desconto: function () {
    return this.preco * 0.1;
  },
}; // Coleção
let produto2 = {
  nome: "Camera Digital",
  preco: 5000,
  desconto: function () {
    return this.preco * 0.1;
  },
}; // Coleção

// POO - Classe de produtos

class Produto {
  #nome;
  #preco; // # Significa privado

  constructor(nome, preco) {
    this.#nome = nome;
    this.#preco = preco;
  }
  get getNome() {
    return this.#nome;
  }
  get getPreco() {
    return this.#preco;
  }

  desconto() {
    return this.getPreco * 0.1;
  }
}

// Instanciar um objeto
let p1 = new Produto("Impressora", 2000);
let p2 = new Produto("Tablet", 1500);

// Exemplos de uso de POO
class Pessoa {
  // Atributos privados
  #nome;
  #idade;
  #cpf;

  // Construtor
  constructor(nome, idade, cpf) {
    this.#nome = nome;
    this.#idade = idade;
    this.#cpf = cpf;
  }
  // Métodos publicos
  get getNome() {
    return this.#nome;
  }
  get getIdade() {
    return this.#idade;
  }
  get getCpf() {
    return this.#cpf;
  }

  set setIdade(idade) {
    this.#idade = idade;
  }
  // Métodos para informações
  exibirInfo() {
    console.log(
      `Nome: ${this.getNome} \nIdade: ${this.getIdade} \nCPF: ${this.getCpf}`
    );
  }
}


let pessoa1 = new Pessoa("João", 30, "123.456.789-00");
let pessoa2 = new Pessoa("Maria", 35, "987.654.321-00");

pessoa1.exibirInfo();
pessoa2.exibirInfo();

pessoa1.setIdade = 31; // Atualiza a idade
pessoa1.exibirInfo();

// Herança (extends)

class Funcionario extends Pessoa {
    #cargo;
    #salario;

    // Constructor
    constructor(nome, idade, cpf, cargo, salario) {
        super(nome, idade, cpf);
        this.#cargo = cargo;
        this.#salario = salario;
    }
    // Métodos publicos
    get getCargo() {
        return this.#cargo;
    }
    get getSalario() {
        return this.#salario;
    }
    set setSalario (salario) {
        this.#salario = salario;
    }
    set setCargo (cargo) {
        this.#cargo = cargo;
    }

    //Método exbirInfo
    exibirInfo() {
        super.exibirInfo();
        console.log(`Cargo: ${this.getCargo} \nSalário: ${this.getSalario}`);
    }
}

let funcionario1 = new Funcionario("Pedro", 27, "321.654.987-00", "Motorista", 3000);

funcionario1.exibirInfo();
funcionario1.setSalario = 3500;
funcionario1.exibirInfo();