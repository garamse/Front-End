let x = 5;
let y = 10;

console.log(x > y); // false

// true, false 값을 and, or 연산했을 경우 반환값은 true, false
let a = true;
let b = false;

console.log(a && b); // false

// true, false가 아닌 값을 and, or연산 했을 경우 단락회로평가를 하게 된다.
let a2 = "hello";
let b2 = "";

console.log(a2 && b2); // 빈문자열 출력 (뒤까지 봤기 때문에)

// 별표 4개 (암기)

console.log(Boolean("hello")); // 문자열이 뭐라도 있으면 t
console.log(Boolean("")); // f
console.log(Boolean([1, 2, 3])); // t
console.log(Boolean([])); // 말도 안되게 t
console.log(Boolean({ one: 10, two: 20 })); // t
console.log(Boolean({})); // 말도 안되게 t
console.log(Boolean(0)); // f
console.log(Boolean(-1)); // 0 이외는 t
console.log(Boolean(undefined)); // f
console.log(Boolean(null)); // f
console.log(Boolean(NaN)); // f

if (undefined) {
  console.log("hello");
}

let aa;
if (aa) {
  console.log("hello");
}

let aaa;
if (aaa > 100) {
  console.log("hello");
}
