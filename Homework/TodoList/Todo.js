// 요소 선택
const plusButton = document.querySelector(".plus-button");
const popup = document.querySelector(".popup");
const popupInput = document.querySelector(".popup-input");
const popupSave = document.querySelector(".popup-save");
const popupClose = document.querySelector(".popup-close");
const todoList = document.querySelector(".todo-list");
const doneList = document.querySelector(".done-list");

// 팝업 열기
plusButton.addEventListener("click", () => {
  popup.classList.remove("hidden");
  popupInput.value = "";
  popupInput.focus();
});

// 팝업 닫기
popupClose.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// 저장 버튼 클릭 시 TO-DO 항목 추가
popupSave.addEventListener("click", () => {
  const text = popupInput.value.trim();
  if (text.length < 1) {
    alert("1자 이상 입력해주세요!");
    return;
  }

  addTodoItem(text);
  popup.classList.add("hidden");
});

// TO-DO 항목 생성 함수
function addTodoItem(text) {
  const li = document.createElement("li");

  // 체크박스
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // 텍스트
  const span = document.createElement("span");
  span.textContent = text;

  // 체크되면 DONE으로 이동
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      todoList.removeChild(li);
      moveToDone(text);
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  todoList.appendChild(li);
}

// DONE 항목 생성 함수
function moveToDone(text) {
  const li = document.createElement("li");
  li.textContent = text;

  li.addEventListener("click", () => {
    doneList.removeChild(li);
  });

  doneList.appendChild(li);
}

plusButton.addEventListener("click", () => {
  popup.classList.add("show");
});

closeButton.addEventListener("click", () => {
  popup.classList.remove("show");
});
