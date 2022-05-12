import Inicio from "./Inicio"
const Resultado = (props) => {

    const pontuacao = props.pontuacao
    const questoes = props.questoes
    const alteraTela = props.alteraTela

    return ( 
        <div className='resultado-final'>
            <div className='final'>
                <img src='http://d20inc.com.br/wp-content/uploads/2016/03/disney-characters-header-image.jpg' />
            </div>
            <h1>Resultado Final</h1>
            <h2>{pontuacao} de {questoes.length} Corretas - ({(pontuacao/questoes.length) *100}%) </h2> 
            <button className="refazer" onClick={() => alteraTela(<Inicio/>)}> Refazer </button>
        </div>
     );
}
 
export default Resultado;