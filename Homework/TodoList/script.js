const form = document.querySelector(".todo-form");
const btn = document.querySelector(".popup-button");

const init = () => {
    btn.addEventListener("click", displayForm);
    form.addEventListener("submit", addToDoItem);
};

// displayForm 함수 정의: 입력창 표시/숨기기 함수
const displayForm = () => {
    form.style.display = form.style.display === "none" ? "block" : "none";
}

// addToDoItem 함수 정의: 입력한 것 리스트에 추가하는 함수
const addToDoItem = () => {
    // 새로고침 방지 함수
    event.preventDefault();
    const todoContent = document.querySelector(".todo-input").value;
    if (todoContent) printTodoItem(todoContent);
}

const printTodoItem = (text) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.style.all="unset";

    // html 요소에 클래스 이름 붙이는 역할
    li.classList.add("todo-item");
    span.classList.add("todo-text");
    button.classList.add("todo-btn");
    
    // span에 넣고자하는 텍스트 추가
    span.innerText = text;
    
    // 완료 체크 버튼: button에 이미지 추가
    button.innerHTML = "<img src='Check Box.svg'/>";

    // 생성한 요소들 연결
    li.appendChild(span);
    li.appendChild(button);
    const ul = document.querySelector(".todo-list");
    ul.appendChild(li);

    // input 창 초기화
    document.querySelector(".todo-input").value = "";    

    // 할 일 완료했을 때 done으로 이동하는 함수 
    // 만약 버튼 클릭됨이 감지되면 done으로 이동
    // const로 선언한 함수는 선언 이후에만 사용 가능하므로 함수 먼저 정의해주기!!
    const ChangeDone = () => { // Done list로 옮기는 함수
        button.innerHTML = "<img src = 'Check Box (1).svg'/>"
        const doneul = document.querySelector(".done-list");
        doneul.appendChild(li); // done에다 추가하고
        ul.removeChild(li); // todo에서 없애기
    }
    button.addEventListener("click", ChangeDone);

    // 아예 삭제하고 싶을 때 글자 클릭하면 삭제되도록 만들기
    span.addEventListener("click", () => {
        li.remove();
    })
}



init();


