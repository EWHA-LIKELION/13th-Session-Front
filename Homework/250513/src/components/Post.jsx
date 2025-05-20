//게시글 하나를 화면에 그려주는 컴포넌트 파일
import styled from "styled-components";

// props로 받아올 post 구조 분해 할당
const Post = ({title, content}) => {
	// post의 제목과 내용 구조 분해 할당

	// 제목 & 내용 리턴 안에 넣어 렌더링
	return (
		<PostContainer>
			<Title>{title}</Title>
			<Content>{content}</Content>
		</PostContainer>
	);
};

export default Post;

const PostContainer = styled.div`
	width: 90%;
	margin: 20px;
`;

const Title = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 10px;
	color: palevioletred;
`;

const Content = styled.div``;
