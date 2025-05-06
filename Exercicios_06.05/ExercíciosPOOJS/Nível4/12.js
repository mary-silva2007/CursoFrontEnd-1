class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirInfo() {
        console.log(`${this.nome} - ${this.preco}`);
    }
}

class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    calcularTotal() {
        return this.produtos.reduce((total, produto) => total + produto.preco, 0);
    }

    removerProduto(nome) {
        this.produtos = this.produtos.filter(produto => produto.nome !== nome);
    }   

    listarProdutos() {
        this.produtos.forEach(produto => produto.exibirInfo());
    }
}

const produto1 = new Produto("Camiseta", 29.99);
const produto2 = new Produto("Calça", 49.99);

const carrinho = new Carrinho();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

carrinho.listarProdutos();
carrinho.removerProduto("Camiseta");
carrinho.listarProdutos();




