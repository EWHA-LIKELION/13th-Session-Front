import React from "react";
import styled from "styled-components";
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

export default HomePage;

const Wrapper = styled.div`
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
`;
