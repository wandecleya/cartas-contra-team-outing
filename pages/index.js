import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {CartasService} from "../service/CartasService";

export default function Home() {


  const respostas = CartasService.getRespostas();

  return (
    <div>
      eh
      {respostas.title}
    </div>
  )
}
