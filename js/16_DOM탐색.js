/* Node 탐색 확인하기 */
const checkBtn1 = document.querySelector("#checkBtn1")
;

checkBtn1.addEventListener("click", () => {

  const test1 = document.querySelector("#test1");

  // 요소.childNodes -> 배열 형태(NodeList)로 반환
  // #test1의 모든 자식 노드 얻어오기
  const list = test1.childNodes;
  console.log(list);
  
  // c첫 번째 li 노드 선택
  console.log(list[3]);

  // 2) 요소.parentNode
  const lil = document.querySelector("#li1");
  console.log(lil.parentNode);

  // 3) 요소.firstChild : 첫 번째 자식 노드 탐색
  //    요소.lastChild  : 마지막  자식 노드 탐색

  // #test1의 첫째, 마지막 자식노드 탐색
  console.log(test1.firstChild);
  console.log(test1.lastChild);
    
  // 마지막 li 요소의 배경색을 pink로 변경
  test1.lastChild.style.backgroundColor = "pink";

  // 4) 이전 형제 노드 탐색 : previousSibling 
  //    다음 형제 노드 탐색 : nextSibling

  // list[9]의 다음, 다음 형제 노드 선택
  console.log(list[9].nextSibling.nextSibling);
  
  // list[5]의 이전, 다음 형제 노드 선택
  console.log(list[5].previousSibling.previousSibling);


});


/* Element(요소) 탬색 방법 */
const checkBtn2 = document.querySelector("#checkBtn2");

checkBtn2.addEventListener("click", () => {
  const test2 = document.querySelector("#test2");

  
  // test2의 모든 자식요소
  console.log(test2.children);
  
  // test2의 부모 요소
  console.log(test2.parentElementen);
  
  // test2의 첫번째 자식 요소
  console.log(test2.firstElementChild);
  
  // test2의 마지막 자식 요소
  console.log(test2.lastElementChild);
  
  // test2의 이전 형제 요소
  console.log(test2.previousElementSibling);
  
  // test2의 다음 형제 요소
  console.log(test2.nextElementSibling);

});
