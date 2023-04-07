for (let i = 0; i < 10; i++) {
  console.log(10);
}

let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 권장 IE에서 사용가능 (위와 같이 출력 결과가 나옴)
// for in

let arr1 = [10, 20, 30, 40, 50];
let obj1 = { one: 10, two: 20 };
for (const i in arr1) {
  console.log(arr1[i]); 
}

for (const i in obj1) {
  console.log(obj1[i]); 
}

// 100까지 더하기
let s = 1;
for (const i in ".".repeat(100)) {
  s += parseInt(i);
}
console.log(s);

// 권장이지만 IE에서 사용불가
// for of
let arr2 = [10, 20, 30, 40, 50];
let obj2 = { one: 10, two: 20 };

for (const item of arr2) {
  console.log(item); 
}

// 배열 안 요소 더하기
let s1 = 0;
for (const item of arr2) {
  s1 += item;
}

for (const item of obj2) {
  console.log(item); // of 뒤에 iterable한 값이 나와야 한다. (순회가능한 = 순서가있는)
}

for (const item of "hello world") {
  console.log(item); // 순서가 있으므로 h e l l o 하나하나 출력
}

// for in, for of문 안에서는 const를 쓸수있다.

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20];

for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(s[i + 1] - s[i]);
}

for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(s[i + 1] - s[i]);
}

for (let i = 1; i < s.length; i++) {
  console.log(s[i - 1], s[i]); // 마지막 값을 확인해보세요.
  console.log(s[i] - s[i - 1]);
}

// for of, for in (위보다 깔끔하진 않다.)
// for in에서 나오는 i 값은 문자열이다.

// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
];

// for of
let s = 0
for (const i of user) {
    s += i.age
}
console.log((s / user.length).toFixed(2))

// for in

let s = 0
for (const i in user) {
    s += user[i].age
}
console.log((s / user.length).toFixed(2))

// for문으로 풀기

let userage = 0;

for (let i = 0; i < user.length; i++) {
  userage += user[i]["age"];
}

console.log((userage / user.length).toFixed(2)); // 소수점 2자리까지

//심화
  let user2 = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    name: "Lamb Adams",
    gender: "male",
  },
];

let age2 = 0;

for (const i of user2) {
  age2 += i.age ?? 0;  // i에 age가 없으면(null, undefined...) 0 취급을 한뒤 age2에 넣겠다
}

console.log((age2 / user2.length).toFixed(2));



// 부정(!) 부정의부정(!!)
!true // false
!false // true
!!10 // true
!!1 // true
!!0 // false 0이외의 숫자는 true
!!'hello' // true
!! NaN // false
!! undefined // false
!! null // false

// 외우기 //

user
    .map(v => v.age)
    .filter(v => !!v)
    .reduce((a, b) => a + b ,0) // v가 값이 있는 것만 더해줄것이다.
