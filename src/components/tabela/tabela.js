import { useState, cloneElement, Children} from "react";

import "./tabela.scss";

const Tabela = ({ children }) => {
    

  return (
    <div className="tabela">
      <h1>Tabela de Itens</h1>
      <table>
        {" "}
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Qtde</th>
          <th>Preço</th>
          <th>Total</th>
        </tr>
        {children}
        <tr>
          <td id="total">Total</td>
          <td> R$ {sessionStorage.getItem('total')} </td>
        </tr>
      </table>
    </div>
  );
};

export default Tabela;
