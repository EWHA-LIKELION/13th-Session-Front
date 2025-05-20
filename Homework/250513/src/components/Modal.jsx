import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Modal = ({ toggleModal }) => {
  const modalRef = useRef();

  // 바깥 영역 클릭 시 닫히게 하는 useEffect
  useEffect(() => {
    const handleClickOutside = (e) => {
      // 모달 외부 클릭했는지 확인
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        toggleModal(); // 닫기 함수 호출
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // 마우스 누를 때 감지해!!
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // 클린업도 잊지마용~🐣
    };
  }, [toggleModal]);

  return (
    <Overlay>
      <ModalBox ref={modalRef}>
        <h2>이건 모달</h2>
        <p>여기 안을 클릭해도 안 닫혀요~!</p>
        <CloseButton onClick={toggleModal}>닫기</CloseButton>
      </ModalBox>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); // 반투명 배경!
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  min-width: 300px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: palevioletred;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;
