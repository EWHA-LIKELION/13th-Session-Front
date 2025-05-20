const lionsA = [
  { name: "김수민", track: "기획디자인", deptNum: 98 },
  { name: "김지후", track: "기획디자인", deptNum: 44 },
  { name: "박서영", track: "기획디자인", deptNum: 31 },
  { name: "송나영", track: "기획디자인", deptNum: 22 },
  { name: "이도윤", track: "기획디자인", deptNum: 85 },
  { name: "이은서", track: "기획디자인", deptNum: 44 },
  { name: "김민혜", track: "프론트엔드", deptNum: 76 },
  { name: "김성주", track: "프론트엔드", deptNum: 71 },
  { name: "서예린", track: "프론트엔드", deptNum: 66 },
  { name: "유진서", track: "프론트엔드", deptNum: 76 },
  { name: "이예영", track: "프론트엔드", deptNum: 46 },
  { name: "최연서", track: "프론트엔드", deptNum: 23 },
];

const lionsB = [
  { name: "김가영", track: "백엔드", deptNum: 71 },
  { name: "김연우", track: "백엔드", deptNum: 73 },
  { name: "성혜린", track: "백엔드", deptNum: 71 },
  { name: "설영은", track: "백엔드", deptNum: 48 },
  { name: "신지민", track: "백엔드", deptNum: 66 },
  { name: "황규리", track: "백엔드", deptNum: 76 },
];

//문제 1) lions 배열에 lionsB 배열을 합치기 (스프레드 사용)
var lions = [...lionsA, ...lionsB];
console.log("문제1", lions);

//문제 2) 학번이 71인 아기사자의 name 정보만 담은 배열을 만들기
var lions71 = lions.filter((lion) => lion.deptNum === 71);
var lions71Name = lions71.map((lion) => lion.name);
console.log("문제2", lions71Name);

//문제 3) 프론트엔드 트랙의 아기사자의 명단을 구하고, deptNum 오름차순 정렬
var frontLion = lions.filter((lion) => lion.track === "프론트엔드");
frontLion.sort((a, b) => a.deptNum - b.deptNum);
console.log("문제3", frontLion);

//문제 4) 기획디자인 트랙의 아기사자의 명단을 구하고, deptNum 내림차순 정리
var designLion = lions.filter((lion) => lion.track === "기획디자인");
designLion.sort((a, b) => b.deptNum - a.deptNum);
console.log("문제4", designLion);
