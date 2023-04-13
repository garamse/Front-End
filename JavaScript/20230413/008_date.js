
let d = new Date();

d.getDate(); // 1부터 시작합니다. 날짜를 출력합니다.
d.getMonth(); // 0월부터 시작합니다. +1을 해야 합니다.
d.getDay(); // 0부터 시작합니다. 0은 일요일입니다.

switch (d.getDay()) {
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
    console.log("토요일");
    break;
  default:
    console.log("날짜의 양식이 잘못되었습니다.");
    break;
}

d.getHours();
d.getMinutes();
d.getSeconds();

d.getFullYear();
// d.getYear() // 1900년도부터 연도 계산, 쓰지 않습니다. 잊어버리세요.

// new Date(2023, 6, 30)
new Date(2023, 5, 30); // 6월을 표시하기 위해서는 -1을 해야 합니다. 월은 0부터 시작합니다.

new Date(2023, 5, 30, 18);

// 다음처럼 표현하면 가독성이 훨씬 좋다. 여기에서 문제가 발생! 왜 1이(2월) 아닌가??
new Date("2023/1/20/10:00:00");

today = new Date(); // today의 지정 로캘은 KST다.
