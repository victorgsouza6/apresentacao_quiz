const Pontuacao = ( props ) => {
    const pontuacao = props.pontuacao

    return ( 
        <div className='quiz'>
            <h1> Disney Quiz </h1>

            <h2>Pontuação atual: {pontuacao}</h2>
        </div> 
     );
}
 
export default Pontuacao;