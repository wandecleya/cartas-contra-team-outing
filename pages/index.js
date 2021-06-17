import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {CartasService} from "../service/CartasService";
import {useEffect, useState} from "react";


export default function Home() {
const [respostas, setRespostas] = useState();

const service = () => {
  CartasService.getRespostas().then( response => setRespostas(response));
};

  useEffect(() => {
    service();
  }, ['']);

console.log(respostas, 'b');
  return (
    <div>
      eh
      {respostas && respostas.title}
    </div>
  )
}
