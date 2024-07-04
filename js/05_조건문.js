
/* if문 */

/* 양수인지 아닌지 검사 */
function check1(){

  // 문서 내에서 id가 input1인 요소를 얻어와 input1 상수에 저장
  const input1 = document.getElementById('input1');

  // input1.value : input1 요소에 입력된 값(string)을
  // Number(string) : 문자열 -> 숫자열
  const value = Number(input1.value);

  // 입력한 값이 0보다 큰 경우 true
  if(value > 0){
    alert(`${value}은/는 양수 입니다...`);
  }

  if(value <= 0){
    alert(`${value}은/는 양수가 아니었습니다...`)
  }
}



/* if-else문 */

/* 0 ~ 99 사이의 난수를 발생시켜 홀/짝 판별하기 */
function check2(){

  // 난수 발생기 : Math.random()
  // -> 0.0 <= 난수 < 1.0

  // 내림처리 : Math.floor(실수)
  //            소수점 첫째자리에 내림처리
  //            -> 정수 형태로 전환

  // 0~99 사이의 난수 발생
  const randomNumber = Math.floor(Math.random()*100);

  // 난수가 짝수인 경우
  if(randomNumber % 2 == 0){
    alert(`${randomNumber}은/는 짝수 입니다...`);
  }
  // 난수가 홀수인 경우
  else{
    alert(`${randomNumber}은/는 홀수였습니다...`)
  }
}



/* if - slse if - else문 */

/* 양수, 음수, 0 판별 */
function check3(){
  const input3 = document.getElementById("input3");
  const value = Number(input3.value);

  let result; // 결과를 저장할 변수

  if(value > 0){
    result = "양수";
  }

  else if(value < 0){
    result = "음수";
  }

  else{
    result = "0";
  }

  alert(`${value}은/는 ${result}입니다.`)
}



/* ****************************************** */
/* (실습문제) 어린이, 청소년, 성인 구분하기 */
function ageCheckFn(){
  const inputAge = document.getElementById('inputAge');
  const age = Number(inputAge.value);
  let result;
  if( age < 0 ){
    result = "잘못 입력하셨습니다.";
  }
  else if( age <= 13 ){
    result = "어린이 입니다.";
  }
  else if( age <= 19){
    result = "청소년 입니다.";
  }
  else if( age <= 120 ){
    result = "성인 입니다.";
  }
  else{
    result = "잘못 입력하셨습니다.";
  }
  alert(`입력하신 나이는 ${result}`);
}

/* ----------------------------------------- */
/* 강사님풀이 */
function ageCheck(){
  const inputAge = document.getElementById("inputAge");
  const value = Number(inputAge.value);
  let result;
  if(value >= 0  && value <= 13){
    result = "어린이";
  } else if(value >= 14 && value <= 19){
    result = "청소년";
  } else if(value >= 20 && value <= 120){
    result = "성인";
  } else {
    result = "잘못 입력 하셨습니다";
  }
  alert(result);
}

/* 강사님풀이2 */
function ageCheck2() {
  const inputAge = document.getElementById("inputAge");
  const value = Number(inputAge.value);
  let result;
  if( value < 0 || value > 120 ){
    result = "잘못 입력 하셨습니다.";
  } else if( value <= 13 ){
    result = "어린이";
  } else if( value <= 19 ){
    result = "청소년";
  } else {
    result = "성인";
  }
  alert(result);
}

/* 강사님풀이3 */
/* 
  if ~ else if ~ else 에서 앞선 if의 조건이 false가 되면
  해당 범위는 이후 조건에서 제외된다.

  if, elsif, else, for, while 등
  {} 내부에 코드가 한줄만 존재하는 경우
  {} 생략 가능
*/
function ageCheck3() {
  const inputAge = document.getElementById("inputAge");
  const value = Number(inputAge.value);
  let result;
  if( value < 0 || value > 120 )  result = "잘못 입력 하셨습니다.";
   else if( value <= 13 )         result = "어린이";
   else if( value <= 19 )         result = "청소년";
   else                           result = "성인";
  alert(result);
}

/* ****************************************** */



/* 중첩 if문 */

/* 입력 받은 숫자가 3의 배수가 맞는지 검사
    3의 배수가 맞으면 : YES
    3의 배수가 아니면 : NO
    음수 입력 : 양수만 입력해 주세요.
    입력된 값이 없다면 : 값을 입력해 주세요.
*/
function check4(){
  const input4 = document.getElementById('input4');
  const value = Number(input4.value);

  if(input4.value.length === 0){
    // 문자열.length == 문자열의 길이를 반환
    alert("값을 입력해 주세요.");
  } else { // 값 입력 O
    // 여기선 0도 양수로 취급하겠음

    if (value >= 0){ //양수

      if(value%3==0){
        alert("YES");
      }else{
        alert("NO");
      }
    }else{
      //음수
      alert("양수만 입력해 주세요.")
    }

  }
}



/* Early Return */

/* 두 수를 입력 받아 A가 B의 배수가 맞는지 확인
    ex) A:10 / B:5 -> 배수 맞음

    조건 :
    1) A와 B중 하나라도 입력되지 않으면
     -> 입력되지 않은 값이 존재합니다.
    2) A가 B보다 작으면
     -> A가 B보다 작습니다.
    3) 1,2번 조건이 모두 false이면 배수 판별 진행
     -> 배수 맞음/ 배수 아님
*/
function check6(){
  const input5a = document.getElementById('input5a');
  const input5b = document.getElementById('input5b');
  const A = Number(input5a.value);
  const B = Number(input5b.value);

  if(input5a.value.length === 0 || input5b.value.length === 0 ){alert("입력되지 않은 값이 존재합니다.");}
  else{if(A<B){alert("A가 B보다 작습니다.");}
  else{if(A%B==0){alert("배수 맞음");}
  else{alert("배수아님");}}}
}

/* ----------------------------------------- */
/* 강사님풀이 */
function check5(){
  const a = document.getElementById('input5a');
  const b = document.getElementById('input5b');

  // 1) A와 B중 하나라도 입력되지 않으면
  // -> 입력되지 않은 값이 존재합니다.
  if(a.value.length === 0 || b.value.length === 0 ){
    alert("입력되지 않은 값이 존재합니다.");
   return; // Early Return : 함수를 여기서 끝냄
  }

  
  // 두 값이 모두 입력되어 있을 때 만 아래 코드를 수행
  const valueA = Number(a.value);
  const valueB = Number(b.value);
  
  // 2) A가 B보다 작으면 -> A가 B보다 작습니다.
  if(valueA < valueB){
    alert("A가 B보다 작습니다.");
    return;
  }

  // 위 if문이 실행X -> A가 B보다 크거나 같다.

  // 3) 1,2번 조건이 모두 false이면 배수 판별 진행
  //    -> 배수 맞음/ 배수 아님

  if(valueA % valueB === 0) {
    alert("배수맞음");
    return;
  }

  alert("배수 아님");

}





/* switch, case, default */

// 매개 변수(Parameter)
// 함수 호출 시 전달된 값(전달인자, Arguments)을 저장하는 변수

/** switch문을 이용한 계산기
 * @param op : 전달받은 연산 기호
 */
function calc(op){

  const number1 = document.getElementById("number1");
  const number2 = document.getElementById("number2");

  const value1 = Number(number1.value);
  const value2 = Number(number2.value);

  // 입력된 값, 전달받은 값 확인
  console.log(value1, value2, op);
  
  let result;

  // op값에 따라 알맞은 case 실행
  // break; : 현재 케이스 까지만 해석하고 switch문을 멈춤
  //  -> break 미작성 시
  //    현재 case 수행을 멈추지 않고
  //    break가 존재하는 case문 까지 계속 수행
  //     -> 중간에 break 없으면 default까지도 수행
  switch(op){
    case '+' : result = value1 + value2; break;
    case '-' : result = value1 - value2; break;
    case '*' : result = value1 * value2; break;
    case '/' : result = value1 / value2; break;
    case '%' : result = value1 % value2; break;
    
    //알맞은 case 가 없으면 default 실행
    default : result = "잘못된 연산자";
  }

  document.getElementById("calcResult").innerText = result;
}




/* 입력받은 달(월)의 계절 출력 */
function check7(){
  const input6 = document.getElementById('input6');
  const value = Number(input6.value);

  let result;

  switch(value){
    case 3:
    case 4:
    case 5: result = "봄"; break;

    case 6:
    case 7:
    case 8: result = "여름"; break;

    case 9:
    case 10:
    case 11: result = "가을"; break;

    case 12:
    case 1:
    case 2: result = "겨울"; break;

    default : result = "잘못입력";
    
  }

  alert(result);
}
