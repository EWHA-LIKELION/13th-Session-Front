document.addEventListener('DOMContentLoaded', () => {
  let currentDate = new Date();
  let selectedDate = new Date();
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let memoContent = localStorage.getItem('memo') || '';

  // 캘린더 생성 함수
  function generateCalendar(date = new Date()) {
      const calendarGrid = document.querySelector('.calendar-grid');
      const monthHeader = document.querySelector('.april');
      calendarGrid.innerHTML = '';

      // 현재 월/년도 표시
      monthHeader.textContent = `${date.getFullYear()}년 ${date.getMonth() + 1}월`;

      // 날짜 생성 로직
      const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
      const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      
      // 요일 헤더 추가
      ['일', '월', '화', '수', '목', '금', '토'].forEach(day => {
          const dayElement = document.createElement('div');
          dayElement.className = 'text-wrapper-10';
          dayElement.textContent = day;
          calendarGrid.appendChild(dayElement);
      });

      // 빈 날짜 채우기
      for(let i = 0; i < firstDay.getDay(); i++) {
          const emptyDay = document.createElement('div');
          emptyDay.className = 'text-wrapper-9';
          calendarGrid.appendChild(emptyDay);
      }

      // 실제 날짜 채우기
      for(let day = 1; day <= lastDay.getDate(); day++) {
          const dayElement = document.createElement('div');
          dayElement.className = 'text-wrapper-8';
          dayElement.textContent = day;

          // 오늘 날짜 스타일
          const today = new Date();
          if(date.getMonth() === today.getMonth() && 
             day === today.getDate() && 
             date.getFullYear() === today.getFullYear()) {
              dayElement.classList.add('frame-9');
          }

          // 날짜 선택 이벤트
          dayElement.addEventListener('click', () => {
              document.querySelectorAll('.text-wrapper-8').forEach(d => 
                  d.classList.remove('frame-9'));
              dayElement.classList.add('frame-9');
              selectedDate = new Date(date.getFullYear(), date.getMonth(), day);
              document.querySelector('.text-wrapper').textContent = 
                  `${date.getMonth() + 1}월 ${day}일 ${['일','월','화','수','목','금','토'][selectedDate.getDay()]}요일`;
              renderTasks();
          });

          calendarGrid.appendChild(dayElement);
      }
  }

  // 할 일 렌더링 함수
  function renderTasks() {
      const todoList = document.querySelector('.to-do');
      const doneList = document.querySelector('.frame-12');
      
      todoList.innerHTML = '';
      doneList.innerHTML = '';

      // 선택한 날짜 필터링
      const filteredTasks = tasks.filter(task => 
          new Date(task.date).toDateString() === selectedDate.toDateString());

      if(filteredTasks.length === 0) {
          todoList.innerHTML = '<div class="to-do-abled"><div class="text-wrapper-13">할 일을 등록해 주세요.</div></div>';
          doneList.innerHTML = '<div class="to-do-abled"><div class="text-wrapper-13">할 일을 완료해 주세요.</div></div>';
          return;
      }

      filteredTasks.forEach(task => {
          const taskElement = document.createElement('div');
          taskElement.className = `to-do-abled ${task.done ? 'frame-10' : ''}`;
          taskElement.innerHTML = `
              <div class="icon">
                  <div class="rectangle ${task.done ? 'text-wrapper-11' : ''}"></div>
              </div>
              <div class="text">
                  <div class="text-wrapper-13">${task.text}</div>
              </div>
              <div class="icon-lucide-icon-2">×</div>
          `;

          // 체크박스 토글
          taskElement.querySelector('.rectangle').addEventListener('click', () => {
              task.done = !task.done;
              taskElement.classList.toggle('frame-10');
              taskElement.querySelector('.rectangle').classList.toggle('text-wrapper-11');
              saveTasks();
              renderTasks();
          });

          // 삭제 버튼
          taskElement.querySelector('.icon-lucide-icon-2').addEventListener('click', () => {
              tasks = tasks.filter(t => t !== task);
              saveTasks();
              renderTasks();
          });

          task.done ? doneList.appendChild(taskElement) : todoList.appendChild(taskElement);
      });
  }

  // 데이터 저장
  function saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(tasks));
      localStorage.setItem('memo', memoContent);
  }

  // 메모 기능
  const memoInput = document.querySelector('.frame-3 .p');
  memoInput.textContent = memoContent;
  memoInput.addEventListener('input', function() {
      memoContent = this.textContent;
      saveTasks();
  });

  // 작업 추가
  document.querySelector('.frame-4').addEventListener('click', () => {
      const input = document.querySelector('.frame-7 .text-wrapper-7');
      if(input.textContent.trim().length > 0 && input.textContent.length <= 20) {
          tasks.push({
              text: input.textContent.trim(),
              date: selectedDate.toISOString(),
              done: false
          });
          input.textContent = '';
          saveTasks();
          renderTasks();
      }
  });

  // 월 변경 버튼
  document.querySelector('.img-wrapper').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      generateCalendar(currentDate);
  });

  document.querySelector('.frame-4').addEventListener('click', () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      generateCalendar(currentDate);
  });

  // 초기화
  generateCalendar(currentDate);
  renderTasks();
  document.querySelector('.text-wrapper').textContent = 
      `${currentDate.getMonth() + 1}월 ${currentDate.getDate()}일 ${['일','월','화','수','목','금','토'][currentDate.getDay()]}요일`;
});
