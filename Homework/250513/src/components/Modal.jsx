// src/components/Modal.jsx
import React from "react";
import styled from "styled-components";

const Modal = ({ onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Title>모달창</Title>
        <CloseBtn onClick={onClose}>닫기</CloseBtn>
      </Content>
    </Overlay>
  );
};

export default Modal;

// 반투명한 전체 배경: 화면 크기 상관없이 꽉 채우고, 스크롤 잠금은 필요시 추가하세요.
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 위에 떠 있도록 충분히 큰 값 */
`;

// 모달 콘텐츠 박스: 반응형으로 가로 90%, 최대 600px, 최소 300px
const Content = styled.div`
  background: #f2d3eb; /* 연보라 배경 */
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 600px;
  min-width: 300px;
  text-align: center;
`;

// 모달 제목
const Title = styled.h2`
  margin: 0;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #d95c53; /* 진한 코랄 톤 */
`;

// 닫기 버튼
const CloseBtn = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: #d95c53;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #bf504a;
  }
`;
