import styled from "styled-components";

import BabyLion from "./BabyLion";

const Modal = ({
	setModal,
	track,
	dataList = [],
	id,
	setId
}) => {
    return (
		<Wrapper>
			<Container>
				<ModalTitle>{track}</ModalTitle>
				<LionsBox>
					{dataList.map((lion) => (
						<BabyLion
							key={lion.id}
							lion={lion}
							onClick={() => setId(lion.id)}
							isSelected={lion.id === id}
						/>
					))}
				</LionsBox>
				<DeleteModalBtn onClick={() => setModal(false)}>닫기</DeleteModalBtn>
			</Container>
		</Wrapper>
	);
};

export default Modal;

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;
	background: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 24px;
	background-color: #f5f5f5;
	padding: 1rem 3rem;

	@media (max-width: 1100px) {
		width: 70%;
	}
	@media (min-width: 1100px) {
		width: 50%;
	}

	animation: modal-show 0.3s;
	@keyframes modal-show {
		from {
			opacity: 0;
			margin-top: -20px;
		}
		to {
			opacity: 1;
			margin-top: 0;
		}
	}
`;

const ModalTitle = styled.div`
	margin-top: 5%;
	color: #3da0fc;
	font-weight: 700;
	font-size: 18px;
	opacity: 0.8;
	@media (max-width: 1100px) {
		font-size: 20px;
	}
	@media (min-width: 1100px) and (max-width: 1700px) {
		font-size: 24px;
	}
`;

const LionsBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin: 1.2rem 0 0 0.5rem;
`;

const DeleteModalBtn = styled.button`
	margin-top: 4%;
	padding: 0.5rem 2rem;
	font-family: "Pretendard";
	color: #ffffff;
	background: #81a7d3;
	border-radius: 1.3rem;
	border: none;
	font-size: 20px;
`;