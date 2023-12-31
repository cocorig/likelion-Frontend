// 함수의 종류
// 화살표 함수에 다양한 예제(****)
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics
// 1. 함수 선언문
function sum(x, y) {
  return x + y;
}

// 2. 함수 표현식
let sumXY = function (x, y) {
  return x + y;
};
console.log(sum(10, 20));
console.log(sumXY(10, 20));

// 3. 화살표 함수
// 3.1 return문만 있는 경우
function sum(x, y) {
  return x + y;
}

let sum = (x, y) => x + y

// 3.2 함수의 기능 + return이 있는 경우
function sum(x, y) {
  let z = x + y;
  console.log(z)
  return z;
}

let sum = (x, y) => {
  let z = x + y;
  console.log(z)
  return z;
}

// 3.3 인자가 하나인경우
function pow(x) {
  return x * x;
}

let pow = x => x * x;
let pow = (x) => x * x;

// 4. 즉시 실행 함수
(function () {
  console.log('즉시 실행!')
})()
// 즉시 실행함수는 대부분 main함수로 만들어서 사용하는 경우가 많습니다.

function main() {
  // 10만줄
}
main()

// 즉시 실행함수를 사용하면 main을 다시 사용할 수 없게 할 수 있습니다. 또한 전역변수 등을 사용하지 않게 할 수 있어요.

// 5. 재귀함수(중급자 될때까지 권하지 않습니다.)
// 반복문으로 만들 수 있으면 재귀로 표현이 가능하고
// 재귀로 표현이 가능하면 반복문으로 표현이 가능합니다.
function factorial(n) {
  if (n == 1) {
      return 1;
  }
  return n * factorial(n - 1);
}
factorial(5)
// 5! == 5 * 4 * 3 * 2 * 1

factorial(5) == 5 * factorial(4) == 5 * 24
factorial(4) == 4 * factorial(3) == 4 * 6
factorial(3) == 3 * factorial(2) == 3 * 2
factorial(2) == 2 * factorial(1) == 2 * 1
factorial(1) == 1

// 6. 지역변수 전역변수
let aa = 10; // 전역변수
function test() {
  console.log(aa)
}
test()

let b = 10
function one() {
  let b = 100 // 지역변수
  function two() {
      function three() {
          console.log(b)
      }
      three()
  }
  two()
}
one()

// 자신의 공간에 해당 변수가 없으면 상위 공간에서 찾습니다.
// 못찾으면 error입니다.

// 지역변수 끼리는 서로 간섭을 못합니다.
function one() { // 메모장
  let x = 10 // x는 라인 수
}

function two() { // 카메라
  let x = 100 // x는 조리개값
  console.log(x)
}
one()
two()

// 찾으면 읽고 쓸 수 있습니다!
// 전역변수는 읽고 수정할 수 있습니다.
// 다만 별도 함수 영역에 있는 지역변수는 서로 읽을 수 없습니다.

let cc= 10; // 전역변수
function test() {
  let b = cc+ 100
  return b
}
test()

let q = 10; // 전역변수
function test() {
  let q = 100
  return q
}
test()
console.log(q) // 10


let a = 10;
function test() {
  let a = 100
  function test2() {
      a = 1000
  }
  test2()
  console.log(a) // 1000
}
test()
console.log(a) // 10


// 지역변수는 서로 간섭하지 않습니다.
function test1() {
  let x = 10
  let a = 10
}

function test2() {
  let x = 100
  // console.log(a)
}

test1()
test2()
console.log(x)


// 지역변수는 서로 간섭하지 않습니다.
function test1() {
  let x = 100
}

function test2() {
  // 이렇게 하면 window에 등록이 되어 버립니다.
  // let이나 const, var 키워드를 꼭 써주세요.
  x = 100
}

test1()
test2()
console.log(x)
console.log(window.x)


let battery = 100; // 전역변수

function 메모장() {
  battery -= 1
  return b
}

function 사진() {
  battery -= 1
  return b
}

test()

// 순수함수
function add(a, b, c) {
  return a + b + c
}
add(1, 2, 3)

// 순수함수X
let c = 10
function add(a, b) {
  return a + b + c
}
add(1, 2)