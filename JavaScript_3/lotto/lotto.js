//ppt 화면의 코드를 따라 치고, 빈칸을 채워주세요!
let numbers = [];

while (numbers.length < 6) {
    let randNum = parseInt(Math.random()*45+1);

    if (numbers.indexOf(randNum) == -1) {
        numbers.push(randNum);
    }
}

console.log(numbers);

numbers.sort((a, b) => a -b);

for (let i = 0; i < 6; i++) {
    document.getElementById(`ball${i+1}`).innerHTML = numbers[i];
}