// UTC와 today의 지정 로캘(locale) KST와의 차이는 -9시간이다.
// 쉬운 말로 협정 세계시(Universal Time Coordinated)와 내 컴퓨터 시간 차가 -9시간
// https://ko.wikipedia.org/wiki/%ED%98%91%EC%A0%95_%EC%84%B8%EA%B3%84%EC%8B%9C
// locale 을 활용하면 언어권에 맞게 입력과 출력을 수정하지 않고도 사용하는 언어권에 맞는 날짜를 처리할 수 있습니다.
//UTC와 현재 로케일(호스트 시스템, today의 지정 로캘 KST(Korea Standard Time))의 차이는 -9시간이다.
today.getTimezoneOffset() / 60;

today.toString(); // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)

today = new Date("2023/1/20/10:00:00");
today.toString();

// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
// 국제표준시 기준 형식으로 표현
today.toISOString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, "");

// 날짜를 언어별로 구분하여 나타내는 문자열을 반환
//http://www.w3bai.com/ko/tags/ref_language_codes.html#gsc.tab=0
//http://www.w3bai.com/ko/tags/ref_country_codes.html#gsc.tab=0
today.toLocaleString("ko-KR"); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString("en-US"); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString("ja-JP"); // -> 2020/7/24 12:30:00

const dayNames = [
  "(일요일)",
  "(월요일)",
  "(화요일)",
  "(수요일)",
  "(목요일)",
  "(금요일)",
  "(토요일)",
];
// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? "PM" : "AM";

// 두 날짜의 차를 계산합니다.
function daysBetween(date1, date2) {
  // 밀리초 단위로 두 날짜의 차이를 계산합니다.
  const diff = Math.abs(date1.getTime() - date2.getTime());
  // 1일은 24시간 * 60분 * 60초 * 1000밀리초입니다.
  const oneDay = 24 * 60 * 60 * 1000;
  // 차이를 1일 밀리초로 나눕니다.
  return Math.floor(diff / oneDay);
}

// 예시
const date1 = new Date("2021-01-01");
const date2 = new Date("2021-01-05");
console.log(daysBetween(date1, date2)); // 4
