const value = "two";

switch (value) {
  case "one":
    console.log("hello one");
    break;

  case "two":
    console.log("hello two");
    break;

  case "three":
    console.log("hello three");
    break;

  default:
    console.log("hello default");
    break;
}

/* break를 안 넣었을 때는 뒷 부분까지 다 출력하는 대참사 발생 */

const value2 = "two";

switch (value2) {
  case "one":
    console.log("hello one");

  case "two":
    console.log("hello two");

  case "three":
    console.log("hello three");

  default:
    console.log("hello default");
}

switch (new Date().getDay) {
  case 0:
    console.log("일요일");
    break;

  case 1:
    console.log("월요일");
    break;

  case 2:
    console.log("화요일");
    break;

  case 3:
    console.log("수요일");
    break;

  case 4:
    console.log("목요일");
    break;

  case 5:
    console.log("금요일");
    break;

  case 6:
    break;
    console.log("토요일");
}

/* 다른 언어에서 switch문을 사용하는 방법 */

const 요일 = new Date().getDay();
const 요일객체 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

// default 처리하는 방법

// 널리쉬 연산자 사용
console.log(요일객체[요일] ?? "hello");
// 단락평가 사용
console.log(요일객체[요일] || "hello");
