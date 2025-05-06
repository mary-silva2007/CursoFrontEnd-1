class Calculadora {
    static soma(a, b) {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }

    static multiplicar(a, b) {
        return a * b;
    }

    static dividir(a, b) {
        if (b === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        return a / b;
    }
}

console.log(Calculadora.soma(923, 12444));
console.log(Calculadora.subtrair(12, -124));
console.log(Calculadora.multiplicar(12, 10));
console.log(Calculadora.dividir(12, 0));
console.log(Calculadora.dividir(12, 2));
