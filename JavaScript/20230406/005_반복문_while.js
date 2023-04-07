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

// do while문은 꼭 한번은 반복함.

let input;

do {    
  input = confirm("다음에도 저희와 함께 하시겠습니까?");
} while (!input);

console.log("감사합니다.");
*/

// 암기코드 1 (구구단)
// for문
let a = 2;
while(a < 10) {
    let b = 1;      // 꼭 여기서 b를 초기화를 시켜줘야 3,4,5,6,7,8,9단까지 출력할 수 있음.
    while(b < 10) {
        console.log(`${a} * ${b} = ${a * b}`);
        b++;
    }
    a++;
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
  result1 = t[count] + result;
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


