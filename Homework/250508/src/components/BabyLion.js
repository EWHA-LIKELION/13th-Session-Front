import styled from "styled-components";
import React from "react";

const BabyLion = ({
  lion,
  isSelected,
  onClick,
  //Modal.js에서 보내준 props를 구조분해 할당해줍니다!
}) => {
  return (
    <Wrapper
      //BabyLion 컴포넌트를 클릭했을 때 어떤 함수가 적용되어야 할까요?
      onClick={onClick}
      selected={isSelected}
    >
      <p>
        {
          isSelected
            ? "✅" // 선택된 항목이면 체크+사자 이모지
            : "🦁" // 아니면 그냥 사자 이모지
        }
      </p>
      {/* 위 p 태그에는 이모지 텍스트가 들어가는데요! */}
      {/* 선택되었는지를 확인하는 인자에 따라 다르게 값을 띄워줍시다. */}
      {/* hint✉️ : 삼항 연산자를 사용해서 띄워봅시다~!  */}
      <Name>{lion.name}</Name>
      <Major>{lion.major}</Major>
    </Wrapper>
  );
};

export default BabyLion;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* height: 3vh; */
  padding: 0.5rem 1rem;
  gap: 0.8rem;
  border-radius: 0.8rem;

  //color:
  //background-color:
  //위 속성값을 동적 스타일링을 주고 싶을 때 어떻게 하면 좋을까요?
  //세션 자료 60p의 React(1) 종합 실습 문제에서 아래쪽 사진을 참고해주세요!
  //그리고 여기서 삼항연산자 사용을 위해 필요한 props를 위 JSX에서 인자로 넘겨주는 것도 잊으면 안됩니다.
  //실습문제에서의 (2)번 항목에 해당하는 부분이니 꼭 넣어주세요!
  background-color: ${({ selected }) =>
    selected ? " #81A7D3" : " #D8E4EC"}; // 선택된 항목만 파란 배경
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
