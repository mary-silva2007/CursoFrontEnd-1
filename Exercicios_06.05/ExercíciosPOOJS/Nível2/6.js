class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    consultarSaldo() {
        console.log(`Saldo atual da conta de ${this.titular}: R$ ${this.saldo}`);
    }
}

const conta1 = new ContaBancaria("João", 2198);
conta1.consultarSaldo();

conta1.depositar(502);
conta1.consultarSaldo();

conta1.sacar(1000);
conta1.consultarSaldo();
