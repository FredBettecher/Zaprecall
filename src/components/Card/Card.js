import { CardSelected, CardStyle, CardTurned } from "./CardStyle";
// import iconRight from "./assets/img/icone_certo.png";
// import iconWrong from "./assets/img/icone_erro.png";
import { useState } from "react";

export default function Card(props) {
    const [selectCard, setSelectCard] = useState(false);
    const [turnCard, setTurnCard] = useState(false);

    function play(){
        setSelectCard(true);
    }

    function turn(){
        setTurnCard(true);
        alert("virou")
    }

    if(selectCard === false) {
        return(
            <CardStyle>
                <h1>Pergunta {props.index+1}</h1>
                <img alt="play" src={"./assets/img/seta_play.png"} onClick={play}></img>
            </CardStyle>
        );
    }

    if(selectCard === true){
        return(
            <CardSelected>
                <p>{props.card.question}</p>
                <img alt="virar" src={"./assets/img/seta_virar.svg"} onClick={(turn)}></img>
            </CardSelected>
        );
    }

    if(turnCard === true){
        return(
            <CardSelected>
                <p>{props.card.answer}</p>
            </CardSelected>
        );
    }
}