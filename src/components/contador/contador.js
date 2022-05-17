import { useState } from "react";
import Button from "../button/Button";
import "./contador.scss";

const Contador = () => {
  const [values, setValues] = useState(0);
  
  const [result, setResult] = useState(0);

  return (
    <div className="contador">
      <h1> Contador</h1>
      <span>{result}</span>
      <div>
      <label for="numeros">Passo </label>
      <input
        type="number"
        onChange={(e) => setValues(e.target.value)}
               
      />

      </div>
     <div className="btn">

      <Button operation={()=> setResult( result + parseInt(values))} valor="+"/>
      <Button operation={()=> setResult( result - parseInt(values))} valor="-"/>
      
     </div>
    </div>
  );
};

export default Contador;
