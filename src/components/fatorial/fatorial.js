import { useState, useEffect } from "react";
import "./fatorial.scss";

const Fatorial = () => {
  const [values, setValues] = useState(0);
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState();


  const fator = () => {
    let n = values;
    let valor = 1;
    for (let i = n; i > 1; i--) {
      valor = valor * i;
    }

    if (valor % 2 === 0) {
      setLoading("Par");
    } else {
      setLoading("Impar");
    }
   
    setResult(valor);
  };

  useEffect(()=>{
    fator()
   },[values])

  return (
    <div className="fatorial">
     
      <h1>Fatorial: <span>{result}</span></h1>
      <input
        type="number"
      
        onChange={(e) => setValues(e.target.value)}
      />

     <h2> Status: <span>{loading}</span></h2>
    </div>
  );
};

export default Fatorial;
