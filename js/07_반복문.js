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

/* 1부터 20까지 4의 배수만 출력하고 합계도 구하기 */
function check8(){
 let result1 = '';
 let result2 = 0;
  for ( i = 1 ; i < 21 ; i ++ ) {
    if( i % 4 === 0 ){
      result1 = result1 + i + ", ";
      result2 += i;
    }
  }
  console.log("4의 배수 : " + result1 + " 합계 : " + result2);
}

/* 입력받은 범위 내 지정된 배수 출력 및 합계 구하기... */
function check9() {
  const start = document.getElementById('start9');
  const end = document.getElementById('end9');
  const multiple = document.getElementById('multiple9');

  const s = Number(start.value);
  const e = Number(end.value);
  const m = Number(multiple.value);

  let result = '';
  let sum = 0;

  for ( let num = s ; num <= e ; num++ ) {

    if ( num % m === 0 ) {
      result = result + num + ", ";
      sum = sum + num;
    }
  }
  console.log(m + "의 배수 : " + result + " 합계 : " + sum);
}

/* 입력 받은 단(2~9)의 구구단 출력하기 */
function check10(){
  const input = document.getElementById('dan10');
  const dan = Number(input.value);

  if(input.value.length === 0){
    alert("숫자를 입력 해주세요.");
    return;
  }
  if( dan < 2 || dan > 9){
    alert(" 2 ~ 9 사이 숫자를 입력해 주세요.");
    return;
  }

  for ( let num = 1 ; num < 10 ; num++){
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}

/* 10 부터 1까지 1씩 감소하며 출력하기 */
function check11(){
  let result = ''; 
  for( let num = 10 ; num > 0 ; num--){
    result += num + " "; 
  }
  console.log(result);
}

/* 입력 받은 단 거꾸로 출력하기 */
function check12(){
  const input = document.getElementById("dan12");
  const dan = Number(input.value);
  if (input.value.length === 0){
    alert("숫자 입력 해주세요.");
    return;
  }
  if ( dan < 1 || dan > 9){
    alert("2~9 사이의 숫자를 입력해 주세요");
    return;
  }
  for(let num = 9 ; num > 0 ; num-- ){
    console.log(`${dan} x ${num} = ${dan*num}`);
  }
}

  /* 특정배수마다 지정된 모양으로 출력하기 */
function check13(){
  
  const input = document.getElementById("input13");
  const output = document.getElementById("output13");
  
  const multiple = Number(input.value);
  const shape = output.value;

  let str = '';

  for ( let num = 1 ; num < 21 ; num++ ) {
    if ( num % multiple === 0 ) {
      str += `${shape} `;
    } else {
      str += `${num} `;
    }

    if( num === 10 ) str += "<br>"; // 한줄인 경우 {} 생략

  }

  document.getElementById("result13").innerHTML= str;
}

/* CSS 적용하기 */
function check99(){
const input = document.getElementById("input99");
const result = document.getElementById("result99");

const multiple =  Number(input.value);
let str = '';

for ( let num = 1 ; num < 21 ; num++ ) {
  if ( num % multiple === 0 ) {
    str += `<span class="num">${num} </span>`;
  } else {
    str += `${num} `;
  }
}
result.innerHTML= str;
}

/* 다음 모양 출력하기 */
function check14(){
  // 행은 3번 반복
  // 1행마다 4번 반복
  for(let row = 1 ; row <= 3 ; row++){
    let str = '';//한 행에 출력될 문자열을 저장할 변수, 행이 반복될때마다 초기화됨

    //1행마다 4번 반복
    for (let col = 1; col <=4 ; col ++){
      str += col; // str = '' + '1' + '2' + '3' + '4' /end
    }

    // 안쪽 구문 출력
    console.log(str);
    console.log(" ");

  }
}
/* 다음 모양 출력하기 ver2 */
function check15(){
  for ( let row = 0 ; row < 4 ; row++){
    let str = '';
    for ( let col = 0; col < 5 ; col ++){
      str += col+1;
    }
    console.log(str);
    console.log(" ");
  }
}

/* 다음 모양 출력하기 ver3 */
function check16(){
  const result = document.getElementById('span16');
  let r = '';

  for(let row = 0 ; row < 3 ; row++){
    let str = '';
    for(let col = 0 ; col < 6 ; col++){
      str += 6 - col;
    }
    console.log(str);
    r += str + "<br>"
  }
  result.innerHTML=r;
}

/* 다음 모양 출력하기 ver4 */
function check17(){
  const result = document.getElementById("span17");
  let r = '';
  for( let row = 0 ; row < 4 ; row++ ){
    let str = '';
    for( let col = 0 ; col <= row ; col ++){
      str += col + 1;
    }
    r += str + "<br>";
  }
  result.innerHTML=r;
}

/* 다음 모양 출력하기 ver5 */
function check18(){
  const result = document.getElementById("span18");
  let r = '';
  for( let row = 0 ; row < 4 ; row++ ){
    let str = '';
    for( let col = 0 ; col <= 3-row ; col ++){
      str += "&nbsp;&nbsp;";
    }
    for( let col = 0 ; col <= row ; col ++){
      str += " *";
    }
    r += str + "<br>";
  }
  result.innerHTML=r;
}

/* 다음 모양 출력하기 ver6 */
function check19(){
  const result = document.getElementById("span19");
  let r = '';
  for( let row = 0 ; row < 5 ; row++ ){
    let str = '';
    for( let col = 1 ; col <= 5-row ; col ++){
      str += col;
    }
    r += str + "<br>";
  }
  result.innerHTML=r;
}


/* *********************************************************** */
/* 1부터 30 사이의 정수 중 4의 배수의 갯수 구하기 */
function check20(){
  
  let count = 0; // 4의 배수를 세기 위한 변수

  for(let num=1 ; num <= 30 ; num++){
    
    if(num % 4 === 0){ // 4의 배수를 찾는 if 문
      count++;
    }

  }
  alert(`${count}개 입니다.`) // =7
}

/* 1부터 100 사이의 정수 중 입력받은 값의 배수가 몇개인지 */
function check21(){
  const input = document.getElementById("input21");
  const multiple = Number(input.value);
    
  let count = 0; // multiple의 배수를 세기 위한 변수

  if(input.value.length === 0){
    alert("숫자를 입력 하세요");
    return;
  }

  if(multiple < 1 || multiple > 100){
    alert("1 ~ 100 사이의 숫자를 입력해 주세요.");
    return;
  }

  for(let num=1 ; num <= 100 ; num++){
    
    if(num % multiple === 0){ // multiple의 배수를 찾는 if 문
      count++;
    }

  }
  alert(`${count}개 입니다.`)
}

/* count를 이용해 다음 모양 출력하기 */
function check22(){


  let count = 0;
  let str = '';

  for(let row = 1; row <= 3 ; row ++){

    for(let col = 1; col <= 4 ; col++){
      /* count++;
      str+=count + " "; 한줄로 줄일 수 있음*/
      str += ++count + " ";
    }
    str+="<br>";
  }

  document.getElementById('span22').innerHTML=str;
}

/* ******************************************************************* */

/* while 문 */

/* 0이 입력될 때 까지 입력된 값 누적하기 */
function check23(){

  let sum = 0;

  let value = 0;
  // 입력된 숫자가 0이 아니면 반복
  while( (value = Number(prompt("숫자를 입력하세요."))) !== 0 ){
    sum += value; // 누적
  }
  alert(`합계 : ${sum}`);
}


/* 메뉴 주문하기 */
function check24(){

  // 메뉴 가격을 저장한 변수 선언
  const gimbap    = 4000;
  const ramen     = 4500;
  const donkkaseu = 9000;

  // 주문 개수 카운트
  let gimbapCount    = 0;
  let ramenCount     = 0;
  let donkkaseuCount = 0;

  //prompt에 입력된 값을 저장할 변수
  let input; // 선언만 했을때의 자료형 : undefined상태

  // input이 undefined 이기 때문에
  // while문 첫 반복은 무조건 수행됨
  while(input !== null){

    // prompt -> 확인 : 작성한 값 반환
    // prompt -> 취소 : null
    //          -> 취소 선택 시 while문 반복수행 종료
    input = prompt("메뉴 번호 입력");

    // input 값에 따라서 알맞는 case 실행
    switch(input){
      case '1' : gimbapCount++;    break;
      case '2' : ramenCount++;     break;
      case '3' : donkkaseuCount++; break;
      case null : alert("주문 완료!!!!"); break;
      default : alert("메뉴에 작성된 번호만 입력해 주세요.");
    }
  } // /end while

  let html =''; //화면에 출력될 html 코드를 저장 할 변수

  if(gimbapCount > 0){
    html += `<li>김밥(${gimbapCount}개) : ${gimbapCount * gimbap}원</li>`
  }
  
  if(ramenCount > 0){
    html += `<li>라면(${ramenCount}개) : ${ramenCount * ramen}원</li>`
  }
  if(donkkaseuCount > 0)
    {html += `<li>돈까스(${donkkaseuCount}개) : ${donkkaseuCount * donkkaseu}원</li>`
  }

  const sum = gimbapCount * gimbap + 
              ramenCount * ramen +
              donkkaseuCount * donkkaseu;

  html += `<li>합계 : ${sum}원</li>`

  // 아이디가 "result24"인 요소의 내용으로 html 변수 값 추가
  // + HTML 태그 해석
  document.getElementById('result24').innerHTML=html;
}