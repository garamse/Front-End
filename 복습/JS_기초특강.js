// document가 DOM이다.
// ES6 자바스크립트
// document.querySelector로 값 가져오기
// innerHTML로 가져온 값 변경하기
// 변수란 숫자 또는 문자열과 같은 값의 컨테이너이다.
// var 선언은 전역 범위 혹은 함수 범위로 지정됨 전역범위는 마트, 함수범위는 우리집
// let의 선언은 해당 블록 내에서만 사용 가능하다.
// prompt는 입력창

// 로또 번호 바꾸기 (하나만)
const ball1 = document.querySelector(".ball.type1");
// document.querySelector(".ball.type1")로 가져오기
ball1.innerHTML;
ball1.innerHTML = 5; // 5로 변경

// 로또 노드 리스트 전체 중 인덱스 값을 이용해 변경하기
const balls = document.querySelector(".ball");
balls[5];
balls[5].innerHTML = 7;

// 반복문을 사용해서 로또 번호 모두 바꾸기
// 리스트의 각 노드는 0부터 시작하는 인덱스를 이용하여 접근할 수 있다.
let myArray = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < balls.length; i++) {
  let item = balls[i];
  item.innerHTML = myArray[i];
}

// prompt를 사용해서 로또 번호 모두 바꾸기
for (let i = 0; i < balls.length; i++) {
  let item = balls[i];
  item.innerHTML = prompt(i + "번 번호를 입력해주세요");
}

// 로또 번호를 눌렀을 때 입력창이 나오게 하고 하나씩 입력해서 바꾸기
balls[0].onclick = function () {
  let num = prompt("번호를 입력해주세요");
  alert(num + "번호가 입력되었습니다!");
  balls[0].innerHTML = num;
};

// 반복문(let) 사용해서 입력창으로 다 바꾸기
const balls = document.querySelectorAll(".ball");
for (let i = 0; i < balls.length; i++) {
  balls[i].onclick = function () {
    let num = prompt("번호를 입력해주세요");
    alert(num + "번호가 입력되었습니다!");
    balls[i].innerHTML = num;
  };
}

// 첫번째 실행
const balls = document.querySelectorAll(".ball");
for (let i = 0; i < balls.length; i++) {
  balls[0].onclick = function () {
    let num = prompt("번호를 입력해주세요");
    alert(num + "번호가 입력되었습니다!");
    console.log(balls[0],0) 
    balls[0].innerHTML = num;
  };
}

// 두번째 실행
const balls = document.querySelectorAll(".ball");
for (let i = 0; i < balls.length; i++) {
  balls[1].onclick = function () {
    let num = prompt("번호를 입력해주세요");
    alert(num + "번호가 입력되었습니다!");
    console.log(balls[1],1) // 이때 i = 1
    balls[1].innerHTML = num;
  };
}

// var로 반복문으로 만들었을 때 마지막 i가 들어가게 된다. 그러므로 balls length인 7만 나오게 됨
const balls = document.querySelectorAll(".ball");
for (var i = 0; i < balls.length; i++) {
  balls[i].onclick = function () {
    let num = prompt("번호를 입력해주세요");
    alert(num + "번호가 입력되었습니다!");
    console.log(balls[i],i) 
    balls[i].innerHTML = num;
  };
}

// var와 let의 차이

if(true) {
  var d = 1;
}

d // 1 출력

if(true) {
  let e = 1;
  e; // 1 출력
}

e // undefined



/////////////////////////////////

// balls라는 변수를 만든다.
// documet(문서)에서 "ball"이라는 클래스를 검색하는 명령어를 통해(".ball")
// document.querySelectorAll 이걸 사용함 
// 이거의뜻은 문서에서 명령에맞게 모든걸 가져와라.
const balls = document.querySelectorAll(".ball")

// 반복할거임.
// balls.length 만큼(일단 모르는데 검색해서 나온것의 길이 또는 개수);
// 
{
    // 이게뭐임?
    // 이걸 우리는 코드블록이라고함
}
// for ()<< 이 괄호안에있는거 뭐임..?
// let i = 0; for반복문 하는동안 사용할 변수
// i < balls.length 이거는 비교를 해서 맞는지 아닌지 검사하는거
// 맨 뒤에있는 i++ 이거는 "코드블럭"이 실행되고 할 행동.
for (let i = 0; i < balls.length; i++) {
    // 0일때
    // balls에 0번째있는 값을 가져온다.
        // balls 0번째에는 뭐가있음?
        // 우리가 쿼리셀렉터ALL해서 가져온것중 0번째것 
        //이걸 balls[0]이라고 부름
    //  balls[0]에 onclick을 설정한다.
    // onlick이라는 행동이 브라우저에서 일어나면 설정한 함수가 실행됨
    balls[i].onclick = function () {
        // 설정할 함수내용들 (실행할 코드블럭)

        // prompt라는 함수를 실행함.
        // prompt는 입력창이있는 프롬프트를 보여주고
        // 입력하고 확인을 누르면 그 입력한 값을 돌려준다(return해준다.)
        // 이 프롬프트를 통해 받은값을 num에 넣게된다.
        let num = prompt('번호를 입력해주세요'); 

        // 이녀석은 뭐임?
        // 알림. 입력한 값을 "num"이라는 거에 저장했다.
        // 그 저장된 값을 가져와서 알려줌.
        alert(num + '번호가 입력되었습니다!');
        // 브라우저의 콘솔에 뭔가 보여주는 행위

        // balls[i]번째(지금은 0번째) 값을 보여주고,
        // 현재 몇번째인지 보여준다.
        console.log(balls[i],i)

        //balls 0번째 있는 요소에 안에 html을 바꿔준다.
        // 뭘로? -> 저장한(프롬프트에서 입력한걸) 값으로
        balls[i].innerHTML = num;
    }
}



