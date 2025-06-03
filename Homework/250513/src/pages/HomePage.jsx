import React from "react";
import styled from "styled-components";

import TopBar from "../components/TopBar";

// props로 받아올 posts 구조 분해 할당
const HomePage = ({posts}) => {
	return (
		<Wrapper>
			<TopBar />
			{/* map을 이용해 배열의 요소를 하나씩 렌더링 */}
			{posts.map((post) => (
				<div key={post.id} >
					<Title>{post.title}</Title>
					<Content>{post.content}</Content>
				</div>
			))}
		</Wrapper>
	);
};

export default HomePage;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 8px;
	color: palevioletred;
`;

const Content = styled.div`
	margin-bottom: 20px;
	line-height: 1.5;
`;