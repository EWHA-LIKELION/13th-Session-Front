import React from "react";
import styled from "styled-components";

import TopBar from "../components/Topbar";

// props로 받아올 posts 구조 분해 할당
const HomePage = (props) => {
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
};

export default HomePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
