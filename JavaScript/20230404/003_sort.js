const avengers = ['아이언맨', '스파이더맨', '헐크', '토르'];
console.log(avengers.sort());

// 사전식 정렬

const num1 = [3, 1, 8, 6];
console.log(num1.sort()); // 1,3,6,8

const num2 = [3, 1, 11, 8, 6];
console.log(num2.sort()); // 1,11,3,6,8 error

const num3 = [3, 1, 11, 8, 6];
console.log(num3.sort((a, b) => a - b)); // 오름차순 정리

console.log(num3.sort((a, b) => b- a)); // 내림차순 정리