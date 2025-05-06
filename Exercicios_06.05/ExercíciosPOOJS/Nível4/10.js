class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    exibirInfo() {
        console.log(`Título: ${this.titulo} - Autor: ${this.autor}`);
    }
}

class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
    }

    listarLivros() {
        this.livros.forEach(livro => livro.exibirInfo());
    }
}

const livro1 = new Livro("A Guerra dos Tronos", "George R. R. Martin");
const livro2 = new Livro("O Senhor dos Anéis", "J. R. R. Tolkien");

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

biblioteca.listarLivros();

