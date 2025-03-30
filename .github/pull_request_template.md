## 1. 코드 Summary

(어떤 기능을 구현했는지보다 코드를 작성할 때 어떤 점을 신경써서 구현했는지, 어떻게 구현했는지를 최대한 구체적으로 작성해주세요.)
<br/>

### 1) 전체적인 레이아웃 구조

- body 태그 내에서 display: flex;를 적용하여 기본적으로 수평 배치를 유지.
- 주요 섹션은 container1 (메인 콘텐츠)과 container2 (부가 정보 및 추천 콘텐츠)로 구분하여 관리.
- position: fixed;를 활용하여 헤더가 항상 화면 상단에 고정되도록 구성.

### 2) header 디자인

- header 요소는 display: flex;와 justify-content: space-between;을 사용하여 로고, 검색 아이콘, 프로필 이미지 간격을 균등 배치.
- position: fixed; 속성을 사용하여 헤더가 항상 상단에 위치하도록 고정.
- 아이콘(search.png, user_profile.png)에 filter: drop-shadow();를 적용하여 그림자 효과 추가.

### 3) 동영상 플레어

- iframe을 사용하여 유튜브 동영상 삽입 (allowfullscreen 속성으로 전체화면 지원).
- 동영상이 헤더에 가려지지 않도록 margin-top: 65px;을 적용.
  <br/>

### 4) Comments 섹션 구성

- 댓글 목록을 <ul> 내부에 <li class="comments"> 형태로 작성하여 리스트로 정리.
- 프로필 이미지, 사용자 정보, 댓글 내용을 <div class="comments-body"> 내부에 배치.

### 5) Recommended 섹션

- 추천 영상 목록을 <ul> 내부에 <li class="recommended"> 형식으로 배치.
- 각 추천 영상에는 썸네일 이미지와 제목, 업로더 정보, 조회 수를 포함.
- 썸네일 이미지(img)에 border-radius: 5%를 적용하여 모서리를 둥글게 디자인.

## 2. Key Changes

(같은 과제를 다시 제출하는 경우에만 변경사항을 입력해주세요.)
<br/>
<br/>

## 3. Reference

(코드 작성하면서 참고한 블로그/문서 등을 참조해주세요! 링크와 함께 어떤 기능을 수행할 때 참조했는지 짧게 작성해주세요.)
<br/>

- html 유튜브 영상 삽입
  https://blog.naver.com/juyoung1704/221612998931

- img 그림자
  https://mong-blog.tistory.com/entry/png-%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%97%90-%EA%B7%B8%EB%A6%BC%EC%9E%90-%EB%84%A3%EB%8A%94-%EB%B2%95with-css#google_vignette

- img 모서리 둥굴게
  https://hianna.tistory.com/735
  <br/>

## 4. Report

https://www.notion.so/1bccc780cd7d80a1af46e5a8edb6c507?pvs=4

(노션에 작성한 스터디 회고 링크를 첨부해주세요.)
