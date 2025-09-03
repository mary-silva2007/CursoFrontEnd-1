//componente para criar o formulário para inserir uma nova tarefa
//import do css
import"./ToDoForm.css";

import { useState } from "react";

//função ToDoForm ->
const ToDoForm = ({ addTarefa }) => {
    //estado para armazenar o valor do input (campo para inserir a tarefa)
  const [tarefa, setTarefa] = useState("");
  //defenir  o UseState => usa a memoria local do navegador para armazenar as mudanças de estado
  //[Primeiro campo o armazenamento, segundo campo a função de mudança de estado]

  //função para atualizar o estado co o valor do input
  const handleSubmit = (e) => {
    //impedir o comportamento padrão do formulário
    e.preventDefault();
    //verificar se o campo não esta vazio
    if (tarefa.trim() !== "") {
        //adiciono a tarefa ao array de tarefas
      addTarefa(tarefa);
      //Limpo o campo do input
      setTarefa("");
    }
  };

  return (
    //retorno o formulário (o view)
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setTarefa(e.target.value)}
        value={tarefa}
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default ToDoForm;
//componente para criar um formulário para inserir uma nova tarefa
//pode ser realizado em outros componentes (export)