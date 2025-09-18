// to.js

//─────────────────────────────────────────────
// 1. DOM 요소 캐싱
//─────────────────────────────────────────────
const calendarBody = document.getElementById("calendar-body"); // 달력의 몸통 부분 (tbody)
const calendarTableEl = document.getElementById("calendar-table"); // 달력 전체 테이블
const monthPicker = document.getElementById("month-picker"); // 월 선택 그리드
const yearPicker = document.getElementById("year-picker"); // 연도 선택 그리드
const yearEl = document.querySelector(".year"); // 헤더에서 연도 표시
const monthEl = document.querySelector(".month"); // 헤더에서 월 표시
const viewTabs = document.querySelectorAll(".view-tabs button"); // 뷰 전환 탭 버튼
const goalLabel = document.getElementById("goal-label"); // 목표 라벨

const addCategoryBtn = document.querySelector(".add-category"); // 카테고리 추가 버튼
const categoryButtons = document.querySelectorAll(".category-filter .category"); // 카테고리 버튼들

const addTodoBtn = document.querySelector(".add-todo"); // 할 일 추가 버튼
const newTodoInputArea = document.getElementById("new-todo-input-area"); // 새 할 일 입력창 영역
const newTodoInput = document.getElementById("new-todo-input"); // 새 할 일 텍스트 입력
const newTodoAddBtn = document.getElementById("new-todo-add-btn"); // 새 할 일 추가 버튼
const todoEmpty = document.getElementById("todo-empty"); // Things to do가 비었을 때 메시지
const doneEmpty = document.getElementById("done-empty"); // Done이 비었을 때 메시지
const todoList = document.getElementById("todo-list"); // Things to do 리스트
const doneList = document.getElementById("done-list"); // Done 리스트

//─────────────────────────────────────────────
// 2. 전역 상태 변수 & 라벨 맵
//─────────────────────────────────────────────
let today = new Date(); // 오늘 날짜 객체
let curYear = today.getFullYear(); // 현재 연도
let curMonth = today.getMonth(); // 현재 월 (0-11)
let selectedDate = null; // 선택된 날짜 (일간 뷰용)
let currentView = "day"; // 현재 뷰 (일간, 주간, 월간, 연간)

const labels = {
  // 각 뷰에 따라 표시할 목표 라벨
  day: "일간 목표",
  week: "주간 목표",
  month: "월간 목표",
  year: "연간 목표",
};

//─────────────────────────────────────────────
// 3. 뷰 전환 탭 클릭 핸들러
//─────────────────────────────────────────────
viewTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // 1) 탭 active 상태 토글
    viewTabs.forEach((b) => b.classList.remove("active"));
    tab.classList.add("active");
    currentView = tab.dataset.view;

    // 2) 연도/월 텍스트 갱신 (각 뷰에 맞게)
    if (currentView === "month") {
      yearEl.textContent = curYear;
      monthEl.textContent = "";
    } else if (currentView === "year") {
      yearEl.textContent = "";
      monthEl.textContent = "";
    } else {
      yearEl.textContent = curYear;
      monthEl.textContent = `${curMonth + 1}월`;
    }

    // 3) 목표 라벨 갱신
    goalLabel.textContent = labels[currentView];

    // 4) 주간 뷰 토글: "week-mode" 클래스 추가/제거
    calendarTableEl.classList.toggle("week-mode", currentView === "week");

    // 5) 뷰 영역 토글
    calendarTableEl.classList.add("hidden");
    monthPicker.classList.add("hidden");
    yearPicker.classList.add("hidden");

    // 현재 뷰에 맞는 영역 표시
    if (currentView === "day" || currentView === "week") {
      calendarTableEl.classList.remove("hidden");
      renderCalendar(curYear, curMonth);
    } else if (currentView === "month") {
      monthPicker.classList.remove("hidden");
    } else {
      // year
      yearPicker.classList.remove("hidden");
    }
  });
});

//─────────────────────────────────────────────
// 4. 달력 렌더링 함수 (일간/주간)
//─────────────────────────────────────────────
function renderCalendar(year, month) {
  // 헤더 연/월 텍스트 갱신 (일간/주간/월간 뷰)
  yearEl.textContent = year;
  monthEl.textContent = `${month + 1}월`;

  // 달력 몸통 초기화
  calendarBody.innerHTML = "";

  // 날짜 계산: 첫 번째 날과 마지막 날
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDateOfMonth = new Date(year, month + 1, 0);
  const firstWeekday = firstDayOfMonth.getDay();
  const lastDate = lastDateOfMonth.getDate();
  const prevLastDate = new Date(year, month, 0).getDate();

  let cells = [];
  // 이전 달 날짜 추가
  for (let i = firstWeekday - 1; i >= 0; i--) {
    cells.push({ day: prevLastDate - i, out: true });
  }
  // 현재 월 날짜 추가
  for (let d = 1; d <= lastDate; d++) {
    const dateObj = new Date(year, month, d);
    cells.push({
      day: d,
      out: false,
      date: dateObj,
      weekday: dateObj.getDay(),
    });
  }
  // 다음 달 날짜 추가 (빈 공간 채우기)
  let nextDay = 1;
  while (cells.length % 7 !== 0) {
    cells.push({ day: nextDay++, out: true });
  }

  // 날짜 버튼 렌더링
  cells.forEach((cell, idx) => {
    // 새로운 주(행) 시작
    if (idx % 7 === 0) {
      const tr = document.createElement("tr");
      calendarBody.appendChild(tr);
    }
    const tr = calendarBody.lastElementChild;
    const td = document.createElement("td");
    const btn = document.createElement("button");
    btn.textContent = cell.day;
    btn.className = "day-btn";

    if (cell.out) {
      // 이전/다음 달 날짜 비활성화 처리
      td.classList.add("out-month");
    } else {
      // 오늘 날짜 표시
      if (cell.date.toDateString() === today.toDateString()) {
        td.classList.add("today");
      }
      // 주말 표시 (일요일, 토요일)
      if (cell.weekday === 0) btn.classList.add("sunday");
      if (cell.weekday === 6) btn.classList.add("saturday");

      // 클릭 이벤트 핸들러
      btn.addEventListener("click", () => {
        if (currentView === "week") {
          // 주간 뷰: 주 단위로 클릭 시 토글
          const row = btn.closest("tr");
          calendarBody
            .querySelectorAll("tr.clicked")
            .forEach((tr) => tr.classList.remove("clicked"));
          row.classList.add("clicked");
        } else {
          // 일간 뷰: 개별 날짜 선택 토글
          btn.classList.toggle("selected");
          selectedDate = cell.date;
        }
      });

      // 더블 클릭 방지 (월/년 뷰에서는 더블 클릭을 방지)
      btn.addEventListener("dblclick", (e) => e.preventDefault());
    }

    td.appendChild(btn);
    tr.appendChild(td);
  });
}

//─────────────────────────────────────────────
// 5. 월/연도 뷰 버튼 생성
//─────────────────────────────────────────────
for (let m = 1; m <= 12; m++) {
  const b = document.createElement("button");
  b.textContent = `${m}월`;
  // 월 선택 버튼 클릭 시 상태 토글
  b.addEventListener("click", () => b.classList.toggle("selected"));
  // 더블 클릭 시 일간 뷰로 이동
  b.addEventListener("dblclick", () => {
    curMonth = m - 1;
    currentView = "day";
    // 탭 UI 업데이트
    viewTabs.forEach((t) => t.classList.remove("active"));
    document.querySelector('[data-view="day"]').classList.add("active");
    // 뷰 전환
    monthPicker.classList.add("hidden");
    calendarTableEl.classList.remove("hidden");
    renderCalendar(curYear, curMonth);
    yearEl.textContent = curYear;
    monthEl.textContent = `${curMonth + 1}월`;
  });
  monthPicker.appendChild(b);
}

// 연도 선택 버튼
for (let y = 2020; y <= 2030; y++) {
  const b = document.createElement("button");
  b.textContent = `${y}년`;
  b.addEventListener("click", () => b.classList.toggle("selected"));
  b.addEventListener("dblclick", () => {
    curYear = y;
    currentView = "day";
    viewTabs.forEach((t) => t.classList.remove("active"));
    document.querySelector('[data-view="day"]').classList.add("active");
    yearPicker.classList.add("hidden");
    calendarTableEl.classList.remove("hidden");
    renderCalendar(curYear, curMonth);
    yearEl.textContent = curYear;
    monthEl.textContent = `${curMonth + 1}월`;
  });
  yearPicker.appendChild(b);
}

//─────────────────────────────────────────────
// 6. 카테고리 필터링 + 신규 카테고리 토글
//─────────────────────────────────────────────
function handleCategoryClick(e) {
  const btn = e.currentTarget;
  if (btn.classList.contains("active")) {
    // 이미 선택된 버튼 클릭 → 해제
    btn.classList.remove("active");
    document
      .querySelectorAll("#todo-list li")
      .forEach((li) => (li.style.display = ""));
    return;
  }
  // 새로 선택 → 다른 버튼 해제
  categoryButtons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  const cat = btn.dataset.category;
  document.querySelectorAll("#todo-list li").forEach((li) => {
    li.style.display = li.dataset.category === cat ? "" : "none";
  });
}

categoryButtons.forEach((btn) =>
  btn.addEventListener("click", handleCategoryClick)
);

// 카테고리 추가 버튼 클릭 시 새 카테고리 입력
addCategoryBtn.addEventListener("click", () => {
  const name = prompt("새 카테고리 이름을 입력하세요");
  if (!name) return;
  const slug = name.trim().toLowerCase().replace(/\s+/g, "-");
  if (
    [...document.querySelectorAll(".category")].some(
      (b) => b.dataset.category === slug
    )
  ) {
    alert("이미 존재합니다.");
    return;
  }
  const btn = document.createElement("button");
  btn.className = "category";
  btn.dataset.category = slug;
  btn.textContent = name;
  addCategoryBtn.before(btn);
  btn.addEventListener("click", handleCategoryClick);
});

//─────────────────────────────────────────────
// 7. 할 일 목록 (Things to do / Done)
//─────────────────────────────────────────────
function updateEmptyMessages() {
  // 할 일 목록과 완료 목록의 빈 메시지 상태 업데이트
  todoEmpty.style.display = todoList.children.length ? "none" : "";
  doneEmpty.style.display = doneList.children.length ? "none" : "";
}

// 할 일 추가 버튼 클릭 시 입력창 토글
addTodoBtn.addEventListener("click", () => {
  newTodoInputArea.classList.toggle("hidden");
  if (!newTodoInputArea.classList.contains("hidden")) {
    newTodoInput.focus();
  }
});

// 할 일 추가 함수
function addTodoItem(text) {
  const v = text.trim();
  if (!v) {
    alert("할 일 내용을 입력해주세요.");
    newTodoInput.focus();
    return;
  }
  if (v.length > 20) {
    alert("할 일은 20자 이하로 입력해주세요.");
    newTodoInput.focus();
    return;
  }

  const li = document.createElement("li");
  li.dataset.category =
    document.querySelector(".category-filter .category.active")?.dataset
      .category || "";
  li.innerHTML = `
    <span class="toggle"></span>
    <span class="text">${v}</span>
    <span class="edit-toggle"><!-- chevron.png 경로 --></span>
    <div class="edit-buttons hidden">
      <button class="edit-btn">수정</button>
      <button class="delete-btn">삭제</button>
    </div>
  `;

  // 완료 토글
  li.querySelector(".toggle").addEventListener("click", () => {
    li.classList.toggle("done");
    if (li.classList.contains("done")) doneList.prepend(li);
    else todoList.prepend(li);
    updateEmptyMessages();
  });

  // 수정/삭제 버튼 토글
  const editToggle = li.querySelector(".edit-toggle");
  const editBtns = li.querySelector(".edit-buttons");
  editToggle.addEventListener("click", () => {
    // > 버튼 클릭 시 가로 길이 줄어듦
    li.classList.toggle("shrink"); // shrink 클래스 추가/제거
    editBtns.classList.toggle("hidden"); // 수정/삭제 버튼 보이기/숨기기
  });

  // 삭제
  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
    updateEmptyMessages();
  });

  // 수정 기능
  li.querySelector(".edit-btn").addEventListener("click", () => {
    const span = li.querySelector(".text");
    const orig = span.textContent;
    span.innerHTML = `<input type="text" class="edit-input" value="${orig}" maxlength="20">`;
    const inp = span.querySelector(".edit-input");
    inp.focus();
    inp.select();

    function finishEdit() {
      const nv = inp.value.trim();
      if (!nv || nv.length > 20) {
        alert("1~20자 사이로 입력해주세요.");
        inp.focus();
        return;
      }
      span.textContent = nv;
      inp.removeEventListener("blur", finishEdit);
      inp.removeEventListener("keydown", onKey);
    }
    function onKey(e) {
      if (e.key === "Enter") finishEdit();
      if (e.key === "Escape") {
        span.textContent = orig;
        inp.removeEventListener("blur", finishEdit);
      }
    }
    inp.addEventListener("blur", finishEdit);
    inp.addEventListener("keydown", onKey);
    editBtns.classList.add("hidden");
  });

  todoList.prepend(li);
  newTodoInput.value = "";
  updateEmptyMessages();
}

newTodoAddBtn.addEventListener("click", () => addTodoItem(newTodoInput.value));
newTodoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodoItem(newTodoInput.value);
});

//─────────────────────────────────────────────
// 8. 초기 렌더링
//─────────────────────────────────────────────
renderCalendar(curYear, curMonth);
updateEmptyMessages();
