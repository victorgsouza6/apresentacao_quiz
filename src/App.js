import React, {useState} from 'react'
import './App.css';

import Inicio from './Inicio';

function App() {

  require("./Questoes.css")
  require("./Inicio.css")
  require("./Pontuacao.css")
  require("./Resultado.css")

  const [tela, alteraTela] = useState(null)

  if(tela == null){
    alteraTela(<Inicio alteraTela={alteraTela}/>)
  }
  return (
    <div className="App">
      <h2> testando</h2>
      {tela}
      
    </div>
  );
}

export default App;
