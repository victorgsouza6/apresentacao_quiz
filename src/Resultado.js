import Inicio from "./Inicio"
const Resultado = (props) => {
    
    const questoes = props.questoes
    const alteraTela = props.alteraTela

    const isCorrect = props.isCorrect;

    let pontuacao = props.pontuacao;

    if( isCorrect ){
        pontuacao+= 1
    }

    const resultado =
    Math.round(pontuacao/questoes.length * 100);


    return ( 
        <div className='resultado-final'>
            <div className='final'>
                <img src='https://i.imgur.com/sEFPtu4.png' />
            </div>
            <h1>Resultado Final</h1>
            <h2>{pontuacao} de {questoes.length} Corretas -  ({resultado}%)</h2> 
            <button className="refazer" onClick={() => alteraTela(<Inicio alteraTela={alteraTela}/>)}> Refazer </button>
        </div>
     );
}
 
export default Resultado;