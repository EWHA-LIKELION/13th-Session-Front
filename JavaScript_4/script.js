// querySelector 메서드를 사용하여 클래스명이 todo-form인 요소를 선택하고 "form" 변수에 할당해주세요.
const form = document.querySelector(".todo-form");
// querySelector 메서드를 사용하여 클래스명이 popup-button인 요소를 선택하고 "btn" 변수에 할당해주세요.
const btn = document.querySelector(".popup-button");

// 초기화 함수
const init = () => {
  // 위에서 가져온 form 요소에서 "submit" 이벤트를 감지하면 addTodoItem 함수를 실행합니다.
  form.addEventListener("submit", addTodoItem);
  // 위에서 가져온 btn 요소에서 "click" 이벤트를 감지하면 displayForm 함수를 실행합니다.
  btn.addEventListener("click", displayForm);
};

// form 입력창 표시/숨기기 함수
const displayForm = () => {
  // 삼항연산자를 사용해서 form 태그의 display 값이 "none"이면 "block"으로, 아니면 "none"으로 바뀌게 해주세요.
  form.style.display = form.style.display === "none" ? "block" : "none";
};

// 할 일 추가 함수
const addTodoItem = (event) => {
  // 새로고침 방지 함수
  event.preventDefault();

  // input에 입력한 value를 선택하여 todoContent에 할당한 후 value가 존재하면 할 일 출력 함수 실행
  const todoContent = document.querySelector(".todo-input").value;
  if (todoContent) printTodoItem(todoContent);
};

// 입력 받은 할 일 출력 함수
const printTodoItem = (text) => {
  // createElement를 사용해 li, span, button 태그를 생성해주세요.
  const todoIteml = document.createElement("li"); // 내용 툴
  const todoItems = document.createElement("span"); // 할 일 내용
  const todoItemb = document.createElement("button"); // 버튼

  // [할 일 내용]
  // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
  todoItems.innerText = text;
  // 생성한 span 태그를 클릭하면 toggleTodoToDone 함수가 실행되게 해주세요.
  todoItems.addEventListener("click", toggleTodoToDone);

  // [할 일 삭제 버튼]
  // 생성한 button 태그에 "삭제"라는 텍스트를 넣어주세요.
  todoItemb.innerText = "삭제";

  // 생성한 button 태그를 클릭하면 deleteTodoItem 함수가 실행되게 해주세요.
  todoItemb.addEventListener("click", deleteTodoItem);

  // [생성한 요소들 연결]
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  todoIteml.appendChild(todoItems);
  todoIteml.appendChild(todoItemb);

  // todo-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  document.querySelector(".todo-list").appendChild(todoIteml);

  // [input 창 초기화]
  document.querySelector(".todo-input").value = "";
};

// 할 일 삭제 함수
const deleteTodoItem = (e) => {
  // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
  const target = e.target.parentElement;
  // 클래스명이 todo-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
  document.querySelector(".todo-list").removeChild(target);
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
  // createElement를 사용해 li, span. button 태그를 생성해주세요.
  const todoItemdl = document.createElement("li");
  const todoItemds = document.createElement("span");
  const todoItemdb = document.createElement("button");

  // [끝낸 일 내용]
  // 생성한 span 태그에 인자로 받은 text를 할당해주세요.
  todoItemds.innerText = text;

  // 생성한 span 태그를 클릭하면 toggleDoneToDo 함수가 실행되게 해주세요.
  todoItemds.addEventListener("click", deleteTodoItem);

  // [끝낸 일 삭제 버튼]
  // 생성한 button 태그에 "삭제"라는 텍스트를 넣어주세요.
  todoItemdb.innerText = "삭제";

  // 생성한 button 태그를 클릭하면 deleteDoneItem 함수가 실행되게 해주세요.
  todoItemdb.addEventListener("click", deleteDoneItem);

  // [생성한 요소들 연결]
  // 생성한 li 태그에 생성한 span 태그와 button 태그를 자식 노드로 추가해주세요.
  todoItemdl.appendChild(todoItemds);
  todoItemdl.appendChild(todoItemdb);

  // done-list를 className으로 갖는 ul 태그를 선택해 생성한 li 태그를 자식 노드로 추가해주세요.
  document.querySelector(".done-list").appendChild(todoItemdl);

  // console.log(text); // 이 콘솔은 임시 코드라 나중에 삭제해주세요:)
};

// 끝낸 일 삭제 함수
const deleteDoneItem = (e) => {
  // 삭제 버튼의 부모 요소를 "target" 변수에 할당해주세요. (이때, 부모 요소는 li 태그)
  const target = e.target.parentElement;
  // 클래스명이 done-list인 ul 태그를 선택한 후 target 요소를 삭제해주세요.
  document.querySelector(".done-list").removeChild(target);
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
