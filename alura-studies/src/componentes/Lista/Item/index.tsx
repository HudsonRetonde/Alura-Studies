import { Itarefa } from '../../../Types/tarefa'
import style from '../Lista.module.scss'

export default  function Item ({tarefa, tempo, selecionado, completado, id}: Itarefa) {
    console.log('Item atual: ', {tarefa, tempo, selecionado, completado, id})
    return(
        <li className={style.item}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}