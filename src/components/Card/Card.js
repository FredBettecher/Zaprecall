import { CardSelected, CardStyle, CardTurned } from "./CardStyle";
import { useState } from "react";

export default function Card(props) {
    const [selectCard, setSelectCard] = useState(0);
    const [text, setText] = useState(props.card.question);

    function play(){
        setText(props.card.question);
        setSelectCard(1);
    }

    function turn(){
        setText(props.card.answer);
        setSelectCard(2);
    }

    if(selectCard === 0) {
        return(
            <CardStyle>
                <h1>Pergunta {props.index+1}</h1>
                <img alt="play" src={"./assets/img/seta_play.png"} onClick={play}></img>
            </CardStyle>
        );
    }

    if(selectCard === 1){
        return(
            <CardSelected>
                <p>{text}</p>
                <img alt="virar" className="turn-button" src={"./assets/img/seta_virar.svg"} onClick={turn}></img>
            </CardSelected>
        );
    }

    if(selectCard === 2){
        return(
            <CardTurned>
                <p>{text}</p>
                <div className="options">
                    <div className="not-remember">Não lembrei</div>
                    <div className="almost-remember">Quase não lembrei</div>
                    <div className="zap">Zap!</div> 
                </div>
            </CardTurned>
        );
    }
}