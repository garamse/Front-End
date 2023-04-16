// document가 DOM이다.
// ES6 자바스크립트
// document.querySelector로 값 가져오기
// innerHTML로 가져온 값 변경하기
// 변수란 숫자 또는 문자열과 같은 값의 컨테이너이다.
// var 선언은 전역 범위 혹은 함수 범위로 지정됨 전역범위는 마트, 함수범위는 우리집
// let의 선언은 해당 블록 내에서만 사용 가능하다.
// prompt는 입력창

// 로또 번호 바꾸기 (하나만)
const ball1 = document.querySelector(".ball.type1");
// document.querySelector(".ball.type1")로 가져오기
ball1.innerHTML;
ball1.innerHTML = 5; // 5로 변경

// 로또 노드 리스트 전체 중 인덱스 값을 이용해 변경하기
const balls = document.querySelector(".ball");
balls[5];
balls[5].innerHTML = 7;

// 반복문을 사용해서 로또 번호 모두 바꾸기
// 리스트의 각 노드는 0부터 시작하는 인덱스를 이용하여 접근할 수 있다.
let myArray = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < balls.length; i++) {
  let item = balls[i];
  item.innerHTML = myArray[i];
}

// prompt를 사용해서 로또 번호 모두 바꾸기
for (let i = 0; i < balls.length; i++) {
  let item = balls[i];
  item.innerHTML = prompt(i + "번 번호를 입력해주세요");
}

// 로또 번호를 눌렀을 때 입력창이 나오게 하고 하나씩 입력해서 바꾸기
balls[0].onclick = function () {
  let num = prompt("번호를 입력해주세요");
  alert(num + "번호가 입력되었습니다!");
  balls[0].innerHTML = num;
};

// 반복문(let) 사용해서 입력창으로 다 바꾸기
const balls = document.querySelectorAll(".ball");
for (let i = 0; i < balls.length; i++) {
  balls[i].onclick = function () {
    let num = prompt("번호를 입력해주세요");
    alert(num + "번호가 입력되었습니다!");
    balls[i].innerHTML = num;
  };
}

// 첫번째 실행
const balls = document.querySelectorAll(".ball");
for (let i = 0; i < balls.length; i++) {
  balls[0].onclick = function () {
    let num = prompt("번호를 입력해주세요");
    alert(num + "번호가 입력되었습니다!");
    console.log(balls[0],0) 
    balls[0].innerHTML = num;
  };
}

// 두번째 실행
const balls = document.querySelectorAll(".ball");
for (let i = 0; i < balls.length; i++) {
  balls[1].onclick = function () {
    let num = prompt("번호를 입력해주세요");
    alert(num + "번호가 입력되었습니다!");
    console.log(balls[1],1) // 이때 i = 1
    balls[1].innerHTML = num;
  };
}

// var로 반복문으로 만들었을 때 마지막 i가 들어가게 된다. 그러므로 balls length인 7만 나오게 됨
const balls = document.querySelectorAll(".ball");
for (var i = 0; i < balls.length; i++) {
  balls[i].onclick = function () {
    let num = prompt("번호를 입력해주세요");
    alert(num + "번호가 입력되었습니다!");
    console.log(balls[i],i) 
    balls[i].innerHTML = num;
  };
}

// var와 let의 차이

if(true) {
  var d = 1;
}

d // 1 출력

if(true) {
  let e = 1;
  e; // 1 출력
}

e // undefined



