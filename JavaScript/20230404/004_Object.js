const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
    console.log("hello world!");
  },
  0: "123456789",
};

console.log(human.name);
console.log(humnan.age);
console.log(human["name"]);
console.log(human["age"]);

// human.0을 하면 error남 그래서 arr.1 안됨
human["0"]; // '123456789'
human[0]; // '123456789'

human.name = "jun";
human.name; // 'jun'
human.askingHim(); // 'hello world!'
delete human.job; // 삭제

// 다른 언어와 동작 방식이 다릅니다.
console.log("age" in human); // true
console.log(20 in [10, 20, 30]); // false

const aespa = {
    members: ['카리나', '윈터', '지젤', '닝닝'],
    from: '광야',
    sing: function(){
        return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
    }
};

console.log(aespa.hasOwnProperty('itzy')); // 가지고 있는지

// 다른언어는 aespa.keys()와 같은 방식으로 사용
console.log(Object.keys(aespa)) // members, from, sing 키 값만 출력
console.log(Object.values(aespa)) // value 값만 출력