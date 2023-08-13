import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useTransition } from "react-transition-state";
import burger from '../assets/icons/burger.svg'


const Container = styled.div`

`

const Box = styled.div`
	position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: green;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;

  ${({ status }) =>
    (status === "preEnter" || status === "exiting") &&
    `
      transform: translateX(-300px);
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
    <div>
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
    </div>
  )
}

export default MenuModal