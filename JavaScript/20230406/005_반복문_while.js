let x = 0;
while (x < 10) {
  console.log(x);
  x += 1;
}

///////// do while (잘 안씀)

/*let input;

do {
  input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

let input;

do {
  input = confirm("다음에도 저희와 함께 하시겠습니까?");
} while (!input);

console.log("감사합니다.");
*/

// 암기코드 1 (구구단)
// for문
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < array.length; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// while문
let i = 2;
while (i < 10) {
  let j = 1;
  while (j < 10) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 암기 코드 2 (문자열 뒤집기)

let s = "hello world";
let result = "";
for (let i = 0; i < s.length; i++) {
  result = s[i] + result;
}

let t = "hello world";
let result1 = "";
let count = 0;

while (count < t.length) {
  result1 = s[count] + result;
  count++;
}
console.log(result);

// 암기 코드3 ( 팩토리얼!)

let y = 1;
for (let i = 1; i < 6; i++) {
  y *= i;
}
console.log(y);

let z = 1;
i = 1;
while (i < 6) {
  z *= i;
  i += 1;
}
console.log(z);


