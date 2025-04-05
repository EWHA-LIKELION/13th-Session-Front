let numbers = [];

while (numbers.length < 6) {
  let randNum = parseInt(Math.random() * 45 + 1);
  // parseint는 버림을 하는 함수고 random은 난수생성이라 0-1 수를 생성함

  if (numbers.indexOf(randNum) == -1) {
    numbers.push(randNum);
  }
}

console.log(numbers);

numbers.sort((a, b) => a - b);

for (let i = 0; i < 6; i++) {
  document.getElementById(`ball${i + 1}`).innerHTML = numbers[i];
}
