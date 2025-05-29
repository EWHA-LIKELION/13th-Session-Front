import React from "react";
import styled from "styled-components";
<<<<<<< HEAD
import TopBar from "../components/TopBar";
function HomePage(props) {
  const { posts } = props;
  return (
    <Wrapper>
      <TopBar />
      {posts.map((post) => (
        <PostCard key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </PostCard>
      ))}
    </Wrapper>
  );
}
=======

import TopBar from "../components/TopBar";

// props로 받아올 posts 구조 분해 할당
const HomePage = () => {
	return (
		<Wrapper>
			<TopBar />
			{/* map을 이용해 배열의 요소를 하나씩 렌더링 */}
		</Wrapper>
	);
};
>>>>>>> 53cf08ecf60408e2f0102a6138ff7ea0065b06d3

export default HomePage;

const Wrapper = styled.div`
<<<<<<< HEAD
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostCard = styled.div`
  width: 40%;
  margin: 20px;
  padding: 20px;
  background-color: #fff0f5;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
=======
	display: flex;
	flex-direction: column;
	align-items: center;
>>>>>>> 53cf08ecf60408e2f0102a6138ff7ea0065b06d3
`;
