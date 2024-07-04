
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