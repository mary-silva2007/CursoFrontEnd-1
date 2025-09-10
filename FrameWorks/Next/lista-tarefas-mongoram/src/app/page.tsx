"use client";
import { updateTarefa } from "@/controllers/Tarefa";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

 // indicar que é a tela usada pelo cliente-side

export default function Home() {
  //userState (armazenameento LocalStorage) - manipulo elementos da página pelo LocalStorage
  const [tarefas, setTarefa] = useState<ITarefa[]>([]);
  const [newTarefa, setNewTarefa] = useState<string>("");

//useEffect - dispara uma ação quando a página é carregada
  useEffect(() => {
    //fazer o UseEffect no carregamento da TELA INICIAL
    //carregar todas as tarefas do banco de dados
    fetchTarefas();
  }, []);

  //carregar tarefas 
  const fetchTarefas = async () => {
    try {
      const response = await fetch("/api/tarefas"); //chama a API
      const data = await response.json();//converte a resposta em JSON
      if (data.success) { //verifica se a resposta foi bem sucedida
        setTarefa(data.data); //atualiza o estado com as tarefas obtidas
      }
    } catch (error) {
      console.error(error);
    }
  }

  //adicionar tarefa 
  const adTarefa = async (e: FormEvent) => { 
    e.preventDefault(); //evita o carregamento da tela
    if (!newTarefa.trim()) return; //verifica se o campo não está vazio
    try {
      const resultado = await fetch("/api/tarefas",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTarefa }),
      });
      const data = await resultado.json();
      if (data.success) { // se o resultado dor ok
        setTarefa((prev) => [...prev, data.data]); //atualiza a lista de tarefas
        setNewTarefa(""); //limpa o campo de entrada
      }
    } catch (error) {
      console.error(error); //trata o erro
    }

  //updateTarefa
  const  atualizarTarefa = async (id: string, title: string) => {
    try {
      const resultado = await fetch(`/api/tarefas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      const data = await resultado.json();
      if (data.success) {
        setTarefa((prev) => prev.map((t) => (t.id === id ? data.data : t)));
      }
    } catch (error) {
      console.error(error);
    }
  };

  //deleteTarefa
  const deletarTarefa = async (id: string) => {
    try {
      const resultado = await fetch(`/api/tarefas/${id}`, {
        method: "DELETE",
      });
      const data = await resultado.json();
      if (data.success) {
        setTarefa((prev) => prev.filter((t) => t.id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adTarefa}>
        <input type="text" 
        value={newTarefa} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTarefa(e.target.value)} 
        placeholder="Adicionar uma nova tarefa" />
        <button type="submit">Adicionar Tarefa</button>
      </form>
      <ul>
        {tarefas.map((tarefa)=> (
          <li key={tarefa._id.toString()}>
              
          </li>
        ))}
      </ul>
    </div>
  );
};
}