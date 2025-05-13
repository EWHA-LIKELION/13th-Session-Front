import styled from "styled-components";

const BabyLion = ({
  lion,
  //Modal.js에서 보내준 props를 구조분해 할당해줍니다!
}) => {
  return (
    <Wrapper
    //BabyLion 컴포넌트를 클릭했을 때 어떤 함수가 적용되어야 할까요?
    >
      <p>{isSelected ? "🦁✨" : "🦁"}</p>
      <Name>{lion.name}</Name>
      <Major>{lion.major}</Major>
    </Wrapper>
  );
};

export default BabyLion;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 3vh;
  padding: 0.5rem 1rem;
  gap: 0.8rem;
  border-radius: 0.8rem;

  color: ${(props) => (props.isSelected ? "white" : "black")};
  background-color: ${(props) =>
    props.isSelected ? "#81a7d3" : "transparent"};

  cursor: pointer;
`;

const Name = styled.div`
  font-weight: 800;
  opacity: 0.8;

  @media (max-width: 1100px) {
    font-size: 20px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 22px;
  }
`;

const Major = styled.div`
  font-weight: 600;
  opacity: 0.8;
  text-overflow: ellipsis;

  @media (max-width: 1100px) {
    font-size: 18px;
  }
  @media (min-width: 1100px) and (max-width: 1700px) {
    font-size: 20px;
  }
`;
