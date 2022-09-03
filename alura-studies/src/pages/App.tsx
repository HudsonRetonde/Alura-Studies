
import React, {useState} from 'react';
import Cronometro  from '../componentes/Cronometro';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import { Itarefa } from '../Types/tarefa';
import style  from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<Itarefa>()

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Cronometro/>
    </div>
  );
}

export default App;
