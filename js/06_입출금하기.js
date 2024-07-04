/* 전역변수 (JS 전체에서 공용으로 사용할 변수)*/

// 잔액이 출력되는 span요소
const output = document.getElementById("output");

// 금액이 입력되는 input 요소
const amount = document.getElementById("amount");

//잔약기록변수(초기값 10000)
let balance = 10000;

//비밀번호 저장 변수(초기비밀번호 1234)
let password = '1234';


//-----------------------------------------------------------

// 함수 내부에 작성되지 않은 코드는 HTML 로딩시 자동으로 해석된다.
output.innerText=balance;

amount.value = ''; // amount에 빈칸 삽입

function test(){
  // prompt("내용")
  // - alert() 처럼 알림창이 브라우저에 열리면서
  // 추가적으로
  // 문자열 입력칸 + 확인 + 취소 버튼이 구성된 형태

  // 확인 클릭 : 입력한 내용 반환
  // 취소 클릭 : null 반환

  const pw = prompt("비밀번호를 입력하세요");

  console.log("pw : ", pw);

  if(pw === null){// 취소 누를 경우
    alert("비밀번호 입력 취소됨");
    return;
  }

  // pw: 입력받은값
  // password : 전역변수("1234")
  if(pw !== password){// 입력된 비밀번호가 password와 같지 않다면
    alert("비밀번호 불일치");
    return;
  }

  // 입력한 비밀번호가 틀렸으면 이전에 리턴됬음
  alert("햅격");
}


//-----------------------------------------------------------


function deposit(){
  const money = Number(amount.value);
  balance += money;
  output.innerText = balance;
  amount.value = '';
  alert("요청된 작업이 완료되었습니다. 잔액을 확인해주세요")
}



/*  * 출금 버튼 클릭 시 prompt를 이용해 비밀번호를 입력 받기
* 비밀번호가 일치할 경우
1) 출금할 금액이 잔액(balance) 보다 큰 경우 
-> alert("출금 금액이 잔액보다 클 수 없습니다") 출력

2) 출금할 금액이 잔액(balance) 보다 작거나 같은 경우
-> 잔액(balance)에서 출금 금액만큼 감소 시킨 후
alert("OOO원이 출금 되었습니다. 남은 잔액 : OOO원") 출력

* 비밀번호가 일치하지 않을 경우
-> alert("비밀번호가 일치하지 않습니다") 출력
*/
function withdrawal(){
  const pw = prompt("비밀번호를 입력하세요");
  const money = Number(amount.value);
  if(pw === null ){
    alert("입력이 취소되었습니다");
    return;
  }
  if(pw !== password){
    alert("비밀번호가 일치하지 않습니다");
    return;
  }
  if(money > balance){
    alert("출금 금액이 잔액보다 클 수 없습니다");
    return;
  }
  balance -= money;
  output.innerText = balance;
  amount.value = '';
  alert("요청된 작업이 완료되었습니다. 잔액을 확인해주세요")
}

function rewritePassword(){
  const pw = prompt("현재 비밀번호를 입력하세요");
  if(pw === null ){
    alert("입력이 취소되었습니다");
    return;
  }
  if(pw === password){
    password=prompt("변경할 비밀번호를 입력해 주세요");
    console.log("비밀번호 변경 : " + password);
    alert("변경성공!");
    return;
  }
  alert("비밀번호가 틀렸습니다");
}    

function button1(){
  let pw2 = prompt("원하는 비밀번호를 써");
  if(pw2 === ''){
    alert("아무것도 안누르셨는데요");
    return;
  }
  if(pw2 !== null) {
  password = pw2;
  alert("변경성공!");
  console.log("비밀번호 변경 : " + password);
  }
}