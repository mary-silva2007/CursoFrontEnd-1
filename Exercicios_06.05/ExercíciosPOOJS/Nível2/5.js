class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    vender(qtd) {
        if (qtd <= this.quantidade) {
            this.quantidade -= qtd;
        } else {
            console.log("Não há estoque suficiente");
        }
    }

    repor(qtd) {
        this.quantidade += qtd;
    }
    
    exibirInfo() {
        console.log(`${this.nome} - R$ ${this.preco} - ${this.quantidade} unidades`);
    }
}

const produto1 = new Produto("Notebook", 3800, 28);
produto1.exibirInfo();

produto1.vender(5);
produto1.exibirInfo();

produto1.repor(12);
produto1.exibirInfo();
