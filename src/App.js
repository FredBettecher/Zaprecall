import "./css/reset.css";
import { Body } from "./AppStyle";
import { useState } from "react";
import Logo from "./components/Logo/Logo";
import Card from "./components/Card/Card";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";

function App() {
  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]

  const [counter, setCounter] = useState(0)
  
  return (
    <Body>
      <Logo />

      <div className="space">
      <Cards cards={cards}/>
      </div>
      
      <Footer counter={counter} cards={cards}/>
    </Body>
    
  );
}

export default App;
