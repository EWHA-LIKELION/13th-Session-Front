import styled from "styled-components";

// 🐣 props로 모달 닫는 함수 받아오기!
const Modal = ({ toggleModal }) => {
  return (
    <Wrapper>
      <ModalBackground onClick={toggleModal} />

      <ModalDiv onClick={(e) => e.stopPropagation()}>모달창</ModalDiv>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 5;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 120%;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalDiv = styled.div`
  z-index: 10;
  width: 40%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: thistle;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  font-size: 2rem;
  font-weight: 600;
  color: indianred;
`;
