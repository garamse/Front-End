// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    const result = [];
    for (let item of numbers) {
         result.push(item * 2)
    }
    return result;
}

// 다른사람 풀이 map 이용

function solution(numbers) {
    const results = [];

    numbers.map((item) => {
        results.push(item*2);
    })

    return results;
}