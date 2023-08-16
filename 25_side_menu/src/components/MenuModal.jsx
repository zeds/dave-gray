import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useTransition } from "react-transition-state";
import burger from '../assets/icons/burger.svg'


const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  img {
    width: 100px;
  }
`

const Box = styled.div`
	position: absolute;
  top: 0;
  right: -300px;
  width: 200px;
  height: 100vh;
  background: green;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  ${({ status }) =>
    (status === "preEnter" || status === "exiting") &&
    `
      transform: translateX(-500px);
    `}
`;

const MenuModal = ({
  open
}) => {

  console.log("open=", open)

  const [{ status, isMounted }, toggle] = useTransition({
    timeout: 500,
    mountOnEnter: true,
    unmountOnExit: true,
    preEnter: true
  });

  useEffect(() => {
    console.log("us open=", open)
  }, [toggle])

  return (
    <Container>
      {open}
      {!isMounted && <button onClick={() => toggle(true)}><img src={burger} /></button>}
      {isMounted && (

			<>
				<Box status={status}>
					<p>This message is being transitioned in and out of the DOM.</p>
					<button onClick={() => toggle(false)}>Close</button>
				</Box>
			</>
      )}
    </Container>
  )
}

export default MenuModal