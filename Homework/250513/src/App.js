import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ModalPage from "./pages/ModalPage";

function App() {
  // 초기 게시글 배열
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "제목1",
      content: "프론트 아기사자들 이번 과제도 파이팅~~~",
    },
    {
      id: 2,
      title: "제목2",
      content:
        "useState와 props의 심화 연습 과정입니다:) react-router-dom, useEffect, useRef가 어떻게 활용되는지도 꼼꼼히 살펴보시길....",
    },
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage posts={posts} />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/"
          element={<CreatePage posts={posts} setPosts={setPosts} />}
        />
        <Route path="/modal" element={<ModalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
