import { LogoStyle } from "./LogoStyle";

export default function Logo(){
    return(
        <LogoStyle>
            <img alt="logo" src={"./assets/img/logo.png"}/>
            <h1>ZapRecall</h1>
        </LogoStyle>
    );
}