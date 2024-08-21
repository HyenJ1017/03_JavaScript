/* 요소 */
const display         = document.querySelector("#display");
const startBtn        = document.querySelector("#startBtn");
const recordBtn       = document.querySelector("#recordBtn");
const resetBtn        = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

// [0]:분 / [1]:초 / [2]:1/100초
const timeList        = document.querySelectorAll("#display > span");

let count = 0;                                 // 1/100초 마다 1씩 증가할 변수

// START 버튼을 눌렀을 때
// 반복되는 setInterval()을 저장 할 용도의 변수
let currentInterval;


/* ************************************************************ */
startBtn.addEventListener("click", () => {

  //일시정지버튼
  // 1) 이전에 start버튼이 클릭된적이 있어서 비어있는 변수가 아니라면...
  // 2) start 버튼에 작성된 내용이 "pause"인 경우
  // - 1) if ( currentInterval !== undefined ) {    clearInterval(currentInterval);  }
  if ( startBtn.innerText === "PAUSE" ) {
    clearInterval(currentInterval);            // start를 많이 눌러서 interval이 많이 생성되는 것도 막아줌
    startBtn.innerText = "START";
    recordBtn.disabled = true;                 // record 버튼 활성화 -> 비활성화
    return;                                    // 일시정지 할 꺼니까 interval 지운채로 종료
  }

  /* 10ms 마다 count ++ */
  currentInterval = setInterval(()=>{
    count++;
    output();                                  // 시계 화면출력 함수 호출, 10ms마다
  }, 10);

  // start 버튼 클릭시 버튼 내용을 PAUSE로 변경
  startBtn.innerText = "PAUSE"

  // record 버튼 비활성화 -> 활성화
  recordBtn.disabled = false;
});

/* ************************************************************ */

/* 시계 화면 출력 함수 */
function output (){

  // 화면에 출력될 시간을 저장할 변수
  let minute = Math.floor( count / 100 / 60 );
  let second = Math.floor( count / 100 % 60 );
  let ms     = count % 100;

  // 0을 붙이는 함수를 호출
  minute = attachZero(minute);
  second = attachZero(second);
  ms     = attachZero(ms);

  // 화면 출력
  /* 계산한 minute 값이 화면의 "분"이 다를때 최신화 */
  if(minute != timeList[0].innerText){
  timeList[0].innerText = minute;
  }

  /* 60초 달릴때마다 최신화 */
  if( ms == '00'){
  timeList[1].innerText = second;
  }

  timeList[2].innerText = ms;

};

/** 전달받은 수가 10 미만인 경우 앞에 "0" 분여서 반환 */
function attachZero(num){
  if( num < 10 ) return "0"+num;
  return num;
};


/* ************************************************************ */
/* 리셋 버튼이 눌리면
  setInterval 멈춰줘야함.
  화면에 표시된 시간을 000000으로 초기화
*/
resetBtn.addEventListener("click", () =>{

  /* [window.]clearInterval( setInterval()이 저장된 변수 )
    - 전달인자에 작성된 setInterval()을 멈춤(지움)
  */
  clearInterval(currentInterval);
  count=0;
  output();
  startBtn.innerText = "START";
  recordContainer.innerText = '';
  recordBtn.disabled = true;                    // record 버튼 활성화 -> 비활성화
});

/* ************************************************************ */
recordBtn.addEventListener("click", () => {

  // #display에 작성된 내용 얻어오기 1,2,3

  // innerHTML : HTML 문서에 작성된 내용 그대로 얻어옴
  // innerText : 태그, 주석 무시하고 Text(내용)만 얻어옴
  // textContent : Text를 얻어오는데 공백문자(enter, space)도 포함
  //console.log( display.innerHTML );
  //console.log( display.innerText );
  //console.log( display.textContent );
  const li = document.createElement("li");
  li.innerText = display.innerText;
  recordContainer.prepend(li);                    // recordContainer의 첫 번째 자식으로 추가
});

