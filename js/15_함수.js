/* 매개 변수(Parameter), 전달 인자(Argument)  */
//const input1 = document.querySelector("css선택자");
const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 전달 받은 값이 양수/ 음수/ 0인지 구분해서 출력하는 함수
function testFn1( num ){
  let str;
  if(num === 0)    str = "0";
  else if (num>0)  str = "양수";
  else             str = "음수";

  alert(`${num}은 ${str} 입니다.`);
}

// #btn1 버튼이 클릭 되셨을 때
btn1.addEventListener("click", function(){

  // 함수정의
  // #input에 작성된 값 얻어오기
  const value = Number(input1.value);
  // input1 : 문서에서 불러온 <input ...> 태그
  // input1.value : 태그에 작성한 내용
  // Number(input1.value) : 내용(string)을 숫자로 변환

  // 함수호출
  testFn1(value);
  // 버튼 클릭시 value 얻어오고, 함수 실행까지
})

/* ************************************************** */
/* 입력 받은 수 "3개" 합계 구하기 */
const btn2 = document.querySelector("#btn2");

function testFn2(num1, num2, num3){
  const sum = num1 + num2 + num3;
  alert(`합계 : ${sum}`);
}

btn2.addEventListener("click", function(){

  // 버튼 클릭 시점에 class = "input2"인 요소 모두 얻어오기
  const inputs = document.querySelectorAll(".input2");
                  // NodeList(유사배열형태)

  const value1 = Number(inputs[0].value);
  const value2 = Number(inputs[1].value);
  const value3 = Number(inputs[2].value);

  testFn2(value1, value2, value3); // 함수호출
  /* 재사용성 떨어짐
  const sum = value1 + value2 + value3;
  alert(`합계 : ${sum}`); */
});

/** 합계구하기 배열 버전
 * @param arr : 전달받은 숫자배열
 */
function testFn3( arr ){

  let sum = 0;

  for(let i=0; i<arr.length ; i++){
    sum += arr[i];
  }

  alert(`합계 : ${sum}`);
}

/* ************************************************** */

// #btn3 클릭시 testFn3 호출
document.querySelector("#btn3").addEventListener("click", function(){

  // 클래스가 input2인 요소를 모두 모셔와 저장(배열)
  const inputs = document.querySelectorAll(".input2");

  // 1) inputs 길이 만큼의 배열 생성
  const numberArr = new Array(inputs.length);

  // 2) inputs 각 인덱스 요소를 얻어옴
  for(let i = 0; i<inputs.length ; i++){
    const num = Number(inputs[i].value);

    // 3) numberArr의 [i]에 num 저장
    numberArr[i] = num;
    /* 
    inputs    : 배열요소 = 코드 [<input>, <input>, <input>]
    numberArr : 배열요소 = 값   [1, 2, 3]
    */
  }

  testFn3(numberArr);

})

/* ************************************************** */

document.querySelector("#btn99").addEventListener("click", function(){
  const str = document.querySelectorAll(".input99");
  const text1 = str[0].value;
  const text2 = str[1].value;
  const text3 = str[2].value;

  testFn2(text1, text2, text3);
})

/* ************************************************** */
/* return 확인하기 1 */

/** num의 x제곱을 반환하는 함수 */
function pow(num, x){

  let result = 1; // 곲셈 초기값은 1로 초기화

  for(let i=0; i<x; i++){
    result *= num;
  }

  // 현재 함수를 종료,
  // reult 값을 가지고 호출한 곳으로 돌아감
  // 콘솔창에 그냥치면 result 반환 안하고 undefined 나옴
  return result;
}

/** 출력할 문자열을 반환하는 함수 */
function printStr(num){

  return `결과 : ${num}`;
}

/* ************************************************** */
// #btn4 클릭시
document.querySelector("#btn4").addEventListener("click", function(){

  const num = Number(prompt("숫자 입력"));
  const x   = Number(prompt("제곱 입력"));

  alert(printStr(pow(num,x) ) );
})

/* ************************************************** */
/* return 확인하기 2 */
function testFn5a(num){
  return testFn5b(num) * 2;
}

function testFn5b(num){
  return testFn5c(num) * 3;
}

function testFn5c(num){
  return num + 1;
}

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function(){
  alert(testFn5a(3) );
})

// alert(testFn5a(3) )
// alert(testFn5b(num) * 2 )
// alert(testFn5c(num) * 3 * 2 )
// alert(num + 1 * 3 * 2 )

/* ================================================== */
/* 익명함수 확인 */

const btn6 = document.querySelector("#btn6");

// 익명 함수를 이벤트 핸들러로 많이 사용하는 이유
// -> 해당 이벤트 전용 기능인 경우가 많아서
//    (= 다른곳에서는 재사용 못하는 경우가 많아서)
btn6.addEventListener("click", function(){ // 익명함수
  console.log("익명 함수 실행");

  /* 변수 + 익명함수 */
  // 변수는 함수도 저장할 수 있다!!!! (자료형 : function)

  // 변수명이 익명함수의 함수명 역할을 해준다!!!
  // (요즈음 함수 정의방법)
  // 해당 함수는 지역변수에 저장됨
  // -> 해당 지역에서만 사용 가능한 함수
  //  -> 변수명 중복 줄여줌
  const plusFn = function(a, b) { return a + b; }
  // const plusFn = (a, b) => { return a + b; }
  // function plusFn(a,b) { return a + b; }

  console.log(plusFn(1,2));
});

// 이름 있는 함수 선언/정의 -> 여러 곳에서 재사용 가능
function testFn6(){
  console.log("이름 있는 함수 실행");
}

//함수명만 작성 -> 함수코드가 그대로 반환
btn6.addEventListener("click", testFn6)

/* ************************************************** */
/* 매개 변수/return으로 익명 함수 전달하기 */

function testFn7( otherFn ){
  // otherFn : 전달받은함수

  return function(num){
    // 함수 호출
    return otherFn() + num;
  };
}

document.querySelector("#btn7").addEventListener("click", function(){

  const resultFn = testFn7( function(){ return 10; } );
  // testFn7() 호출 결과로 반환 받은 함수
  // function(num){
  //   return otherFn() + num;
  // }

  alert( resultFn(100) );
  // alert( resultFn(100) );
  //        resultFn = testFn7( function(){ return 10; } )
  //                   testFn7( otherFn ){ return function(num){ return otherFn() + num; } };
  //        resultFn = testFn7( 10 )
  //                   testFn7( otherFn ){ return function(num){ return otherFn() + num; } };
  //                   testFn7( 10 ){ return function(num){ 10 + num; } };
  //        resultFn = function(num){ 10 + num; }
  //        resultFn(100) = function(100){ 10 + 100; }
  //        resultFn(100) = 110
  // alert( 110 );
})

/* ================================================== */
/* 화살표 함수 */
const arrows = document.querySelectorAll(".arrow");

// 화살표 함수 기본형태
//arrows[$].addEventListener("click", () => {});
arrows[0].addEventListener("click", () => {

  // 익명 함수를 변수에 대입 function sumFn(a,b,c)=return a+b+c;
  const sumFn = (a, b, c) => {
    return a + b + c;
  };

  alert( sumFn(10, 20, 30) );
});

// 매개 변수가 1개인 경우 () 생략 가능
arrows[1].addEventListener("click", () => {

  //const testFn = (num) => { return 10 * num; };
  const testFn = num => { return 10 * num; };

  alert( testFn(99) );
});

//한 줄만 작성된 경우 {return }; 생략 가능
arrows[2].addEventListener("click", () => {

  //const minusFn = (a,b) => { return a - b; };
  const minusFn = (a,b) => a - b;

  alert( minusFn(1000,10) );

  // 매개 변수 1개, 정의내용 return 한줄
  //const doubleFn = (num) => { return num * 2; };
  const doubleFn = num => num * 2;

  alert( doubleFn(495) );
});

// object를 return하는 경우
arrows[3].addEventListener("click", () => {

  // JS 객체 : { k:v, k:v, ...}
  // k(key) == 변수명
  // v(value) == 대입되는 값

  // 정상작성
  const objectFn = (name, age) => {
    return { "이름":name, "나이":age };
    };
  //잘못작성
  //  const objectFn = (name, age) => { "이름":name, "나이":age };

  console.log( objectFn("ㅎㄱㄷ", 25) );
});

/* ================================================== */
/* 즉시실행함수 */

(() => {
  console.log("즉시 실행 함수 실행됨");
  console.log("점심먹으러 가야지");
})();
