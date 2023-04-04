const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (el) {
  return el % 2 === 0;
});

function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}
// 메서드 체이닝

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.filter(function (el) {
  return el % 2 !== 0; // 홀수
});

Array.from("hello world").filter((v) => !["a", "e", "i", "o", "u"].includes(v)); // from으로 'h', 'e', ...단어 하나하나씩 뽑은 뒤 filter로 모음 제거

// reduce
const arr2 = [1, 2, 3, 4, 5];
arr.reduce((a, c) => a + c, 0); // 0을 항상 넣어주세요! < 이 코드 외우기>

// includes
const arr3 = ["hello", "world", "hojun"];
arr3.includes("world"); // 'world'가 포함되어 있느냐

// join
const arr4 = ['hello', 'world', 'hojun']
arr4.join('!') // 'hello!world!hojun' 

const arr5 = [hello, world, hojun] // error
arr5.join('-') 

// 0b100 b는 바이너리의 첫글자
// 0o100 o는 옥타의 첫글자
// 0x100 x는 헥사 표현

