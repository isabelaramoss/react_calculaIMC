import { useState } from "react"
import styles from './Calculadora.module.css';

const Calculadora = () => {
  //Armazenar valores:
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const calculaImc = () => {
    //Cálculo para IMC: peso (kg) / altura (m) ^2
    const alturaAoQuadrado = altura * altura;
    const Imc = peso / alturaAoQuadrado;
  
    if(Imc >= 18.5 && Imc <= 24.9){
      return(
        <>
        <p><b>Seu IMC: {Imc.toFixed(2)}</b></p>
        <p>Com base no peso e altura informados, a classificação do IMC é <b>normal</b>, grau de obecidade 0.</p>
        </>
      )
    } else if(Imc < 18.5){
      return(
        <>
        <p><b>Seu IMC: {Imc.toFixed(2)}</b></p>
        <p>Com base no peso e altura informados, a classificação do IMC é <b>magreza</b>, grau de obecidade 0.</p>
        </>
      )
    } else if(Imc >= 25 && Imc <= 29.9){
      return(
        <>
        <p><b>Seu IMC: {Imc.toFixed(2)}</b></p>
        <p>Com base no peso e altura informados, a classificação do IMC é <b>sobrepeso</b>, grau de obecidade I.</p>
        </>
      )
    } else if(Imc >= 30 && Imc <= 39.9){
      return(
        <>
        <p><b>Seu IMC: {Imc.toFixed(2)}</b></p>
        <p>Com base no peso e altura informados, a classificação do IMC é <b>obesidade</b>, grau de obecidade II.</p>
        </>
      )
    } else if(Imc >= 40){
      return(
        <>
        <p><b>Seu IMC: {Imc.toFixed(2)}</b></p>
        <p>Com base no peso e altura informados, a classificação do IMC é <b>obesidade grave</b>, grau de obecidade II.</p>
        </>
      )
    } 
  }

  return(
    <div className="container">
      <div className="conteudo">
        <p>Digite sua altura em metros:</p>
        <input type="number" onChange={e => setAltura(e.target.value)} placeholder="Exemplo: 1.70" />
        <p>Digite seu peso em quilos:</p>
        <input type="number" onChange={e => setPeso(e.target.value)} placeholder="Exemplo: 69.2" /> <br/>
        {peso !== 0 && altura !== 0 && (calculaImc())}
      </div>
    </div>
  )

}

export default Calculadora;