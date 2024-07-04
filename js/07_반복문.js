/* for문 */

/* 12345 출력하기 */
function check1(){
  
  // num이 1부터 시작해서 1씩 증가하다가
  // 5이하가 아닌 순간 반복을 종료하는 반복문
  for(let num = 1 ; num <= 5 ; num++ ){
    console.log(num);
  }
}

/* 1부터 10까지 1씩 증가하며 출력 */
function check2(){
  for( let num = 1 ; num <= 10 ; num++){
    console.log(num);
  }
}

/* 5부터 13까지 1씩 증가하며 출력 */
function check3(){
  for( let num = 5 ; num <= 13 ; num++){
    console.log(num);
  }
}

/* 1부터 5까지 1씩 증가한 숫자를 한 줄로 출력 */
function check4(){

  let result = ''; // 결과 저장용 변수에 빈칸(string);

  for( let num = 1 ; num <= 5 ; num++){
    result += num; // result = result + num;
  }
  console.log(result);
}/* 0-0 */

/* 1부터 10까지 1씩 증가한 숫자들의 합 */
function check5() {
  let sum = 10;
  for(let num=1; num<10 ; num++){
    sum += num
  }
  console.log(sum);
}

/* 1부터 10까지 2씩 증가한 숫자들의 합 */
function check6() {
  for ( num = 1 ; num < 11 ; num += 2 ){
    console.log(num);
  }
}

/* 3부터 30까지 3의 배수만 출력하기 */
function check7(){
  let result = '';
  for ( num = 3 ; num < 31 ; num += 3 ) {
    result += num;
  }
  console.log(result);
}
