import React from 'react';
import {motion, AnimatePresence} from 'framer-motion'
import styled from 'styled-components'
import {Button} from './GlobalStyles'

const ModalDiv = styled(motion.div)`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 80%;
  max-width: 380px;
  height: 100vh;
  background: gray;
`
export default ({ isToggled, setToggled, data, children }) => {
  return (
    <AnimatePresence>
      {isToggled &&
      <>
        <ModalDiv 
					//左から右
          initial={{y: 0, x: "-100%", opacity: 0}}
          animate={{x: 0, opacity: 1}}
					transition={{type: "spring", stiffness: 200}}
          exit={{x: "-100%", opacity: 0}}

					//上から下
          //initial={{y: 10, x: "-50%", opacity: 0}}
          //animate={{y: 200, opacity: 1}}
          //exit={{y: 100, opacity: 0}}
        >
          <Button onClick={setToggled}>Close</Button>
          <h1>{data.title}</h1>
          <p>{data.message}</p>
          {children}
        </ModalDiv>
      </>
      }
    </AnimatePresence>
  )
}