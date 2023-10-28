import React, {useState} from "react"
import styled from "styled-components"
//import "./Styled.jsx"

const Body = styled.body`
  
  margin: 0px;
  padding: 0px;
`;

const Main = styled.main`
  margin-top: 80px;
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  flex-direction: column;

  @media screen and (max-width: 500px) {


  }
`;

const Section = styled.section`



`
const Div = styled.div`
  margin-top: 20px;

`
const H2 = styled.h2`
  padding: 30px;
`
const Input = styled.input`
  margin: 5px;
  padding: 10px;
  border: 3px solid #black;
  border-radius: 5px;
`;

const Button = styled.button`
  align-itens: space-evenly;
  margin: 5px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  background-color: #0073e6;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005ba7;
  }
`;

const Clear = styled(Button)`
  background-color: #ff5722;
  &:hover {
    background-color: #e64a19;
  }
`;


function App(){
  const [numero1, setNumero1] = useState()
  const [numero2, setNumero2] = useState()
  const [resultado,setResultado] = useState()
  const [simbolo, setSimbolo] = useState("")

  const capturar1 = (c) => {
    setNumero1(Number(c.target.value))
  }
  const capturar2 = (c) => {
    setNumero2(Number(c.target.value))
  }

  const soma = () =>{
    setSimbolo("+")
    setResultado(numero1 + numero2)
  }
  const sub = () =>{
    setSimbolo("-")
    setResultado(numero1 - numero2)
  }
  const div = () =>{
    setSimbolo("÷")
    setResultado(numero1 / numero2)
  }
  const mult = () =>{
    setSimbolo("×")
    setResultado(numero1 * numero2)
  }
  const clear = () =>{
    setResultado('')
    setNumero1('')
    setNumero2('')
  }
  return(
    <Body>
      <Main>  
        <Section>
          <Input type="number" value={numero1} onChange={capturar1} />
          {simbolo}
          <Input type="number" value={numero2} onChange={capturar2} />
        </Section>
        <H2>= {resultado}</H2>
        <Div>
          <Button onClick={soma}>+</Button>
          <Button onClick={sub}>-</Button>
          <Button onClick={mult}>×</Button>
          <Button onClick={div}>÷</Button>
          <Clear onClick={clear}>c</Clear>
        </Div>
      </Main>
    </Body>
  )
}

export default App