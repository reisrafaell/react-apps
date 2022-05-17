import { useState } from "react";
import "./sorteador.scss";

const Sorteador = () => {
  const [values, setValues] = useState();
  const [result, setResult] = useState();

  const adicionar = () => {
    let list = [];
    let controle = 0;
    while (controle < values) {
      let numero = Math.floor(Math.random() * (60 -1 +1)) +1 ;
      list.push(`${numero < 10 ? "0" : ""}${numero}`) ;
      list.push(' ')
      controle++;
    }

    setResult(list);
  };

  return (
    <div className="sorteador">
      <h1> Mega</h1>
      <span>{result}</span>
      <div>
      <label for="numeros"> Quantidade de números </label>
      <input
        type="number"
        onChange={(e) => setValues(e.target.value)}       
        
      />

      </div>

      <button onClick={adicionar}>Gerar Números</button>
    

    </div>
  );
};

export default Sorteador;
