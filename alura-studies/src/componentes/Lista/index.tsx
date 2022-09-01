import { Itarefa } from "../../Types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';


function Lista ({tarefas}: {tarefas: Itarefa[]}) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2 >Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    key={index}
                        {...item}
                    />                
                    ))}
            </ul>
        </aside>
    )
}

export default Lista;