// ✅ Modal.js (완성된 버전)
import styled from "styled-components";
import BabyLion from "./BabyLion";

const Modal = ({ setModal, track, dataList, selectedId, setSelectedId }) => {
  return (
    <ModalBg onClick={() => setModal(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Title>{track}</Title>
        <BabyLionList>
          {dataList.map((lion) => (
            <BabyLion
              key={lion.id}
              lion={lion}
              isSelected={lion.id === selectedId}
              onClick={() => setSelectedId(lion.id)}
            />
          ))}
        </BabyLionList>
        <CloseBtn onClick={() => setModal(false)}>닫기</CloseBtn>
      </Container>
    </ModalBg>
  );
};

export default Modal;

const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
`;

const Container = styled.div`
  width: 600px;
  padding: 40px;
  background: white;
  border-radius: 24px;
  margin: 100px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #3b82f6;
`;

const BabyLionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const CloseBtn = styled.button`
  width: 100px;
  padding: 8px 12px;
  border: none;
  background-color: #9dbad5;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
