// arr(*****)
const arr = [10, 20, 30];
arr[0] = 100; // const는 값의 변화가 안된다고 하지 않았나? mutable 변경가능
// arr = 100
// arr = [10, 20, 30]
console.log(arr);
console.dir(arr); // 프러퍼티와 메서를 볼 수 있습니다.

// 문자열(string)
const s = "hello world";
console.log(s[0]);
s[0] = "i"; // immutable 불변

// arr.1 // error
// 숫자로 들어간 값은 대괄호로 호출할 수 있고
// length는 문자입니다. 문자로 입력된 값은 .을찍어서 호출할 수 있습니다.
arr[1];
arr.length;
arr["length"];

// 두개가 같은 얘기입니다.
arr.length = 10;
arr[0] = 100;

// 프로퍼티를 추가하는 것도 가능합니다.
arr["leehojun"] = 100;
arr.hojun = 1000;

// 배열의 특징
// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);
// Array(100).fill(0)

// 1. 배열은 순서가 있습니다. 배열의 순서를 index, 이 순서로 호출하는 것을 indexing이라고 합니다. 배열 안에 값을 원소(elements)라고 합니다.
const arr = [10, 20, 30];
arr[0] = 100;

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있습니다.
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arr[0];
// [1, 2, 3]
arr[1];
// [4, 5, 6]
arr[2];
// [7, 8, 9]
arr[1][2];
// 6

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 메트릭스
const d = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
]; // 텐서(3차원 이상의 다차원)

// 그렇기에 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산입니다.

const arr = [1, 2, 3];
arr.push(4);

// push
const arr = [1, 2, 3];
arr.push(4);

const arr = [1, 2, 3, 4, 5];
arr.pop();
// 1. 마지막에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
// 5
arr;
// (4) [1, 2, 3, 4]

// pop
const arr = [1, 2, 3, 4, 5];
let lastValue = arr.pop();
arr;

// unshift
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
// myArray2.shift();
// console.log(myArray2);

let firstValue = myArray2.shift();
firstValue;
// 사과

/*pop 배열의 마지막 값을 꺼낸 뒤 그 값 반환
shift 배열의 앞에 값을 꺼낸 뒤 그 값 반환
unshift 배열의 맨 앞에 값을 추가
push 배열의 맨 뒤에 값을 추가*/

// arr.splice(start, deleteCount, items) -> 원본 배열이 바뀐다.
const arr = [1, 2, 3];
arr.splice(1, 0, 4); // arr에 1번째에 아무것도 삭제하지 않고 4를 넣겠다. [1, 4, 2, 3]

const arr = [1, 2, 3];
arr.splice(1, (0)[(10, 20, 30)]); // arr에 1번째에 아무것도 삭제하지 않고 [10, 20, 30]을 넣겠다.

// 대괄호를 빼고 <10,20,30>을 넣으려면 전개구문이나 대괄호 빼고 사용

const arr = [1, 2, 3];
arr.splice(1, 0, ...[10, 20, 30]);

const arr = [1, 2, 3];
arr.splice(1, 0, 10, 20, 30);

const arr = [10, 20, 30, 40, 50];
const x = [1, 2, 3];

// 만들고 싶은 값 [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]

arr.splice(1, 0, ...x);
arr.splice(6, 0, ...x);

const arr = [10, 20, 30, 40, 50];
arr.splice(2, 1, 5); // arr에 2번째에 1개를 삭제하고 5를 넣는다.
console.log(arr); // [10, 20, 5, 40, 50]

arr.splice(2, 2); // arr에 2번째에 값 2개를 삭제하고 삽입되는 값은 없다. [10, 20 ,50]

const arr = [10, 20, 30, 40, 50];
arr.splice(1);
arr;

// arr.slice(start, end) -> 원본 배열은 바뀌지 않는다.
const myArray = ["apple", "banana", "cherry", "durian", "elderberry"];
console.log(myArray.slice(1, 4)); // ['banana', 'cherry', 'durian']
console.log(myArray); // ['apple', 'banana', 'cherry', 'durian', 'elderberry']
myArray.slice(1);
myArray.slice(0, 100);


// arr.forEach(함수) : 요소를 하나씩 순회한다.
// 함수(callbackfn) : (value : number, index: number, array: number[])
// callback function
const arr = [10, 20, 30, 40, 50];
arr.forEach(function (item, index) {
  console.log(index, item);
});

// 0 10
// 1 20
// 2 30
// 3 40
// 4 50
const arr = Array(100).fill(0);
const arr2 = [];

// 같은 코드1 (이름이 없는 함수 사용)
arr.forEach(function (item, index) {
  arr2.push(index + 1);
});

// 같은 코드2 (화살표 함수)
arr.forEach((item, index) => {
  arr2.push(index + 1);
});

// 같은 코드3(한줄 짜리 코드 중괄호 생략, 실무 사용)
arr.forEach((item, index) => arr2.push(index + 1));

const avengers = ["spiderman", "ironman", "hulk", "thor"];

const newAvengers = [];
avengers.forEach(function (item) {
  newAvengers.push("💖" + item + "💖");
});
console.log(newAvengers);

// map : 데이터를 뽑으려고 많이 사용한다. 또한 map은 forEach와 다르게 새로운 배열을 생성
const arr = [1, 2, 3];
arr.map(function (x) {
  return x ** 2;
});

const arr = Array(100).fill(0);

// 같은 코드 1
arr.map((v, i) => i);

// 같은 코드 2
arr.map(function (v, i) {
  return i;
});

// 같은 코드 3
function hojun(v, i) {
  return i;
}
arr.map(hojun);

// 같은 코드 4
arr.map((v, i) => {
  return i;
});
