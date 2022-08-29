import React from "react";
import Item from "./Item";
import style from './Lista.module.scss';

function Lista () {
    let tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa:'TypeScript',
        tempo: '03:00:00'
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={()=> {
                tarefas = [...tarefas, {tarefa: "Estudar Estado", tempo: "05:00:00"}]
            }}>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) =>
                    <Item
                    key={index}
                        {...item}
                    />
                
                )}
            </ul>
        </aside>
    )
}

export default Lista;