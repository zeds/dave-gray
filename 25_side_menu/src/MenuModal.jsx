import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { useTransition } from "react-transition-state";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0px;
  padding: 0;
  background: gray;
`;

const Box = styled.div`
  top: 0;
  left: 0px;
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
    <Container>
      {open}
      {!isMounted && <button onClick={() => toggle(true)}>Show Message</button>}
      {isMounted && (
        <Box status={status}>
          <p>This message is being transitioned in and out of the DOM.</p>
          <button onClick={() => toggle(false)}>Close</button>
        </Box>
      )}
    </Container>
  )
}

export default MenuModal