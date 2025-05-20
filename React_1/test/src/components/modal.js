import { useState } from "react";
import Input from "./components/Input";
import Modal from "./components/Modal";

function App() {
  const [modal, setModal] = useState("");
  const openModal = () => {
    setModal(true);
  };
  return (
    <>
      <Input />
      <hr />
      <button onClick={openModal}>모달 열기</button>
      {modal ? <Modal setModal={setModal} /> : null}
    </>
  );
}

export default App;
