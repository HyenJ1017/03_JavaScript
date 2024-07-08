
/**  break 확인 */
function check1(){

  // 1부터 10까지 1씩 증가하는 반복문
  // 단, 5를 출력한 후 멈춤
  for(let num = 1 ; num <= 10 ; num++){
    console.log(num);

    if(num === 5) break;
    
  }

}

/** 무한반복 멈추기 */
function check2(){

  let sum = 0; // 합계 저장하는 변수

  // while문은 () 내 조건이 true일 때 반복을 수행
  // -> true라고 작성하면 조건식이 false가 되는 경우가 없음
  //  -> 무한 반복

  // * 무한 반복하는 코드에는 break를 포함한 if문을 작성해서
  // 종료 조건을 만들어 두어야만 한다!!!!!
  while(true){

    const value = prompt("숫자입력"); // 취소 -> null

    //취소 클릭 시 반복 종료
    if(value === null) break;

    // 확인 클릭 시 sum에 입력한 숫자를 누적
    sum += Number(value);

  }

  alert ("합계 : " + sum);

}

/* continue 확인 */
function check3(){
  // 1부터 20까지 1씩 증가하는 반복ㅁㄴ
  // 단, 3의 배수는 건너뛰기
  
  for (let num = 1 ; num <= 20 ; num++){
    if(num % 3 === 0) continue;
    console.log(num);
  }
}


/* continue 확인2 */
function check4(){

  //0123456789를 5줄 출력
  //단, 1번 줄에서는 1 제외
  //    2번 줄에서는 2 제외

  for(let row = 1 ; row <= 5 ; row++){

    let str = '';
    for(let col = 1; col<=9; col++){ // 열제어
      if(row===col) continue;
      str += col; // 이어쓰기
    }

    console.log(str); //한줄출력

  }
}


//-------------------------------------------------------

/* UP & DOWN GAME */

function startGame() {
  // 게임할 숫자 범위
  const down = document.getElementById('inputGame');

  // 맞춰야 하는 난수 발생
  const answer = Math.floor(Math.random()*Number(down.value)) +1;
  /* console.log(answer); */ // delet after test

  // 정답 시도 횟수를 세기 위한 변수 선언
  let count = 0;

  // prompt에 출력할 문자열
  let u = 1;
  let d = Number(down.value);
  let str = `${u}부터 ${d} 사이 숫자 입력`;

  while(true){  //무한반복

    // 숫자만 정상 입력한다고 가정
    let input = prompt(str);

    if(input === null){
      alert("게임포기");
      break;
    }

    /* 숫자 입력 후 확인 클릭 시 */
    const value = Number(input); // 입력 받은 값을 숫자로 변환

    /* 숫자가 아닌 값을 입력한 경우 */
    // NaN (Not a Number : 숫자가 아니다)
    // isNaN(값) : 값이 NaN이면 true
    if( isNaN(value)){
      alert("숫자만 입력 해 주세요");
      continue;
    }

    if(value < u || value >d){
      alert(`${u}부터 ${d} 사이 숫자를 입력해 주세요`);
      continue;
    }

    // 정답을 맞추기 위한 시도를 하였으므로
    count++;

    /* 정답인 경우 */
    if(value === answer){
      alert(`정답!! (${answer}) / 시도 횟수 : ${count}`);
      break;
    }

    /* 정답이 아닌경우 */
    if(value < answer ){
      u = value;
      str = `${u}부터 ${d} 사이 숫자 입력 / 시도횟수 : ${count}`;
    } else {
      d = value;
      str = `${u}부터 ${d} 사이 숫자 입력 / 시도횟수 : ${count}`;
    }

  }
}
