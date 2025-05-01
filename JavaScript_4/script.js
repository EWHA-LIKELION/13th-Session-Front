// querySelector 메서드를 사용하여 클래스명이 todo-form인 요소를 선택하고 "form" 변수에 할당
const form = document.querySelector(".todo-form"); // todo-form은 form 태그
// querySelector 메서드를 사용하여 클래스명이 popup-button인 요소를 선택하고 "btn" 변수에 할당
const btn = document.querySelector(".popup-button"); // popup-button은 + 버튼

// 초기화 함수
const init = () => {
  // form 요소에서 "submit" 이벤트를 감지하면 addTodoItem 함수를 실행
  form.addEventListener("submit", addTodoItem);
  // btn 요소에서 "click" 이벤트를 감지하면 displayForm 함수를 실행
  btn.addEventListener("click", displayForm);
};

// form 입력창 표시/숨기기 함수
const displayForm = () => {
  // 삼항 연산자를 사용해 display 값을 변경
  form.style.display = form.style.display === "none" ? "block" : "none";
};

// 할 일 추가 함수
const addTodoItem = (e) => {
  // 새로고침 방지
  e.preventDefault();

  // input에 입력한 value를 가져와 할 일 추가
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력 함수
const printTodoItem = (text) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // [할 일 내용]
  span.innerText = text;
  span.addEventListener("click", toggleTodoToDone);

  // [삭제 버튼]
  button.innerText = "삭제";
  button.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  li.appendChild(span);
  li.appendChild(button);

  document.querySelector(".todo-list").appendChild(li);

  // 입력창 초기화
  document.querySelector(".todo-input").value = "";
};

// 할 일 삭제 버튼
const deleteTodoItem = (e) => {
  const target = e.target.parentElement; // 삭제 버튼의 부모 요소(li 태그)
  document.querySelector(".todo-list").removeChild(target); // 할 일 목록에서 해당 요소 삭제
};

// 할 일 -> 끝낸 일 이동 함수
const toggleTodoToDone = (e) => {
  deleteTodoItem(e); // 할 일 목록에서 삭제
  printDoneItem(e.target.innerText); // 끝낸 일 목록에 추가
};

// 끝낸 일 출력 함수
const printDoneItem = (text) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // [끝낸 일 내용]
  span.innerText = text;
  span.addEventListener("click", toggleDoneToDo);

  // [삭제 버튼]
  button.innerText = "삭제";
  button.addEventListener("click", deleteDoneItem);

  // [생성한 요소들 연결]
  li.appendChild(span);
  li.appendChild(button);

  document.querySelector(".done-list").appendChild(li);
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  const target = e.target.parentElement; // 삭제 버튼의 부모 요소(li 태그)
  document.querySelector(".done-list").removeChild(target); // 끝낸 일 목록에서 해당 요소 삭제
};

// 끝낸 일 -> 할 일 이동 함수
const toggleDoneToDo = (e) => {
  deleteDoneItem(e); // 끝낸 일 목록에서 삭제
  printTodoItem(e.target.innerText); // 할 일 목록에 추가
};

// 시작 함수 호출
init();
