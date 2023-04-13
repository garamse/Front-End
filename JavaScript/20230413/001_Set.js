// 집합, 합집합, 교집합, 차집합, 여집합을 가능하게 하는 Set

let s = new Set('aabbbcccdd')  // 중복을 제거한다. {'a', 'b', 'c', 'd'}
s.size; // 4

회사게시판 = ['이호준','이호준','이호준','이호준','이호준','이호준','이호준','이호준','김연하','최흥석','이나영']

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
let 게시자 = new Set(회사게시판);
게시자.size;
// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
// 풀이 1.
for (const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e===i).length) 
}

// 풀이 2.

let map = new Map()
for (const i of 회사게시판) {
    map.set(i, (map.get(i) || 0) + 1);
}

/// set 연습 ///

let a = new Set('aabbbccccdd');
a.size // 4
a.has('a') // true
a.has('f') // false
a.add('z') // {'a','b','c','d','z'}
a

for (const i of a) {
    console.log(i)
}

let b = new Set('aabbbccccdd'.split('')) // 배열로 만든다.

// 교집합
let x = new Set('abc')
let y = new Set('cde')
let cro = [...x].filter(e => b.has(e))  // 배열로 전개후 filter(배열은 filter를 쓸수있다.) 

// 합집합
let union = new Set([...x, ...y])

// 차집합
let dif = [...a].filter(e => !b.has(e))


/// 문제 ///

// 배열의 유사도

// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

// 교집합의 갯수를 구하는 문제

function solution(s1, s2) {
    s1 = new Set(s1)
    s2 = new Set(s2)
    let cro = [...s1].filter(e => s2.has(e))
    return cro.length;
} // 풀이 1

function solution(s1, s2) {
    return s1.length + s2.length - new Set([...s1, ...s2]).size;
} // 풀이 2



// 머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(order) {
    const mySet = new Set([3, 6, 9]);
    return String(order) // '29423' 
        .split("") // ['2', '9', '4', '2', '3']
        .filter((num) => mySet.has(parseInt(num))).length;
}
