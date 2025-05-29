import styled from "styled-components";

// props로 받아올 post 구조 분해 할당
<<<<<<< HEAD
const Post = ({ post }) => {
  const { title, content } = post;
  // post의 제목과 내용 구조 분해 할당

  // 제목 & 내용 리턴 안에 넣어 렌더링
  return (
    <PostContainer>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </PostContainer>
  );
=======
const Post = () => {
	// post의 제목과 내용 구조 분해 할당

	// 제목 & 내용 리턴 안에 넣어 렌더링
	return (
		<PostContainer>
			<Title></Title>
			<Content></Content>
		</PostContainer>
	);
>>>>>>> 53cf08ecf60408e2f0102a6138ff7ea0065b06d3
};

export default Post;

const PostContainer = styled.div`
<<<<<<< HEAD
  width: 90%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: palevioletred;
=======
	width: 90%;
	margin: 20px;
`;

const Title = styled.div`
	font-size: 1.5rem;
	font-weight: 600;
	margin-bottom: 10px;
	color: palevioletred;
>>>>>>> 53cf08ecf60408e2f0102a6138ff7ea0065b06d3
`;

const Content = styled.div``;
