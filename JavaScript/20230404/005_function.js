/* 1. 재사용성이 높아진다.
   2. 유지보수가 용이
   3. 구조 파악이 용이
   */

// 함수의 일반적인 형태 == 함수 선언문
function one(a, b) {
  let z = a + b;
  return z ** 2;
}
// (a, b) 파라미터
// (7, 3) 아규먼트
console.log(one(7, 3));

// 화살표 함수 형태
const two = (a, b) => (a + b) ** 2;
console.log(one(7, 3));

// 이름 없이 선언하는 함수 == 함수 표현식
const three = function (a, b) {
  let z = a + b;
  return z ** 2;
};
console.log(three(7, 3));

// 콜백 함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function four(a, b, c) {
  let z = c(a, b) + c(a, b);
  return z * 2;
}

four(7, 3, one);

// 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics

function hello(para) {
  console.log(para);
  console.log("hello");
  return 100;
}

console.log(hello(10)); // 100 출력

let x = console.log("hello");
x; // undefined , return 값이 없어서

// 메서드 (클래스 안에서 사용되는 함수)
// .을 찍어 접근할 수 있는 함수 => 메서드

// 함수를 호출 할 수 있는 이름은 결국 변수이다.

// (아래 3개는 같은 코드)
function hello1() {
  console.log("hello");
}

function hello2() {
  console.log("hello");
  return;
}

function hello3() {
  console.log("hello");
  return undefined;
}

// return문을 만나면 중간에 종료

function hello4() {
  console.log("hello");
  console.log("hello");
  console.log("hello");
  return;
  console.log("hello");
  console.log("hello");
  console.log("hello");
}

hello4();
// hello 세번만 출력

function hello5() {
  if (true) {
    if (false) {
      if (true) {
        return;
      }
    }
  }
  console.log("hello");
}

// return을 하더라도 1회 반복만 종료되는 것이지 전체 반복이 종료가 아니다.
const x1 = [10, 20, 30, 40];
x.forEach((el) => {
  console.log(el);
  return;
  console.log("world");
});

/////////////////////

function 함수1(a, b, c) {
  return a + b + c;
}

함수1(10, 20, 30, 40); // error가 발생하지 않는다.
함수1(10, 20); // NaN 반환, error가 발생하지 않는다.

function 함수1(a = 10, b = 20, c = 30) {
  return a + b + c;
}
함수1(1, 1); // 함수1(a=1, b=1)로 들어감 32

// 아래와 같은 식별 이슈가 있을 경우 object로 넘깁니다. roro기법
function runPython(user, time, code, lv) {}
runPython("lee", 100, "function...", 3);

function runPython({ user, time, code, lv }) {}

runPython({
  user: "lee",
  time: 100,
  code: "function...",
  lv: 3,
});

// 기본값 설정
function runPython({ user = "", time = 0, code = "", lv = 0 }) {}

// <화살표 함수에 대한 다양한 예제 **** 중요>
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics

function 함수1(x, y) {
  return x + y;
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y;

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = (x) => x + 10;

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = (x) => x + 10;

let 결과 = 함수3(2);

console.log(결과);

// 즉시 실행 함수 (괄호로 감싸져있다.)

(function() {
  console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();


