let 회원정보 = [
  {
    _id: "642a622054c00dbed9966665",
    index: 0,
    age: 28,
    eyeColor: "blue",
    name: "Hale Klein",
    gender: "male",
    company: "EARTHMARK",
  },
  {
    _id: "642a6220b8ef382b99d64b42",
    index: 1,
    age: 21,
    eyeColor: "brown",
    name: "Gamble Riggs",
    gender: "male",
    company: "ECRAZE",
  },
  {
    _id: "642a6220f2987ff6d6a8ea60",
    index: 2,
    age: 33,
    eyeColor: "blue",
    name: "Terry Waller",
    gender: "female",
    company: "DEEPENDS",
  },
  {
    _id: "642a6220fd9c1ea0b0440e4d",
    index: 3,
    age: 38,
    eyeColor: "blue",
    name: "Estes Stuart",
    gender: "male",
    company: "FUELTON",
  },
  {
    _id: "642a6220ed7e0d220e3bdb6b",
    index: 4,
    age: 37,
    eyeColor: "blue",
    name: "Byrd Small",
    gender: "male",
    company: "QUINTITY",
  },
];

회원정보[0];
회원정보[0]["name"];
회원정보[0]["company"];

let 나이평균 =
  (회원정보[0]["age"] +
    회원정보[1]["age"] +
    회원정보[2]["age"] +
    회원정보[3]["age"] +
    회원정보[4]["age"] +
    회원정보[5]["age"]) / 6;
