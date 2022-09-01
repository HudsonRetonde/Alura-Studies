import React, {useState} from 'react';
import Cronometro  from '../componentes/Cronometro';
import Formulario from '../componentes/Formulario';
import Lista from '../componentes/Lista';
import { Itarefa } from '../Types/tarefa';
import style  from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro/>
    </div>
  );
}

export default App;
