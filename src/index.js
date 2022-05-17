import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/card/card';
import Titulo from './components/titulo/titulo';
import CardContent from './components/cardContent/cardContent.js';
import Sorteador from './components/sorteador/sorteador';
import Contador from './components/contador/contador';
import Tabela from './components/tabela/tabela';
import Produto from './components/produto/produto';
import Timer from './components/cronometro/timer';
import Fatorial from './components/fatorial/fatorial';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Titulo text='React Apps' />
     <Card>
     <CardContent title="Exercício 01" description="Mega Sena"   >
      <Sorteador/>
     </CardContent>

     <CardContent title="Exercício 02" description="Contador">
      <Contador/>
     </CardContent>

     <CardContent title="Exercício 03" description="Tabela de Itens">
     <Tabela>
       <Produto/>
     </Tabela>
     </CardContent>

     <CardContent title="Exercício 04" description="Cronometro">
      <Timer/>
     </CardContent>

     <CardContent title="Exercício 05" description="Fatorial">
     <Fatorial/>
     </CardContent>
     </Card>
  </React.StrictMode>
);


