const Pontuacao = ( props ) => {
    const pontuacao = props.pontuacao
    const questoes = props.questoes
    const perguntaAtual = props.perguntaAtual

    return ( 
        <div className='quiz'>

            <h2>Questão {perguntaAtual + 1} de {questoes.length}</h2>
            <h2>Pontuação atual: {pontuacao}</h2>
           
        </div> 
     );
}
 
export default Pontuacao;