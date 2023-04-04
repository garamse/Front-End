// 실무 팁

// push 실무 예제
let tableBodyData = [];
for (const iterator of data) {
  tableBodyData.push(`          
        <tr>
          <td>${iterator["a"]}</td>
          <td>${iterator["b"]}</td>
          <td>${iterator["c"]}</td>
          <td>${iterator["d"]}</td>
          <td>${iterator["e"]}</td>
          <td>${iterator["f"]}</td>
        </tr>
      `);
}
document.querySelector("#dataTable > tbody").innerHTML = tableBodyData.join("");

let tip1 = [1, 2, 3, 4, 5];
console.log([...tip1].pop());
let tip2 = [...tip1];
console.group(top2.pop());
console.log(tip2);

let tip3 = [1, 2, 3, 4, 5];
let tip4 = [10, 20, 30, 40, 50];

// 중간에 값을 껴 넣고 싶을 때
console.log([...tip3, 1000, ...tip4]);

// 다차원 배열에서 최솟값, 최댓값 찾기
const tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

Math.max(...tip5.flat());

// n차원 펼치기 (평평하게 만들기)
const tip6 = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
];

tip6.flat();
tip6.flat(1);
tip6.flat(2);
tip6.flat(Infinity); // 다 펼쳐지면 스톱

const tip7 = new Array(10).fill(0); // Array(10).fill(0)도 가능
const tip8 = Array.from("hello world");

let tip9 = [1, 2, 3, 4, 5];
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)]); //[[1,2], [1000] , [3, 4, 5]]
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]); // 전개구문으로 안쪽 배열의 대괄호 빼주기
// tip9=[1, 2, 1000, 3, 4, 5]

let tip10 = [1, 2, 3, 4, 5];
tip10.splice(2, 0, 1000);
tip10; // 위와 같은 방법

const tip11 = Array(100)
  .fill(0)
  .map((v, i) => i + 1);

const tip12 = [
  {
    _id: "642ba3980785cecff3f39a8d",
    index: 0,
    age: 28,
    eyeColor: "green",
    name: "Annette Middleton",
    gender: "female",
    company: "KINETICA",
  },
  {
    _id: "642ba398d0fed6e17f2f50c9",
    index: 1,
    age: 37,
    eyeColor: "green",
    name: "Kidd Roman",
    gender: "male",
    company: "AUSTECH",
  },
  {
    _id: "642ba39827d809511d00dd8d",
    index: 2,
    age: 39,
    eyeColor: "brown",
    name: "Best Ratliff",
    gender: "male",
    company: "PRISMATIC",
  },
];

const ages = tip12.map((item) => item.age);
console.log(ages);

// sort
function sort(key) {
  if (click) {
    click = false;
    var sortedData = jsonData.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  } else {
    click = true;
    var sortedData = jsonData.sort((a, b) =>
      a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
    );
  }
}
