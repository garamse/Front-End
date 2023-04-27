 //정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.
 
 
 // .sort()만 사용시 - ASCII 문자 순서로 정렬되어 숫자의 크기대로 정렬되지 않는다.
 // .sort()는 원본 배열을 바꾼다.
 
 function solution(numbers) {
    const arr = numbers;
    arr.sort((a,b) => b-a)  // 내림차순
    return arr[0] * arr[1]
}


