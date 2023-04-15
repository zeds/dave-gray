import React, { useState } from "react";
import GlobalStyles, {Container, Button} from './GlobalStyles';
import Modal from "./Modal";

function App() {
	const [modalVisible, setModalVisible] = useState(false);
  const openModal = _ => {
    setModalVisible(prevStatte => !prevStatte);
  };



  return (
    <Container>
			<GlobalStyles />
			<Button onClick={openModal}>Open Modal</Button>
			<Modal
				isToggled={modalVisible}
				setToggled={openModal}
				data={{
					title: "メニューだよー",
					message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, temporibus dolorum voluptates repudiandae earum qui quos eos obcaecati illum? Exercitationem aliquid praesentium delectus nemo explicabo nisi placeat accusantium ab iure!"
				}}
			/>
    </Container>
  )
}

export default App
