/* 
  [템플릿 문자열]
  - `(백틱)을 이용한 문자열 + 변수 작성법
  
  - 문자열 전체를 `(백틱)으로 감싸고
    JS값(변수, 연산, 값)을 ${} 형태로 작성
*/

/** 비교 연산자 확인 */
function check1(){

  const num1 = 100;
  const num2 = 100;
  const num3 = 999;
  
  const str1 = "100";
  const str2 = "100";
  const str3 = "999";

console.log("동등 비교(==, !=)");
console.log(`${num1} == ${num2} => ${num1 == num2}`); // t
console.log(`${num1} == ${num3} => ${num1 == num3}`); // f
console.log(`${num1} != ${num3} => ${num1 != num3}`); // t
console.log("----");
console.log(`${num1} == "${str1}" => ${num1 == str1}`); // t
console.log("----");
console.log(`"${str1}" == "${str2}" => ${str1 == str2}`); // t
console.log(`"${str1}" == "${str3}" => ${str1 == str3}`); // f
console.log(`"${str1}" != "${str3}" => ${str1 != str3}`); // t
console.log("----");
console.log("동일 비교(===, !==)");
console.log(`${num1} === ${num2} => ${num1 === num2}`); // t
console.log(`${num1} === ${num3} => ${num1 === num3}`); // f
console.log(`${num1} !== ${num3} => ${num1 !== num3}`); // t
console.log("----");
console.log(`${num1} === "${str1}" => ${num1 === str1}`); // f



//
console.log("숫자 끼리 크기 비교(<, >, <=, >=)")
console.log(`${num1} > ${num2} => ${num1 > num2}`); //f
console.log(`${num3} > ${num2} => ${num3 > num2}`); //t
console.log(`${num1} >= ${num2} => ${num1 >= num2}`); //t

/* 복합 기호에서 등호"="는 무조건 오른쪽" */
}


/* ************************************** */
/* 홀/짝 확인 */

function oddEvenCheck(){
  const input1 = document.getElementById("input1");

  // #input1 요소에 작성된 값을 얻어와
  // Number()를 이용해 숫자로 변환 후
  // Value 변수에 대입(저장)
  const value = Number(input1.value);

  // 2로 나누었을 때 나머지가 0 === 짝수(2의 배수)
  // 2로 나누었을 때 나머지가 1이 아닌 경우 === 짝수
  // 2로 나누었을 때 나머지가 1 === 홀수
  // 2로 나누었을 때 나머지가 0이 아닌경우 === 홀수

  console.log(`${value}은/는 짝수 : ${value % 2 === 0}`);
  console.log(`${value}은/는 짝수 : ${value % 2 !== 1}`);
  console.log(`${value}은/는 홀수 : ${value % 2 === 1}`);
  console.log(`${value}은/는 홀수 : ${value % 2 !== 0}`);
}

/* 배수확인 */
/** 배수확인함수 */
function multipleCheck(){
  const v1 = document.getElementById("input2");
  const v2 = document.getElementById("input3");
  const r1 = document.getElementById("result1");
  const r2 = document.getElementById("result2");
  const r3 = document.getElementById("rest")

  const num1 = Number(v1.value);
  const num2 = Number(v2.value);
  const num3 = (num1-num1%num2)/num2;

  // 10은 5의 배수가 맞는가? > 10을 5로 나누었을 때 나머지가 0
  r1.innerText = num1%num2 == 0;
  r2.innerText = num3;
  r3.innerText = num1%num2;

}

/* ************************************************** */
/* 복합 대입 연산자 확인 */
function compoundCheckFn(){
  let number = 100;
  console.log(`초기 number값 : ${number}`);
  
  number += 20; // number = number + 20;
  console.log(`2번. +=20; number값 : ${number}`); //  120
  
  number -= 60; // number = number - 60;
  console.log(`3번. -=60; number값 : ${number}`); // 60
  
  number *= 3; // number = number * 3;
  console.log(`4번. *=3; number값 : ${number}`);  // 180
  
  number /= 10; // number = number / 10;
  console.log(`5번. /=10; number값 : ${number}`);  // 18
  
  number %= 5; // number = number % 5;
  console.log(`6번. %=5; number값 : ${number}`);  // 3
  
  }// 이젠 커피도 없어 ㅜㅜ

  /* ************************************************** */
  /* 논리연산자 */

/* AND(&&) : 둘 다 true 인 경우에만 true
  A && B : A 와 B 모두 true 일 경우에만 A && B 결과가 true인 연산자 (나머진 false)

  A   B   A && B
  T   T     T
  T   F     F
  F   T     F
  F   F     F
*/
// AND 연산자 확인
function andCheckFn(){
  
  // 104는 100 이상의 숫자 이면서 짝수인가?
  const bool1 = (104 >= 100) && (104 % 2 == 0);
  
  console.log(`104는 100 이상의 숫자 이면서 짝수인가? ${bool1}`);

  // 50은 70이하의 숫자이고, 4의 배수가 맞는가?
  const bool2 = (50 <= 70) && (50 % 4 == 0);
  console.log(`50은 70이하의 숫자이고, 4의 배수가 맞는가? ${bool2}`);

  // 13은 1부터 10 사이의 숫자가 맞는가?
  const bool3 = (13 > 1) && (13 < 10);
  console.log(`13은 1부터 10 사이의 숫자가 맞는가? ${bool3}`);
  }

/* OR(||) : A와 B 모두 false 일 경우에만 false

  A   B   A || B
  T   T     T
  T   F     T
  F   T     T
  F   F     F
*/
function orCheck(){

  //4는 10을 초과하거나 짝수인가?
  const bool1 = (4>10) || (4%2==0);
  console.log(`4는 10을 초과하거나 짝수인가? ${bool1}`);


  // 나이가 18세 미만 이거나, 이름이 "김길동"인가?
  const name = "홍길동";
  const age = "20";
  const bool2 = (age < 18) || (name == "김길동");
  console.log(`나이가 18세 미만 이거나, 이름이 "김길동"인가? ${bool2}`);
  }

/* NOT(!) : 논리 값을 반대로 바꾸는 연산자

  A   B   A && B  !(A&&B)
  T   T     T       F
  T   F     F       T
  F   T     F       T
  F   F     F       T

    A   B   A || B  !(A||B)
  T   T        T      F
  T   F        T      F
  F   T        T      F
  F   F        F      T
*/

