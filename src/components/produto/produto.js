import itens from "../../dados/itens"
import { useEffect, useState } from 'react';
import "./produto.scss"

const Produto = () =>{
    const [result, setResult] = useState(0)
  
    
    let novoValor = 0 
    const adic = ()=>{
        sessionStorage.setItem('total',result)
        
        setResult(novoValor) 
      
    }
    useEffect(()=>{
        adic()
        
       },[result])


    return  itens.map( (a, i)=>{
       let total = (a.Qtde*a.preco).toFixed(2)
       novoValor += parseInt(total)  

                       
        return( 
            
        <div 
        className={'linha '+((i%2===0)?'par':'')}> 
            <tr>
                <td>{i+1}</td>
                <td>{a.nome}</td>
                <td>{a.Qtde}</td>
                <td>{"R$ "+a.preco}</td>
                <td>{"R$ "+(a.Qtde*a.preco).toFixed(2)}</td>
                
            </tr>
                   
        </div> 
        
        )
    } )

}

export default Produto