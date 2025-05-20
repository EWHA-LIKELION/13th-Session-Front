let numbers = [];

// 로또 번호 6개를 모두 뽑으면 while문이 종료되는 조건문 작성하기
while (numbers.length < 6) {
  let randNum = parseInt(Math.random() * 45 + 1);

  // numbers 배열에 새로 뽑은 로또 번호가 존재하지 않는다는 조건문 작성하기 (중복 제거)
  if (numbers.indexOf("randNum") == -1) {
    // numbers 배열에 뽑은 로또 번호 추가하기
    numbers.push(randNum);
  }
}

console.log(numbers);

// 오름차순 정렬하기
numbers.sort((a, b) => a - b);

for (let i = 0; i < 6; i++) {
  document.getElementById(`ball${i + 1}`).innerHTML = numbers[i];
}
