document.addEventListener("DOMContentLoaded", () => {
  // '더보기' 버튼 클릭 시 텍스트 토글
  const moreBtn = document.querySelector(".titleAndButton .moreBtn");
  const title = document.querySelector(".titleAndButton .title");

  moreBtn.addEventListener("click", () => {
    moreBtn.classList.toggle("clicked");
    title.classList.toggle("clamp"); // clamp 클래스를 토글
  });

  // 좋아요 버튼 클릭 시 카운트 증가
  document.querySelectorAll(".likeBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      let countSpan = btn.querySelector(".likeCount");
      countSpan.textContent = parseInt(countSpan.textContent) + 1;
    });
  });

  // 싫어요 버튼 클릭 시 카운트 증가
  document.querySelectorAll(".dislikeBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      let countSpan = btn.querySelector(".dislikeCount");
      countSpan.textContent = parseInt(countSpan.textContent) + 1;
    });
  });
});
