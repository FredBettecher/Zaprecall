import { FooterStyle } from "./FooterStyle";

export default function Footer(props){
    return(
        <FooterStyle data-identifier="footer" data-test="footer">
            <h1>{props.counter}/{props.cards.length} Concluídos</h1>
        </FooterStyle>
    );
}