import Questoes from './Questoes'
const Inicio = ( props ) => {
    const alteraTela = props.alteraTela
    return ( 
        <div>
            <h1> Bem-vindo ao quix da disney</h1>
        <div className='inicio'> 
            <button className="botaoInicio" onClick={() => alteraTela(<Questoes alteraTela={alteraTela}/>)}> Começar </button>
        </div>
        </div>
        

        
     );
}
 
export default Inicio;