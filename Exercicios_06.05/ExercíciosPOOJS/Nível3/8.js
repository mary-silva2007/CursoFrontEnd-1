class Animal {
    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
    }

    falar() {
        console.log(`${this.nome} faz algum som`);
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome, "Au au");
    }

    falar () {
        console.log(`${this.nome} faz ${this.som}`);
    }
}

class Gato extends Animal {
    constructor(nome) {
        super(nome, "Miau");
    }

    falar() {
        console.log(`${this.nome} faz ${this.som}`);
    }
}

const cachorro1 = new Cachorro("Jota");
cachorro1.falar();

const gato1 = new Gato("Miguel");
gato1.falar();
