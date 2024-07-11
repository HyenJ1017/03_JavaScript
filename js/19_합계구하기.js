/* 계산하기 */
const calc = document.querySelector("#calc");

calc.addEventListener("click", () => {

  // 계산버튼 클릭시점에 존재하는 쩜인풋-넘버 모두 얻어오기
  const numbers = document.querySelectorAll(".input-number");

  let sum = 0;
  for( let i = 0 ; i < numbers.length ; i++ ){
    sum += Number(numbers[i].value);
  }

  alert(`합계 : ${sum}`);
});

/* 추가하기 */
const addBtn = document.querySelector("#add");
const container = document.querySelector(".container");

addBtn.addEventListener("click", () => {

  /* 추가버튼 클릭시
  만들거 : div, input, span
  container의 마지막 자식으로 추가
  */

  // 1. div 만들기
  const div = document.createElement("div");
  div.className = "row";
  
  // 2. input 만들기
  const input = document.createElement("input");
  input.type = "number";
  input.className = "input-number";
  
  // 3. span 만들기
  const span = document.createElement("span");
  span.className = "remove-row";
  span.innerHTML = "&times;"; // HTML 특수문자는 innerHTML 이용

  // span이 만들어 질때 클릭동작을 같이 정의해 줘야함!!!
  span.addEventListener("click", () => {
    // 클릭된 x버튼의 부모를 remove
    span.parentElement.remove();
  });

  // 4. 부품 조립
  // 요소.append(a,b,c...) 마지막 자식으로 추가
  div.append(input, span);

  // 5. 조립된 부품을 컨테이너에 추가
  container.append(div);

});

/* 제거하기 */
//const remove = document.querySelectorAll(".remove-row");
/* 문서 생성할때 불러오는 코드여서 
  여기있는 remove로 암만 클릭 활성함수를 만들어봐야
  불러왔던 요소가 없었어서 일 안함 */
