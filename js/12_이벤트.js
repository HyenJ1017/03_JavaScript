/* 인라인 이벤트 모델 + this 확인 */
function check1(btn){
  //매개 변수 btn : 함수 호출 시 ()안에 작성된 check(this)의 this가 대입됨
  // btn === this === 이벤트가 발생한 요소(div.my-btn1)
  console.log(btn);

  // 클릭된 요소(btn)에 작성된 내용이 숫자이면 1 증가 아니면 0을 대입
  // NaN : 숫자아님, inNaN(value) : 숫자 아니면 true, Number(value) : 문자->숫자변환

  // Number(btn.innerText)
  // -> Number("인라인 이벤트 모델 확인")
  //  -> NaN
  if(isNaN(Number(btn.innerText))) {
    btn.innerText = 0;
  } else {
    btn.innerText++;
    // ++ 증감 연산자는 오로지 number 타입에만 사용 가능!
    // -> 피연산자가 숫자형태의 문자열인경우 강제로 숫자 타입으로 바꿔서 연산을 수행
    // btn.innerText++;                      === "0"++;    ===   0++;     ===  1
    // btn.innerText = btn.innerText + 1;    === "0"+1;    ===  "0"+"1";  === 01
  }

}

/* 고전 이벤트모델 확인 */

// html 파일에서 ID가 test1a인 요소를 얻어와 test1a변수에 저장
const test1a = document.querySelector("#test1a");

/* 고전이벤트모델작성법

  요소.이벤트리스터 = 이벤트핸들러
*/
// function(){} : 익명함수(이름이없는함수)
// -> 보통 이벤트 핸들러 작성 시 많이 사용됨
test1a.onclick = function(){
  console.log(this);
  alert("A버튼 클릭됨");
}

/* 고전 이벤트 모델 제거 */

const test1b = document.querySelector("#test1b");

test1b.onclick = function(){

  // null : 참조하는게 없다
  //  -> 유사 의미로 : 없다

  test1a.onclick=null;
  alert("확인버튼 클릭 이벤트 제거");
}

/* 고전 이벤트 모델 단점 확인 */
const test1c = document.querySelector("#test1c");

// DOM 요소는
// onclick, omchange 같은 이벤트 리스너가 필드(변수)로 하나씩 존재함
// -> 변수는 마지막으로 대입된 값으로 덮어씌워진다는 특징이 있다.

test1c.onclick = function(){
  test1c.style.backgroundColor = "red";
}

test1c.onclick = function(){
  test1c.style.color = "green";
}


/* ****************************************************************** */
/* 표준 이벤트 모델 */
/* [작성법]
  - 요소에 이벤트 리스너를 추가하는 형식

  요소.addEventListener("이벤트종류", 이벤트핸들러);

  * 이벤트 종류   : click, change, submit, keydown, ...

  * 이벤트 핸들러 : 감지되었을때 수행 할 함수
*/

const test2 = document.querySelector("#test2");

/* #test2 클릭시 투명해지게 만들기 */
test2.addEventListener("click", function(){

  // 투명도 1 -> 0 으로 0.05씩 감소

/* 
  - JS는 inline style로 작성 된 css값만 읽어올 수 있다.
  - JS는 inline style로만 css코드를 추가 할 수 있다.
 */

  // 1) 현재(current) 요소에 inline style로 작성된 투명도 얻어오기
  let curr = test2.style.opacity;

  console.log("curr : ", curr); //  처음엔 빈칸''

  // 2) 처음 클릭한 경우 curr에 1 대입
  if ( curr === '' ) curr=1;

  // 3) 투명도를 0.05 낮춰서 대입
  test2.style.opacity = curr - 0.2;

  // 4) 투명도가 음수가 되었을 때 다시 1로 변경하는 함수
  if ( test2.style.opacity < 0 ) test2.style.opacity=1;
  
})

/* #test2 클릭 시 숫자 카운트 */
test2.addEventListener("click", function(){

  // test2 요소의 내용을 숫자로 바꾸고 1 증가
  test2.innerText++;
})

/* ************************************************************* */
/* 클릭한 버튼에 작성된 색으로 배경색 변경하기 */

// 배경색이 변해야 하는 요소
const result3 = document.querySelector("#result3");

// 버튼 모두 얻어오기
// -> 각각의 '인덱스'가 실제 HTML 버튼요소
// -> 버튼을 묶어서 저장중인 배열 btns는 요소가 아니다.
// 요소.addEventListener() 는 요소에게만 사용할 수 있다.
const btns = document.querySelectorAll(".button-container3 > button");

// btns에 저장된 버튼요소 하나씩 접근하기
for(let i= 0; i<btns.length ; i++){             //  for 문 자체는 문서 열자마자 실행됨

  // 각 버튼 클릭시
  btns[i].addEventListener("click", function(){

  // 각 버튼에 작성된 내용 얻어오기
  const color = btns[i].innerText;

  // #result3에 배경색을 color 변수에 저장된 값으로 변경
  result3.style.backgroundColor = color;
  })

}