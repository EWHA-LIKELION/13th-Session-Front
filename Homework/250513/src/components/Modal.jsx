import styled from "styled-components";

//props로 받아올 모달창 상태 변경 함수 구조 분해 할당
const Modal = ({toggleModal}) => {
    return (
        <Wrapper> {/* 모달 전체를 감싸는 외곽 틀 */}
            {/* 배경을 클릭하면 모달창이 닫히도록 click 이벤트에 함수 바인딩 */}
            <ModalBackground onClick={toggleModal} /> {/* 모달창 켰을 때 어두운 배경*/}
            {/* 위에 있는 toggleModal은 Modal 컴포넌트 내부에서는 정의돼있지 않기 때문에
            반드시 props로 받아와야함 */}
            <ModalDiv>모달창</ModalDiv>
        </Wrapper>
    );
};

export default Modal;

const Wrapper = styled.div`
    display: flex;
    justify-content: center; //가로 가운데 정렬
    align-items: center; // 세로 가운데 정렬
    position: fixed; // 브라우저 전체 화면 기준으로 고정
    width: 100%;
    height: 100vh; // 브라우저 창의 100%
    z-index: 5;
`;

const ModalBackground = styled.div`
    position: absolute; // 부모인 Wrapper 기준으로 배치되게 만듦 
    width: 100%;
    height: 120%; // 모달이 열렸을 때 화면보다 약간 더 크게 배경을 덮어주기 위해 이렇게 지정
    background-color: rgba(0,0,0,0.4);
`;

const ModalDiv = styled.div`
    /* 배경보다 z-index가 높은 모달창은 클릭해도 닫히지 않음 */
    z-index: 10;
    width: 40%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: thistle;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3);
    font-size: 2rem;
    font-weight: 600;
    color: indianred;
`;