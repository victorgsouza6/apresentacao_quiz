import Questoes from './Questoes'
const Inicio = ( props ) => {
    const alteraTela = props.alteraTela
    return ( 
        <div>
            <h1> Bem-vindo ao quiz da Disney </h1>
            <button onClick={() => alteraTela(<Questoes alteraTela={alteraTela}/>)}> Começar </button>
        </div>
        

        
     );
}
 
export default Inicio;