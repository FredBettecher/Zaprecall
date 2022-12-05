import Card from "../Card/Card"

export default function Cards(props) {
    return(
        <>
        {props.cards.map((card, index) => {
            return (
            <Card index={index} card={card} counter={props.counter} setCounter={props.setCounter}/>
            )
        })}
    </>
    );
}