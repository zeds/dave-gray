import React, {useState} from "react";
import styled from "styled-components";
import { useTransition } from "react-transition-state";
import './App.css'
import MenuModal from './MenuModal'


const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 0;
  background: black;
`;


function App() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    console.log("button clicked")
    setOpen(!open)
  }


  return (
    <>
      <Container onClick={() => handleClick()}>
        <button onClick={() => handleClick()}>{open ? '閉じる' : '開く'}</button>
        <MenuModal open={open}/>
      </Container>
    </>
  );
}

export default App;
