import React from "react";
import styled from "styled-components";

const Modal = ({closeModal}) => {
    const handleModalClick = (e) => {
        e.stopPropagation();
    };
    return (
        <Overlay onClick={closeModal}>
            <ModalBox onClick={handleModalClick}>
                {<p>모달창</p>}
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
    background-color: palevioletred;
    padding: 20px;
    border-radius: 20px;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;