import React, { useState } from 'react';
import Pontuacao from './Pontuacao';
import Resultado from './Resultado'

const Questoes = (props) => {
    const alteraTela = props.alteraTela
    
    const [perguntaAtual, setPerguntaAtual] = useState(0) 
    const [pontuacao, setPontuacao] = useState(0)

    

    const questoes = [
      {
            
        text: "Qual é o primeiro filme da disney?",
        imagem: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2020/08/Pinocchio-2.jpg",
        opcoes: [
          {p:0, text: "Pinocchio", isCorrect: false},
          {p:1, text: "Branca de neve", isCorrect: true},
          {p:2, text: "Mogli o Menino Lobo", isCorrect: false},
        ],
    }, 
    {
      text: "Qual foi a primeira princesa da disney?",
      imagem: "https://miro.medium.com/max/1400/1*kw9rTzHJB59FqMCa4SZLrw.jpeg",
      opcoes: [
        {p:0, text: "Cinderela", isCorrect: false},
        {p:1, text: "Pocahontas", isCorrect: false},
        {p:2, text: "Branca de neve", isCorrect: true},
      ],
    },
    {
      text: "Qual foi o primeiro live action da disney? ",
      imagem: "http://s2.glbimg.com/sSaRxG6z7j5YFpDPSZmy2BntNOw=/e.glbimg.com/og/ed/f/original/2016/04/14/mogliebalu.jpg",
      opcoes: [
        {p:0, text: "Alice no pais das maravilhas", isCorrect: false},
        {p:1, text: "O livro da selva", isCorrect: true},
        {p:3, text: "Mogli o Menino Lobo", isCorrect: false},
      ],
  },{
    text: "Qual foi o primeiro solo da disney ?",
    imagem: "https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/03/13/150313095713_frozen_624x351_ap.jpg",
    opcoes: [
      {p:0, text: "Quando a minha vida vai começar", isCorrect: false},
      {p:1, text: "Livre estou", isCorrect: false},
      {p:2, text: "Algum dia meu pricipe virá", isCorrect: true}
    ],
},{
      text: "Qual é o nome do pai da Bela?",
      imagem: "https://zh.rbsdirect.com.br/imagesrc/23130689.jpg?w=580",
      opcoes: [
        {p:0, text: "Maurice", isCorrect: true},
        {p:1, text: "John", isCorrect: false},
        {p:2, text: "Cris", isCorrect: false},
      ],
  },
  {
    text: "Quem foi o primeiro namorado de Ana ?",
    imagem: "https://s2.glbimg.com/FlVww0KgWce0x3tb2SIHHC8LdVc=/e.glbimg.com/og/ed/f/original/2020/01/08/frozen_2.jpg",
    opcoes: [
      {p:0, text: "Sven", isCorrect: false},
      {p:1, text: "Cristopher", isCorrect: true},
      {p:2, text: "Hans", isCorrect: false},
    ],
},
{
  text: "Qual é o nome da Pequena Sereia? ",
  imagem: "https://cdn.falauniversidades.com.br/wp-content/uploads/2020/05/14180242/A-pequena-sereia-1.jpg",
  opcoes: [
    {p:0, text: "Bela", isCorrect: false},
    {p:1, text: "Carly", isCorrect: false},
    {p:2, text: "Ariel", isCorrect: true},
  ],
},
{
  text: "Quantos anos tinha Cinderela quando se casou? ",
  imagem: "http://pm1.narvii.com/6282/b710529142f96e947a9b40d4619e05d69c61382c_00.jpg",
  opcoes: [
    {p:0, text: "19", isCorrect: true},
    {p:1, text: "18", isCorrect: false},
    {p:2, text: "21", isCorrect: false},
  ],
},
{
  text: "Qual é o apelido da Aurora? ",
  imagem: "https://d2bsjm9patfdz0.cloudfront.net/images/0000524_aurora-bela-adormecida.png",
  opcoes: [
    {p:0, text: "Dorminhoca", isCorrect: false},
    {p:1, text: "Preguiçosa", isCorrect: false},
    {p:2, text: "Bela adormecida", isCorrect: true},
  ],
},
{
  text: "Qual era o desejo de scar? ",
  imagem: "https://wallpaperaccess.com/full/3532705.jpg",
  opcoes: [
    {p:0, text: "Casar com Zira", isCorrect: false},
    {p:1, text: "Ser rei", isCorrect: true},
    {p:2, text: "Muita comida", isCorrect: false},
  ],
},
{
  text: "O que Ursula queria de Ariel? ",
  imagem: "https://disneyplusbrasil.com.br/wp-content/uploads/2021/06/Ursula-Disney-Plus-1024x576.jpg",
  opcoes: [
    {p:0, text: "Sua vida", isCorrect: false},
    {p:1, text: "Seu cabelo", isCorrect: false},
    {p:2, text: "Sua voz", isCorrect: true},
  ],
},
{
  text: "Qual o nome completo do fundador da disney? ",
  imagem: "https://t.ctcdn.com.br/bhQV-SNDQMGe545d-owclr2njck=/400x400/smart/filters:format(webp)/i490908.jpeg",
  opcoes: [
    {p:0, text: "Walt Disney", isCorrect: false},
    {p:1, text: "Walter Elias Disney", isCorrect: true},
    {p:2, text: "Walt Disney Peter", isCorrect: false},
  ],
},
{
  text: "E com quantos anos ele morreu? ",
  imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEVqEMOJMRYddaNSJYZ8n77NJU1Ad0L0M3Ig&usqp=CAU",
  opcoes: [
    {p:0, text: "67", isCorrect: false},
    {p:1, text: "78", isCorrect: false},
    {p:2, text: "65", isCorrect: true},
  ],
},
{
  text: "Onde se passa a historia de Notre Dame? ",
  imagem: "https://lumiere-a.akamaihd.net/v1/images/o-corcunda-de-notre-dame-1920x1080_a8951717.png",
  opcoes: [
    {p:0, text: "Paris na idade média", isCorrect: true},
    {p:1, text: "Espanha na idade média", isCorrect: false},
    {p:2, text: "Inglaterra na idade média", isCorrect: false},
  ],
},
{
  text: "Qual é o nome do principe de Pocahontas? ",
  imagem: "https://i.pinimg.com/originals/80/05/3c/80053c37e0aaa75be68f54dd394be57e.jpg",
  opcoes: [
    {p:0, text: "John Smith", isCorrect: true},
    {p:1, text: "Eric Miller", isCorrect: false},
    {p:2, text: "John Miller", isCorrect: false},
  ],
},
{
  text: "Em qual aniversário Aurora espetaria o dedo? ",
  imagem: "https://cdn.falauniversidades.com.br/wp-content/uploads/2021/04/08130214/aurora-460x345.jpg",
  opcoes: [
    {p:0, text: "Aniversario de 15 anos", isCorrect: false},
    {p:1, text: "Aniversário de 16 anos", isCorrect: true},
    {p:2, text: "Aniversário de 13 anos", isCorrect: false},
  ],
},
{
  text: "Qual é o nome completo de Mulan? ",
  imagem: "https://lumiere-a.akamaihd.net/v1/images/6785e7fe5d2a95c44462054900c791b4_2764x4096_452f56a9.png?region=0%2C0%2C2764%2C4096",
      opcoes: [
        {p:0, text: "Fa Mulan", isCorrect: true},
        {p:1, text: "Fan Mulan", isCorrect: false},
        {p:2, text: "Tan Mulan", isCorrect: false},
      ],
    },
      {
    text: "Qual é o nome da mãe de Nala ? ",
    imagem: "http://images6.fanpop.com/image/quiz/1044000/1044938_1380602163274_318_300.png",
    opcoes: [
      {p:0, text: "Sarabi", isCorrect: false},
      {p:1, text: "Sarafina", isCorrect: true},
      {p:2, text: "Sara", isCorrect: false},
      ],
    },
    {
    text: "Qual é  a única princesa da disney que não é realmente da realeza ? ",
    imagem: "https://img.elo7.com.br/product/600x380/29CE96F/super-kit-digital-imagens-png-todas-as-princesas-disney-papel-digital.jpg",
    opcoes: [
      {p:0, text: "Rapunzel", isCorrect: false},
      {p:1, text: "Ariel", isCorrect: false},
      {p:2, text: "Mulan", isCorrect: true},
    ],
    },
    {
    text: "Qual é a única princesa da disney que foi inspirada em uma pessoa real? ",
    imagem: "https://img.quizur.com/f/img5fa6ea14604370.65545207.jpg?lastEdited=1604774429",
    opcoes: [
      {p:0, text: "Megara", isCorrect: false},
      {p:1, text: "Pocahontas", isCorrect: true},
      {p:2, text: "Esmeralda", isCorrect: false},
    ],
    },
    {
      text: "A marvel é da disney? ",
    imagem: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2015/08/marvel-e-disney.jpg",
    opcoes: [
      {p:0, text: "Era mas não é mais", isCorrect: false},
      {p:1, text: "Não nunca foi", isCorrect: false},
      {p:2, text: "Sim", isCorrect: true},
    ],
    },
    {
      text: "No conto original, o cabelo de Rapunzel é cortado por quem? ",
    imagem: "https://falauniversidades.com.br/mrf4u/statics/i/ps/cdn.falauniversidades.com.br/wp-content/uploads/2021/04/12145956/Rapunzel-Enrolados.png",
    opcoes: [
      {p:0, text: "Pela gothe (sua mãe)", isCorrect: false},
      {p:1, text: "Flynn Ryder", isCorrect: true},
      {p:2, text: "Capitão real", isCorrect: false},
    ],
    },
    {
      text: "Qual é o nome do pai de Ariel? ",
    imagem: "https://i.pinimg.com/originals/f4/22/46/f42246529b123f15d97ccb95ceeeec2e.jpg",
    opcoes: [
      {p:0, text: "Rei tritão", isCorrect: true},
      {p:1, text: "Rei tristão", isCorrect: false},
      {p:2, text: "Netuno", isCorrect: false},
    ],
    },
    {
      text: " No Desenho A Princesa e o Sapo, qual o nome da princesa? ",
    imagem: "https://poltronanerd.com.br/wp-content/uploads/2020/12/AAAABYzj_hezLyYC5mDSbfAI4DDomn7FU1qBFZb2QinDkpS4-7E8BMYdiVaQ2yULyPJBbodIwSOaNZO7pQ-QyYZ0BWX_SoTnW8K6uA-1024x576-1.jpg",
    opcoes: [
      {p:0, text: "Dora", isCorrect: false},
      {p:1, text: "Tuane", isCorrect: false},
      {p:2, text: "Tiana", isCorrect: true},
    ],
    },
    {
      text: " Por que Forky sempre queria ir para o lixo? ",
    imagem: "https://s2.glbimg.com/AjMa2WFZLcRQm07N7fMSdCedo6s=/e.glbimg.com/og/ed/f/original/2019/05/29/toystory4feat-770x433.jpg",
    opcoes: [
      {p:0, text: "Porque ele era um material reciclavel", isCorrect: true},
      {p:1, text: "porque ele odeia a sua dona", isCorrect: false},
      {p:2, text: "porque a lixeira é um lugar quentinho e aconchegante", isCorrect: false},
    ],
    },
    {
      text: "No conto original, do que era feito o sapatinho da cinderela ? ",
    imagem: "https://st.depositphotos.com/1000792/4691/v/600/depositphotos_46919567-stock-illustration-crystal-cinderellas-slipper-on-blue.jpg",
    opcoes: [
      {p:0, text: "Diamante", isCorrect: false},
      {p:1, text: "Cristal", isCorrect: true},
      {p:2, text: "Esmeralda", isCorrect: false},
    ],
    },
    {
      text: "Ao entrar na casa dos anões oque branca de neve encontra?",
    imagem: "https://files.nsctotal.com.br/s3fs-public/styles/paragraph_image_style/public/graphql-upload-files/branca-de-neve-sete-anoes_1.jpg?uk5zF8o1vN9Cx5WzTtZNsUCT2GsDhOV5&itok=0L-I59hz",
    opcoes: [
      {p:0, text: "Os anões ", isCorrect: false},
      {p:1, text: "sete camas", isCorrect: false},
      {p:2, text: "Sete cadeirinhas", isCorrect: true},
    ],
    },
    {
      text: "Qual é o nome da namorada do mike wazowski`s ?",
    imagem: "https://epipoca.com.br/wp-content/uploads/2021/07/Celia-Mae-e-Mike-Wazowski-em-Monstros-S.-A.-Reproducao-1200x900.jpg",
    opcoes: [
      {p:0, text: "Roz", isCorrect: false},
      {p:1, text: "Celia", isCorrect: true},
      {p:2, text: "Bel", isCorrect: false},
    ],
    },
    {
      text: "Em 1929, Mickey falou suas primeiras palavras. Quais foram eles? ?",
    imagem: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/54795C93C808E56D1E7EC4B4D34BF8F9437073723EC6DE7BA1F53DCAB73BE914/scale?width=1920&aspectRatio=1.78&format=jpeg",
    opcoes: [
      {p:0, text: "Cachorro quente", isCorrect: true},
      {p:1, text: "Minnie minha amiga", isCorrect: false},
      {p:2, text: "Rir de si mesmo é amar a si mesmo", isCorrect: false},
    ],
    },
    {
      text: "Qual era o nome da garotinha a quem Andy deu todos os seus brinquedos no final de Toy Story 3? ?",
    imagem: "https://lumiere-a.akamaihd.net/v1/images/eu_ts4_trailer-freedom_dft_m_cda5a9b4.jpeg?region=0,0,800,600",
    opcoes: [
      {p:0, text: "Estella", isCorrect: true},
      {p:1, text: "Boo", isCorrect: false},
      {p:2, text: "Bonnie", isCorrect: true},
    ],
    },

    
  
  ]

  




    const  verificaResposta = (isCorrect) => {

      if( isCorrect){
        setPontuacao(pontuacao + 1);
      }
      
      if (perguntaAtual + 1 < questoes.length){
        setPerguntaAtual(perguntaAtual + 1 );
      }else{
          alteraTela(<Resultado alteraTela={alteraTela} pontuacao={ pontuacao } questoes={questoes} isCorrect={isCorrect} />)
      }

         
    }
       
    return ( 
      <div className='cartao-pergunta'>
        <Pontuacao pontuacao={pontuacao} questoes={questoes} perguntaAtual={perguntaAtual}/>
        <div>
            
            
            <img src={questoes[perguntaAtual].imagem}/>

            <h3 className='texto-pergunta'>{questoes[perguntaAtual].text}</h3>

            <ul>
             {questoes[perguntaAtual].opcoes.map((opcao => {
        return (
          
            <div>
              
            <li className='perguntas' onClick={() => verificaResposta(opcao.isCorrect)} key={opcao.p} >{opcao.text}</li>
            </div>
           
          
          )
          
        
        }))}
        </ul>
           </div>
           
  </div>
     );
}
 
export default Questoes;