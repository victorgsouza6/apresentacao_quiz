import Questoes from './Questoes'
const Inicio = ( props ) => {
    const alteraTela = props.alteraTela
    return ( 
        <div>
            <h1> Bem-vindo ao quix da disney</h1>
        <div className='inicio'> 
            <img src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/03/enquadramento-capa-24.jpg"/>
            <br/>
            <button className="botaoInicio" onClick={() => alteraTela(<Questoes alteraTela={alteraTela}/>)}> Começar </button>
        </div>
        </div>
        

        
     );
}
 
export default Inicio;