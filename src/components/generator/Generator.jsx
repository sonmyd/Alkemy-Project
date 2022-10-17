import styled from "styled-components";
import GirdOfButtons from "./BtnFunctions/BtnContainer";
import Wallet from "./CardModels/Cardwallet";



export default function Generator(){
 
  
  return (
    <Container>
      <Cardplay>
        <Wallet/>
        <GirdOfButtons/>
      </Cardplay>
      <Codeplay>
      codigo
      </Codeplay>
    </Container>
  );
};



const Container = styled.body`
    display:  grid;    
    height: 100vh;
    width: auto;
    padding-top: 1%;
    background: none;
    color:#000000;
`

const Cardplay=styled.header`
  width: 100%;
  outline: 2px solid red;
  height: 60vh;
  display: flex;
  justify-content: space-around;
`
const Codeplay=styled.footer`
  width: 100%;
  outline: 2px solid red;
  height: 35vh;
`