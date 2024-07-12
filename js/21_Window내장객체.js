/* setTimeout 확인 */
const check1 = document.querySelector("#check1");

check1.addEventListener("click", () => {

  console.log("클릭 즉시 출력되는 문자열");
  
  /* 
  setTimeout = 비동기함수,  종료를 기다리지 않고 문자열2 출력
   */
  window.setTimeout(()=>{                             // window. 생략가능
    console.log("3초 후에 출력되는 문자열");
  }, 3000);                                           // 3000ms = 3s
  
  console.log("클릭 즉시 출력되는 문자열2");

  setTimeout(()=>{
    console.log("1초 후 출력되는 문자열");
  }, 1000);

  setTimeout(()=>{
    console.log("2초 후 출력되는 문자열");
  }, 2000);
});

/* ************************************************************* */
/* setInterval 확인 */

// 즉시실행함수
//(()=>{})();
(()=>{
  const clock = document.querySelector("#clock");

  clock.innerText = new Date();                       // new Date() : 시간객체 Date, 현재시간을 저장한 객체 생성

  /* 1초가 지날 때 마다 #clock요소의 내부 내용으로 현재시간을 대입 */
  setInterval(()=>{clock.innerText = new Date();}, 1000);
})();