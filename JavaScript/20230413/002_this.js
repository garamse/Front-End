// this(***) 자신을 호출한 객체

function a() {
  console.log(this);
}
a(); // this : window를 호출

let myObj1 = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

myObj1.func1(); // this : myObj를 호출

///////////////////

let myObj1 = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};

let test = myObj1.func1();
test(); // this : window로 바뀜

// this를 포함하고 있는 객체가 있는 위치에 따라 this의 의미가 달라진다.

function sayName() {
  console.log(this);
}

var c = {
  hello: "world",
  say: sayName,
};

var b = {
  // var b = {c}와 동일일
  c: c,
};

var a = {
  b: b,
};

c.sayName(); // this : c

a.b.c.sayName(); // this : c

/// 추가예제 ///

var name = "garam";

function sayName() {
  console.log(this.name);
}

sayName(); // garam

let peter = {
  name: "Peter Parker",
  say: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  say: sayName,
};

peter.say(); // Peter Parker
bruce.say(); // Bruce Wayne

////

function attackBeam() {
  // 레이저 공격
  this.hp -= 20;
}

function attackKnife() {
  // 칼 공격
  this.hp -= 5;
}

let jombi = {
  name: "jombi",
  damaged1: attackBeam,
  damaged2: attackKnife,
  hp: 10000,
  power: 2,
};

let thanos = {
  name: "thanos",
  damaged: attackBeam,
  hp: 1000,
  power: 100,
};

jombi.damaged1(); // Beam 어택
jombi.damaged2(); // knife 어택

////

function a() {
  console.log(this);
  function b() {
    console.log(this);
    function c() {
      console.log(this);
    }
    c();
  }
  b();
}
a();
// a,b,c 모두 window

//// this 사용 예시

let 호텔 = [
  {
    이름: "하나호텔",
    위치: "제주도 제주시 001",
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "둘호텔",
    위치: "제주도 제주시 002",
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "셋호텔",
    위치: "제주도 제주시 003",
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());
