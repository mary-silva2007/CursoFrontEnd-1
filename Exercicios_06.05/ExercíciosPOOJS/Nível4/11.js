class Tarefa {
    constructor(descricao, concluida) {
        this.descricao = descricao;
        this.concluida = concluida;
    }

    concluir() {
        this.concluida = true;
    }

    exibir() {
        console.log(`${this.descricao} - ${this.concluida ? "Concluída" : "Pendente"}`);
    }
}

class ListaTarefas {
    constructor() {
        this.tarefas = [];
    }
    
}

const tarefa1 = new Tarefa("Comprar leite", false);
tarefa1.exibir();
tarefa1.concluir();
tarefa1.exibir();



