class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    exibirInfo () {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`);
    }
}

const livro1 = new Livro("Duna", "Frank Herbert", 680);
livro1.exibirInfo();