const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

const text = "";

`
<section>
<h2>BMW</h2>
</section>
<section>
<h2>Volvo</h2>
</section>
...
`

text += '<section><h2>' + cars[0] + '</h2></section>'
text += '<section><h2>' + cars[1] + '</h2></section>'
text += '<section><h2>' + cars[2] + '</h2></section>'
text += '<section><h2>' + cars[3] + '</h2></section>'
text += '<section><h2>' + cars[4] + '</h2></section>'

console.log(text)

// 반복문으로 바꾸기
const cars2 = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

let text2 = "";
for (let i = 0; i < cars2.length; i++) {
    text2 += '<section><h2>' + cars2[i] + '</h2></section>'
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i) i는 반복문이 끝난 다음 호출할 수 없다.

for (let i = 0; i < 10; i+=2) { // i+=2 2씩 증가하여 짝수만 출력 
    console.log(i);
}

for (i = 0; i < 10; i+=2) { // let i를 생략하면 i가 전역으로 생성이 된다.
    console.log(i);
}

for(;;) { // 무한 반복 코드 (이런코드 작성 금지), 메모리를 많이 잡아먹기 때문에
          // 반복의 시간을 가능하면 정해줘라
          // 탈출 조건을 명확히 해라
    console.log('실행하지 마세요')
}

