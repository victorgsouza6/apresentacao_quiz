import React, {useState} from 'react'
import './App.css';

import Inicio from './Inicio';

function App() {

  const [tela, alteraTela] = useState(null)

  if(tela == null){
    alteraTela(<Inicio alteraTela={alteraTela}/>)
  }
  return (
    <div className="App">

      {tela}
      
    </div>
  );
}

export default App;
