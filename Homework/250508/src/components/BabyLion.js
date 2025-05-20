// ✅ BabyLion.js (완성 다시)
import styled from "styled-components";

const BabyLion = ({ lion, isSelected, onClick }) => {
  return (
    <Wrapper onClick={onClick} $isSelected={isSelected}>
      <p>{isSelected ? "✅" : "🦁"}</p>
      <Name>{lion.name}</Name>
      <Major>{lion.major}</Major>
    </Wrapper>
  );
};

export default BabyLion;

const Wrapper = styled.div`
  background-color: ${(props) => (props.$isSelected ? "#9dbad5" : "#e5f0ff")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};
  display: flex;
  align-items: center;
  height: 3vh;
  padding: 0.5rem 1rem;
  gap: 0.8rem;
  border-radius: 0.8rem;
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
