import React, { useState } from 'react'
import styled from "styled-components";
import MenuModal from './MenuModal'


const Container = styled.div`
   width: 100%;
   height: 64px;
   background: green;
`

const Navbar = () => {
   const [open, setOpen] = useState(false)

   const handleClick = () => {
     console.log("button clicked")
     setOpen(!open)
   }
 
  return (
   <Container>
      <MenuModal open={open}/>


   </Container>

  )
}

export default Navbar