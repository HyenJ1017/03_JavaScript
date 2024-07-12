
// 숫자들어갈 판
const sectionMain = document.querySelector("#sectionMain");
//버튼
const startBtn = document.querySelector("#startBtn");
// 넣을 박스 클래스
//numberBox
// 누르면 색변함
// 6개 이상 클릭하면 alert

// 버튼 누르기 전부터 "투명한, 선택안되는"숫자박스 45개 생성
let count =1;                             // 박스생성용변수
let boxCount = 0;                         // 전체선택박스

for (let i = 0 ; i < 45 ; i++ ){
  const box = document.createElement("div");
  box.className= `numberBox box${count}`;
  box.innerText= count;
  sectionMain.append(box);
  document.querySelector(`.box${count}`).addEventListener("click", function(){

    // 전체 박스 갯수가 6개 초과면 리턴, 경고
    // 클릭하면 색갈 바뀜
    // 번갈아가면서 바뀌어야함
    // 전체 선택박스 갯수(boxCount)도 새야하고
    // 번갈아질때 전체 선택박스도 빼줘야함
    if (boxCount > 5){
      if(this.style.backgroundColor !== "pink"){
        alert("숫자는 최대 6개까지 클릭할 수 있습니다.");
        console.log(boxCount);
        return;
      } else {
        this.style.backgroundColor="white";
        boxCount--;
        return;
      }
    } else {
      if(this.style.backgroundColor !== "pink"){
        this.style.backgroundColor="pink";
        boxCount++;
        console.log(boxCount);
      }else{
        this.style.backgroundColor="white";
        boxCount--;
        console.log(boxCount);
      }
    }

  });
  count++;
}

//버튼 누르면 (박스 색갈 온, 선택=가능)
startBtn.addEventListener("click", ()=>{
  const array = document.querySelectorAll("#sectionMain > div");
  for(let i=0 ; i<array.length ; i++){
    array[i].style.border="1px solid black";
    array[i].style.color="black";
  }
});