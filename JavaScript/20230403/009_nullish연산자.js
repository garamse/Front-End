// 구식 브라우저는 폴리필 필요(최신 문법을 구식 브라우저에서도 사용할 수 있도록 해주는것)
let firstName = null;
let lastName = null;
let nickName = "licat";

console.log(firstName ?? nickName);
console.log(firstName ?? lastName ?? nickName);
console.log(firstName ?? lastName ?? nickName ?? "익명 사용자");

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c); // null이면 다음 값으로 넘김 10 출력

// 단락회로 평가와 차이점

// height가 없으면 100을 출력하게 만들고싶다.

let height = 0;
console.log(height || 100); // 100 출력

// null 아니기 때문에 0출력
console.log(height ?? 100); // 0 출력


//undefined
let height2;
console.log(height2 || 100);
console.log(height2 ?? 100);

// null

let height3 = "";
console.log(height3 || "hello");
console.log(height3 ?? "world");

// || : 0 ,null, undefined
// ?? : null, undefined
