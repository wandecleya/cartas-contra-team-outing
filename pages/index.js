import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {CartasService} from "../service/CartasService";
import {useEffect, useState} from "react";


export default function Home() {
const [respostas, setRespostas] = useState([]);
const [escolhidas, setEscolhidas] = useState([]);
const [quantidade, setQuantidade] = useState(10);


  const comprarCartas = (quantidade) => {
    CartasService.getRespostas(quantidade).then( response => {setRespostas(response), setQuantidade(1)});
  };

  const iniciar = () => {
    CartasService.deleteRespostas().then(setQuantidade(10));
  };

  const escolher = (carta) => {
    CartasService.postEscolhida(carta).then();
  };

  const verEscolhidas = () => {
    CartasService.getEscolhidas().then(response => {setEscolhidas(response)});
  };

  return (
    <div>
      <button onClick={()=>comprarCartas(quantidade)}>Comprar cartas</button>
      <button onClick={()=>verEscolhidas()}>Ver escolhidas</button>
      <button onClick={()=>iniciar()}>Iniciar o jogo</button>
      <h2>Suas Cartas</h2>
      {respostas && respostas.map((carta)=>{
        return <button onClick={()=>escolher(carta)}>{carta.conteudo}</button>
      })}
      <h2>Escolhidas da Rodada</h2>
      {escolhidas && escolhidas.map((carta)=>{
        return <p>{carta.conteudo}</p>
      })}
    </div>
  )
}
