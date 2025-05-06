class Carro {
    #velocidade;

    constructor(modelo, marca) {
        this.modelo = modelo;
        this.marca = marca;
        this.#velocidade = 0;
    }

    acelerar() {
        this.#velocidade += 10;
        return `Acelerando... Velocidade atual: ${this.#velocidade} km/h`;
    }

    frear() {
        if (this.#velocidade > 0) {
            this.#velocidade -= 10;
            return `Freando... Velocidade atual: ${this.#velocidade} km/h`;
        }
        return "O carro já está parado!";
    }

    getVelocidade() {
        return this.#velocidade;
    }
}

const carro1 = new Carro("Gol", "Volkswagen");
console.log(carro1.getVelocidade());
console.log(carro1.acelerar()); // 10 km/h
console.log(carro1.acelerar()); // 20 km/h
console.log(carro1.acelerar()); // 30 km/h
console.log(carro1.frear());    // 20 km/h
console.log(carro1.frear());    // 10 km/h
console.log(carro1.frear());    // 0 km/h
console.log(carro1.frear());  
