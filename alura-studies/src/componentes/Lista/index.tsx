import { Itarefa } from "../../Types/tarefa";
import Item from "./Item";
import style from './Lista.module.scss';


interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista ({tarefas, selecionaTarefa}: Props) {
    
    return (
        <aside className={style.listaTarefas}>
            <h2 >Estudos do Dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                        {...item}
                    />                
                    ))}
            </ul>
        </aside>
    )
}

export default Lista;