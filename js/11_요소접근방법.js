function classTest(){

  /* 유사 배열이란?
    배열처럼 index, length를 가지고 있으나
    배열 전용 기능(메서드)를 제공하지 않음
  */


  // 클래스가 cls-test인 요소를 모두 얻어와
  // HTML Collection (유사배열) 형태로 얻어옴
  const divs = document.getElementsByClassName("cls-test");

  for (let i = 0; i<divs.length ; i++){
    console.log(divs[i].innerText);
  
    divs[i].style.backgroundColor = divs[i].innerText;
  }

}


/* ---------------------------------------------------------- */
/* input에 입력된 숫자 모두 얻어와 합계 구하기 */
function classTest2() {

  /* input 요소에 입력된 값 얻어오는 방법
    -> input요소.value

    html 요소에서 얻어온 값의 자료형은
    -> 모두 string

    합계 구하는 방법
    -> let sum = 0; 선언 후 누적

    HTML 문서에서 class 속성값이 일치하는 요소 모두 얻어오기
    -> document.getElementsClassName("class속성값")
      -> HTMLCollection (유사배열) 형태로 변환
  */

  let sum = 0;

  const input = document.getElementsByClassName("cls-test2");
  
  for(let i = 0 ; i < input.length ; i++){
    sum += Number(input[i].value);
  }

  alert(sum);
  console.log(sum);
}

function calc1() {
  const input = document.getElementsByClassName("cls-test2");
  
  for(let i = 0 ; i < input.length ; i++){
  input[i].value = Number(input[i].value) + Math.floor(Math.random()*10) ;
  }
}
// input은 태그 반만 있어서 내용 읽을때 inner 아니고 value 씀


/* ---------------------------------------------------------- */
/** 태그명으로 요소 접근하기 */
function tagNameTest() {

  /* document.getElementsByTagName("태그명") */
  const tagList = document.getElementsByTagName("li");
  // -> 요소 4개짜리 (유사)배열 반환

  for(let i = 0 ; i < tagList.length ; i++){
    // tagList[i].innerText : 작성된 내용(색상)
    tagList[i].style.color = tagList[i].innerText;
    tagList[i].style.border = `3px solid ${tagList[i].innerText}`;
  }

}


/* ---------------------------------------------------------- */
/* name 으로 요소 접근하기 */
function nameTest() {

  /* document.getElementsByName("name 속성값")
      -> NodeList (유사배열) 반환 */
  const hobbyList = document.getElementsByName("hobby");

  let str = '';   //  체크된 input의 value를 누적
  let count = 0;  //  체크된 input의 개수를 카운트

  for ( let i = 0 ; i<hobbyList.length ; i++ ){

    /* 요소.checked -> checkbox, ridio 타입 전용 속성

    요소.checked = true;  -> 해당 요소 체크
    요소.checked = false; -> 해당 요소 체크 해제
    요소.checked;         -> 체크여부 반환
                            (체크0 -> true, X -> false)
     */

    // i번째 input 요소가 체크되어 있을 경우
    if(hobbyList[i].checked === true){
      // console.log(hobbyList[i].value);     // 체크검사 **
      str += `${hobbyList[i].value} `;        // value 누적
      count++;                                // count 누적
    }
  }

  // 클래스가 name-div인 요소에 str count 출력

  // document.getElementsByClassName("name-div");
  // -> 요소가 1개밖에 없어도 배열 형태로 반환
  // 요소가 1개밖에 없음 == 0번 인덱스만 존재
  // -> 0번 인덱스만 별도 변수에 저장해서 사용
  const div = document.getElementsByClassName("name-div")[0];

  div.innerHTML
  = `${str} <br><br>선택된 취미 개수 : ${count}개`;
}


/* ---------------------------------------------------------- */
/** CSS 선택자로 접근하기 */
/*
5. CSS 선택자로 접근하기
1) document.querySelector("CSS 선택자");
-> 선택자가 선택한 요소 중 첫 번째 요소를 반환

2) document.querySelectorAll("CSS 선택자");
-> 선택한 요소 모두를 배열(NodeList, 유사배열) 형태로 반환 */

function cssTest1(){

  // target-div 속성값이 css-div인 요소 하나 선택(배열X)
  const container = document.querySelector('[target-div = css-div]');

  // 이전것들과 다르게 (유사)배열이 아님
  container.style.width = "200px";
  container.style.height = "200px";
  container.style.border = "10px solid orange";

  // target-div 속성 값이 css-div인 요소의 자식중 div요소를 모두 선택해 얻어옴
  const divs = document.querySelectorAll('[target-div = css-div] > div');
  
  for (let i = 0 ; i < divs.length ; i++){
    divs[i].style.height = "50%";
    divs[i].style.display = "flex";
    divs[i].style.justifyContent = "center"; // .justifyContent(카멜표기법) : justify-content
    divs[i].style.alignItems = "center";
  }

  // index별로 배경색 따로 지정
  divs[0].style.backgroundColor = "pink";
  divs[1].style.backgroundColor = "skyblue";



  // divs 사용하지 말고
  // "test1"이 작성된 요소를 선택해
  // fontSize = "30px";로 변경

  // "[target-div = css-div] > div" 들 중에서 첫 번째 요소만 선택
  const test1 = document.querySelector('[target-div = css-div] > div');
  test1.style.fontSize = "30px"
}