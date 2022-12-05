import { FooterStyle } from "./FooterStyle";

export default function Footer(props){
    return(
        <FooterStyle>
            <h1>{props.counter}/{props.cards.length} Concluídos</h1>
        </FooterStyle>
    );
}