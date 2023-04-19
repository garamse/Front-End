// 객체지향 프로그래밍
// 프로그램을 작성할 때 객체들을 만들어 서로 소통하도록하는 방법
const garam = {
  name: "kimgaram",
  age: "24",
  birthday: "5월18일",
  frontendlevel: function (lanlevel) {
    lanlevel.levelUp();
  },
};

const lanlevel = {
  jslevel: 1,
  htmllevel: 1,
  csslevel: 1,
  levelUp: function () {
    this.jslevel++;
    this.htmllevel++;
    this.csslevel++;
  },
};

garam.frontendlevel(lanlevel); // 호출할때마다 level이 1씩 올라간다.

// 사용자 정의 타입

function NewFactory(name) {
  this.name = name;
  this.sayYourName = function () {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  };
}

// robot은 인스턴스, new 생성자 함수
const robot = new NewFactory("가람");

// 새로운 인스턴스
const robot2 = new NewFactory("가람2");

// 실습

function FoodPicker(foodNames) {
  this.name = foodNames;
  this.sayMenu = function () {
    console.log(
      `삐리리리리 오늘의 메뉴는 ${
        this.name[Math.floor(Math.random() * this.name.length)]
      } 입니다.`
    );
  };
}

const robot1 = new FoodPicker([
  "마라탕",
  "짜장면",
  "떡볶이",
  "타코야끼",
  "순두부찌개",
  "죽",
]);


// 프로토타입으로 분리
// 100개의 객체를 생성할 때마다 100개의 함수를 만들게 되니 자원낭비, 이것을 해결하기 위해 프로토타입 등장!

function FoodPicker(foodNames) {
    this.name = foodNames;
  }
  
  FoodPicker.prototype.sayMenu = function () {
    console.log(
      `삐리리리리 오늘의 메뉴는 ${
        this.name[Math.floor(Math.random() * this.name.length)]
      } 입니다.`
    );
  };
  


  function Garam(name, age, birthday) {
    this.name = name;
    this.age = age;
    this.birthday = birthday;
  }
  
  Garam.prototype.frontendlevel = function (lanlevel) {
    lanlevel.levelUp();
  };
  
  function Lanlevel(jslevel, htmllevel, csslevel) {
    this.jslevel = jslevel;
    this.htmllevel = htmllevel;
    this.csslevel = csslevel;
  }
  
  Lanlevel.prototype.levelUp = function () {
    this.jslevel++;
    this.htmllevel++;
    this.csslevel++;
  };
  
  // class 문법

  class Garam {
    constructor(name, age, birthday) {
      this.name = name;
      this.age = age;
      this.birthday = birthday;
    }
  
    frontendlevel(lanlevel) {
      lanlevel.levelUp();
    }
  }
  
  class Lanlevel {
    constructor(jslevel, htmllevel, csslevel) {
      this.jslevel = jslevel;
      this.htmllevel = htmllevel;
      this.csslevel = csslevel;
    }
  
    levelUp() {
      this.jslevel++;
      this.htmllevel++;
      this.csslevel++;
    }
  }
  
  