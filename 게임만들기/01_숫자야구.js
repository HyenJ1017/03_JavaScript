/* 조작판버튼 */
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const check = document.querySelector('#check');

/* 숫자입력판 UP/DOWN버튼 */
//누르면 number[i] 숫자++,--;
const up1 = document.querySelector('#up1');
const up2 = document.querySelector('#up2');
const up3 = document.querySelector('#up3');
const up4 = document.querySelector('#up4');
const down1 = document.querySelector('#down1');
const down2 = document.querySelector('#down2');
const down3 = document.querySelector('#down3');
const down4 = document.querySelector('#down4');

/* 점수판 표 */
//innerHTML로 표 추가
let scoreTable = document.querySelector('#scoreTable');

/* 숫자입력판 input버튼 */
// 확인버튼 누를때 불러오기
/*
const number = document.querySelectorAll('#inputNumber'); //배열
*/

let count = 0;               //게임반복횟수
let strike = 0;              //strike 카운트
let ball = 0;                 //ball 카운트
let goal = [];               //목표행렬



/* 숫자 중복시 다시하기 넣어야함!!!! */
/* start 누르면 난수 4개 생성 후 저장 */
start.onclick=function(){

  for(let i=0; i<4 ; i++){
    goal[i] = Math.floor(Math.random()*9)+1;
    for(let c=0; c<i ; c++){  // c<=i 하면 지금꺼랑 계속 중복되서 계속 실행됨
      let prove = goal[i];
      if(goal[c]===prove) i--;
    }
  }
  // console.log(goal);
};




/* check 누르면 */
check.onclick=function(){

  strike = 0;              //값 초기화
  ball = 0;

  const numArray = document.querySelectorAll(".inputNumber");

  /* 입력한 숫자가1 ~ 9 사이의 숫자가 아니면 alert */
  for(let i=0; i<4 ; i++){
    if(numArray[i].value < 1) {
      alert("1 부터 9 사이의 숫자를 입력해 주세요!");
      return;
    }else if(numArray[i].value > 9) {
      alert("1 부터 9 사이의 숫자를 입력해 주세요!");
      return;
    }

    // console.log(numArray[i].value);
  }

  console.log(goal);
  /* 시작버튼 안누름 */
  if(goal[0] == goal[1]){
    alert("먼저, 게임시작 버튼을 누르셔야 합니다");
    return;
  }
  
  /* strike 확인 */
  for(let i = 0; i < 4 ; i++ ){
    let value = numArray[i].value;
    if(goal[i] == value) strike++;
    //console.log(goal[i]);
  }

  /* 4s일 시 게임 완료 alert, reset */
  if(strike === 4){
    alert("게임 승리!");
    /* 리셋 집어넣어야합니다!!!! */
  }

  for(let i=0; i<4 ; i++){
    let value = numArray[i].value;
    for(let c=0; c<4 ; c++){

      if(i == c)continue;
      

      if(goal[c] == value){
        ball=ball+1;
      }

    }

  }
  let array ='';
  for(let i = 0; i < 4 ; i++ ){
    array += numArray[i].value;}

  count++;

  /*- 점수판에 숫자 확인 및 횟수 누적 */
  scoreTable.innerHTML+=`<tr><td>${count}</td><td>${strike}</td><td>${ball}</td><td>${array}</td></tr>`

};

/* 숫자입력판 UP/DOWN버튼 */
//누르면 number[i] 숫자++,--;
up1.addEventListener("click", function(){
  const num = document.getElementsByName("number1")[0];
  let a;
  if(num === null) a= 0;
  else             a= Number(num.value);
  a = a + 1;
  if (a > 9) {
    a = 1; }
  num.value = a;
});
up2.addEventListener("click", function(){
  const num = document.getElementsByName("number2")[0];
  let a;
  if(num === null) a= 0;
  else             a= Number(num.value);
  a = a + 1;
  if (a > 9) {
    a = 1; }
  num.value = a;
});
up3.addEventListener("click", function(){
  const num = document.getElementsByName("number3")[0];
  let a;
  if(num === null) a= 0;
  else             a= Number(num.value);
  a = a + 1;
  if (a > 9) {
    a = 1; }
  num.value = a;
});
up4.addEventListener("click", function(){
  const num = document.getElementsByName("number4")[0];
  let a;
  if(num === null) a= 0;
  else             a= Number(num.value);
  a = a + 1;
  if (a > 9) {
    a = 1; }
  num.value = a;
});

down1.addEventListener("click", function(){
  const num = document.getElementsByName("number1")[0];
  let a;
  if(num === null) a= 0;
  else             a= Number(num.value);
  a = a - 1;
  if (a < 1) {
    a = 9; }
  num.value = a;
});
down2.addEventListener("click", function(){
  const num = document.getElementsByName("number2")[0];
  let a;
  if(num === null) a= 0;
  else             a= Number(num.value);
  a = a - 1;
  if (a < 1) {
    a = 9; }
  num.value = a;
});
down3.addEventListener("click", function(){
  const num = document.getElementsByName("number3")[0];
  let a;
  if(num === null) a= 0;
  else             a= Number(num.value);
  a = a - 1;
  if (a < 1) {
    a = 9; }
  num.value = a;
});
down4.addEventListener("click", function(){
  const num = document.getElementsByName("number4")[0];
  let a;
  if(num === null) a= 0;
  else             a= Number(num.value);
  a = a - 1;
  if (a < 1) {
    a = 9; }
  num.value = a;
});

reset.onclick=function(){
  const num1 = document.getElementsByName("number1")[0];
  const num2 = document.getElementsByName("number2")[0];
  const num3 = document.getElementsByName("number3")[0];
  const num4 = document.getElementsByName("number4")[0];
  num1.value = 0;
  num2.value = 0;
  num3.value = 0;
  num4.value = 0;
  goal = [];
  scoreTable.innerHTML=`<tr><th>회차</th><th>S</th><th>B</th><th>시도</th></tr>`
};
