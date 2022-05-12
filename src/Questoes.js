import React, { useState } from 'react';
import Pontuacao from './Pontuacao';
import Resultado from './Resultado'

const Questoes = (props) => {
    const alteraTela = props.alteraTela
    
    const [perguntaAtual, setPerguntaAtual] = useState(0) 
    const [pontuacao, setPontuacao] = useState(0)

    const questoes = [
      {
            
          text: "No conto original, o cabelo da Rapunzel é Cortado por quem?",
          imagem: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2020/08/Pinocchio-2.jpg",
          opcoes: [
            {p:0, text: "Pela gothe", isCorrect: true},
            {p:1, text: "Rapunzel", isCorrect: false},
            {p:2, text: "Flynn ryder", isCorrect: false},
            {p:3, text: "Capitão Real", isCorrect: false},
          ],
      },
      {
        text: "Como se chama o pai da pequena sereia Ariel?",
        opcoes: [
          {p:0, text: "Rei tristão", isCorrect: false},
          {p:1, text: "Rei tritão", isCorrect: true},
          {p:2, text: "Netuno", isCorrect: false},
          {p:3, text: "Poseidon", isCorrect: false},
        ],
      },
    
  
  ]

    const  verificaResposta = (isCorrect) => {
        if( isCorrect){
          setPontuacao(pontuacao + 1);
        }

        if (perguntaAtual + 1 < questoes.length){
          setPerguntaAtual(perguntaAtual + 1);
        }else{
          alteraTela(<Resultado alteraTela={alteraTela} pontuacao={pontuacao} questoes={questoes}/>)
        }

         
      }
       
    return ( 
      <div>
        <Pontuacao pontuacao={pontuacao}/>
        <div className='cartao-pergunta'>
            <h2>Questão {perguntaAtual + 1} de {questoes.length}</h2>
            <h3 className='texto-pergunta'>{questoes[perguntaAtual].text}</h3>

            
            
    
            <ul>
             {questoes[perguntaAtual].opcoes.map((opcao => {
        return (
          
            <div>
            <li onClick={() => verificaResposta(opcao.isCorrect)}>{opcao.text}</li>
            </div>
           
          
          )
          
        
        }))}
        </ul>
  </div>
  </div>
     );
}
 
export default Questoes;