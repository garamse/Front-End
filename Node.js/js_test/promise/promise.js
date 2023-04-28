// pending; 대기 상태
// pulfilled; 이행 상태
// rejected; 실패 상태

/* .then을 써서 실행
function sayHello() {
  return new Promise((resolve, reject) => {

    resolve("hello!!"); // 성공했을 때 코드,  resolve 변수에 hello를 넘겨줌 

    /*reject(new Error()); // 실패했을 때 코드 reject 변수에 error 생성
  });
}

 then 여러개 생성 가능
sayHello()
  .then((resolvedData) => { // then을 흐름을 통해서 실행
    console.log(resolvedData);
    return resolvedData;
  })
  .then((resolvedData) => {
    console.log(resolvedData);
    return resolvedData;
  })
  .then((resolvedData) => {
    console.log(resolvedData);
  })
  .catch((error) => {
    console.log(error);
  });
  */

// async와 await 써서 실행
function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("hello");
  });
}

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();
