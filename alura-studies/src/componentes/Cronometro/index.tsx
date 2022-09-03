import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../Common/utils/time";
import { Itarefa } from "../../Types/tarefa";
import { useState } from "react";

interface Props {
    selecionado: Itarefa | undefined
}

export default function Cronometro({selecionado}: Props) {
    const [tempo, setTempo] = useState<number>();
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro.</p>
            Tempo: {tempo}
        <div className={style.relogioWrapper}>
            <Relogio/>
        </div>
            <Botao>Começar!</Botao>
        </div>
        
    )
}