

// Funçoes do Controller 

import Tarefa, { ITarefa } from "@/models/Tarefa";
import connectMongo from "@/services/mongodb";

//get
export const getAllTarefas = async(): Promise<ITarefa[]> => {// retorna uma promessa de um array de tarefas
    await connectMongo(); //conecta ao banco
    const tarefas = await Tarefa.find({}); //busca todas as tarefas
    return tarefas; //retorna todas as tarefas
}

//post
export const createTarefa = async (data: Partial<ITarefa>): Promise<ITarefa> =>{
    //Partial - pode receber parte dos dados do obj
    await connectMongo(); //conecta ao banco
    const tarefa = await Tarefa.create(data); //cria a tarefa no banco
    return tarefa; //retorna a tarefa criada
}

//put

export const updateTarefa = async(id: string, data: Partial<ITarefa>): Promise<ITarefa | null> => {]
    // Partial - pode receber parte dos dados do obj
    await connectMongo(); //conecta ao banco
    const tarefa = await Tarefa.findByIdAndUpdate(id, data, {  //busca pelo id e atualiza
        new: true, runValidators: true //retorna o obj atualizado, e valida os dados
    });
    return tarefa; //retorna a tarefa atualizada
};

//delete
export const deleteTarefa = async(id:string):Promise<boolean> =>{ //retorna uma promessa de boolean
    await connectMongo(); //conecta ao banco
    const resultado = await Tarefa.deleteOne({_id:id}); //deleta a tarefa pelo id
    return resultado.deletedCount>0; //retorna true se deletou, false se não
};