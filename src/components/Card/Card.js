import { AlmostRemember, CardSelected, CardStyle, CardTurned, NotRemember, Zap } from "./CardStyle";
import { useState } from "react";

export default function Card(props) {
    const [selectCard, setSelectCard] = useState(0);
    const [text, setText] = useState(props.card.question);

    function play() {
        setText(props.card.question);
        setSelectCard(1);
    }

    function turn() {
        setText(props.card.answer);
        setSelectCard(2);
    }

    function notRemember() {
        props.setCounter(props.counter+1);
        setSelectCard(3);
    }

    function almostRemember() {
        props.setCounter(props.counter+1);
        setSelectCard(4);
    }

    function zap() {
        props.setCounter(props.counter+1);
        setSelectCard(5);
    }

    if(selectCard === 0) {
        return(
            <CardStyle data-identifier="flashcard">
                <p data-test="flashcard-text">Pergunta {props.index+1}</p>
                <img alt="play" src={"./assets/img/seta_play.png"} onClick={play} data-test="play-btn"></img>
            </CardStyle>
        );
    }

    if(selectCard === 1) {
        return(
            <CardSelected data-identifier="flashcard">
                <p data-test="flashcard-text">{text}</p>
                <img alt="virar" className="turn-button" src={"./assets/img/seta_virar.svg"} onClick={turn} data-test="turn-btn"></img>
            </CardSelected>
        );
    }

    if(selectCard === 2) {
        return(
            <CardTurned data-identifier="flashcard">
                <p data-test="flashcard-text">{text}</p>
                <div className="options">
                    <div className="not-remember" onClick={notRemember} data-test="no-btn">Não lembrei</div>
                    <div className="almost-remember" onClick={almostRemember} data-test="partial-btn">Quase não lembrei</div>
                    <div className="zap" onClick={zap} data-test="zap-btn">Zap!</div>
                </div>
            </CardTurned>
        );
    }

    if(selectCard === 3) {
        return(
            <NotRemember data-identifier="flashcard">
                <p data-test="flashcard-text">Pergunta {props.index+1}</p>
                <img alt="play" src={"./assets/img/icone_erro.png"} data-test="no-icon"></img>
            </NotRemember>
        );
    }

    if(selectCard === 4) {
        return(
            <AlmostRemember data-identifier="flashcard">
                <p data-test="flashcard-text">Pergunta {props.index+1}</p>
                <img alt="play" src={"./assets/img/icone_quase.png"} data-test="partial-icon"></img>
            </AlmostRemember>
        );
    }

    if(selectCard === 5) {
        return(
            <Zap data-identifier="flashcard">
                <p data-test="flashcard-text">Pergunta {props.index+1}</p>
                <img alt="play" src={"./assets/img/icone_certo.png"} data-test="zap-icon"></img>
            </Zap>
        );
    }
}