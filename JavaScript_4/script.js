// querySelector 메서드를 사용하여 클래스명이 todo-form인 요소를 선택하고 "form" 변수에 할당해주세요.
const form = document.querySelector(".todo-form");
// querySelector 메서드를 사용하여 클래스명이 popup-button인 요소를 선택하고 "btn" 변수에 할당해주세요.
const btn = document.querySelector(".popup-button");

// ★★ 초기화 함수
const init = () => {
  // 1. 위에서 가져온 btn 요소에서 "click" 이벤트를 감지하면 displayForm 함수를 실행합니다.
  btn.addEventListener("click", displayForm);
  // 2. 위에서 가져온 form 요소에서 "submit" 이벤트를 감지하면 addTodoItem 함수를 실행합니다.
  form.addEventListener("submit", addTodoItem);
};

// 1.의 displayForm 함수: form 입력창 표시/숨기기 함수
const displayForm = () => {
  // 삼항연산자를 사용해서 form 태그의 display 값이 "none"이면 "block"으로, 아니면 "none"으로 바뀌게 해주세요.
  form.style.display = form.style.display === "none" ? "block" : "none";
};

// 2.의 addTodoItem 함수: 할 일 추가 함수
const addTodoItem = () => {
  // 새로고침 방지 함수
  // event.preventDefault();는 우리가 HTML <form>을 사용할 때 거의 필수처럼 쓰는 코드
  // 얘를 사용하지 않으면 입력 내용이 처리되기도 전에 페이지가 새로고침돼서 입력 내용이 날아가버림.
  event.preventDefault();

  // input에 입력한 value를 선택하여 todoContent에 할당한 후 value가 존재하면 할 일 출력 함수 실행
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력 함수
const printTodoItem = (text) => {
  // createElement를 사용해 li, span, button 태그를 생성해주세요.
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // [할 일 내용]
  // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
  span.innerText = text;

  // (할 일 완료 시에,) 생성한 span 태그를 클릭하면 toggleTodoToDone 함수가 실행되게 해주세요.
  span.addEventListener("click", toggleTodoToDone);

  // [할 일 삭제 버튼]
  // 생성한 button 태그에 "삭제"라는 텍스트를 넣어주세요.
  button.innerText = "삭제";

  // 생성한 button 태그를 클릭하면 deleteTodoItem 함수가 실행되게 해주세요.
  button.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  li.appendChild(span);
  li.appendChild(button);

  // todo-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  const ul = document.querySelector(".todo-list");
  ul.appendChild(li);

  // [input 창 초기화]
  document.querySelector(".todo-input").value = "";
};

// ★★ (e.target) 사용하여 할 일 삭제 함수 만들기 ★★
const deleteTodoItem = (e) => {
  // 1. 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
  const target = e.target.parentElement; // 클릭된 버튼의 부모 li를 가져옴
  // 2. 클래스명이 todo-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
  const ul = document.querySelector(".todo-list");
  ul.removeChild(target);
};

// 할 일 -> 끝낸 일 이동 함수
const toggleTodoToDone = (e) => {
  // 할 일 목록에서 할 일 삭제하기
  deleteTodoItem(e);
  // 끝낸 일 목록에 추가하기
  printDoneItem(e.target.innerText);
};

// 끝낸 일 출력 함수
const printDoneItem = (text) => {
  // createElement를 사용해 li, span, button 태그를 생성해주세요.
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // [끝낸 일 내용]
  // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
  span.innerText = text;

  // 생성한 span 태그를 클릭하면 toggleDoneToDo 함수가 실행되게 해주세요.
  span.addEventListener("click", toggleDoneToDo);

  // [끝낸 일 삭제 버튼]
  // 생성한 button 태그에 "삭제"라는 텍스트를 넣어주세요.
  button.innerText = "삭제";

  // 생성한 button 태그를 클릭하면 deleteDoneItem 함수가 실행되게 해주세요.
  button.addEventListener("click", deleteDoneItem);

  // [생성한 요소들 연결]
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  li.appendChild(span);
  li.appendChild(button);

  // done-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  const ul = document.querySelector(".done-list");
  ul.appendChild(li);

  // console.log(text); // 이 콘솔은 임시 코드라 나중에 삭제해주세요:)
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
  const target = e.target.parentElement;
  // 클래스명이 done-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
  const ul = document.querySelector(".done-list");
  ul.removeChild(target);
};

// 끝낸 일 -> 할 일 이동 함수
const toggleDoneToDo = (e) => {
  // 끝낸 일 목록에서 끝낸 일 삭제하기
  deleteDoneItem(e);
  // 할 일 목록에 추가하기
  printTodoItem(e.target.innerText);
};

// 시작 함수
init();
