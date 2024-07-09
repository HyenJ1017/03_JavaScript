// 준비한 이미지 파일명을 저장할 배열
const images = ["YasuoQ.png", "YasuoW.png", "YasuoE.png", "YasuoR.jpg", "SummonerTeleport.webp", "SummonerFlash.webp"]

// 문서전체에 keydown 이벤트를 추가
document.addEventListener("keydown", function(e){
  // e : 이벤트객체
  // e.key : 입력한 키
  console.log(e.key);
})

// 클래스가 pk인 요소를 모두 얻어와 배열 형태로 저장
const key = document.querySelectorAll('.key');

for(let i = 0; i < key.length ; i++){

  document.addEventListener("keydown", function(e){

     if(e.key === key[i].id){
      //key[i].style.backgroundColor="gray";
      key[i].style.backgroundImage = `url("../images/13_입력된키확인/${images[i]}")`;
      //key[i].style.fontSize="2em";
      key[i].style.color = "rgba(0,0,0,0)";

     }

  })
}

for(let i = 0; i < key.length ; i++){

  console.log(`key2[${i}] : ${key[i].innerText}`);

  document.addEventListener("keyup", function(e){

     if(e.key === key[i].id){
      //key[i].style.backgroundColor="white";
      key[i].style.backgroundImage = "none";
      //key[i].style.fontSize="1em";
      key[i].style.color = "rgba(0,0,0,1)";
     }

  })
}

/* 강사님 풀이_1 (keyup 생략)
document.addEventListener("keydown", function(e){

  switch(e.key){
    case 'q' : keys[0].style.backgroundColor = "pink"; break;
    case 'w' : keys[1].style.backgroundColor = "pink"; break;
    case 'e' : keys[2].style.backgroundColor = "pink"; break;
    case 'r' : keys[3].style.backgroundColor = "pink"; break;
  }
});
*/

/* 강사님 풀이_2 (keyup 생략)
document.addEventListener("keydown", function(e){
  let index; // 인덱스를 저장할 변수

  switch(e.key){
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default : return; // 다른 키 입력 시 종료
  }

  keys[index].style.backgroundColor = "pink";   // default값 설정 안해두면 index자리에 undifined 들어가서 오류남
  
});
*/

/* 강사님 풀이_3 대문자도 같이
document.addEventListener("keydown", function(e){
  let index;

  // 문자열.toUpperCase() : 문자열을 대문자로 변환
  // 문자열.toLowerCase() : 문자열을 소문자로 변환

  switch(e.key.toLowerCase()){
    case 'q': index = 0; break;
    case 'w': index = 1; break;
    case 'e': index = 2; break;
    case 'r': index = 3; break;
    default : return; // 다른 키 입력 시 종료
  }

  keys[index].style.backgroundColor = "pink";

});
*/


/* 마우스 커서 이미지 만들기 */

// left -100으로 숨겨둔 이미지
const cursorImage = document.querySelector('#cursorImage');

// 문서전체에 "mousemove" 마우스가 움직였을 때 감지 추가
document.addEventListener("mousemove", function(e){
  // console.log(e);
  // e.pageX : 가로방향 마우스 위치(왼쪽에서 떨어진 px)
  // e.pageY : 세로방향 마우스 위치(위쪽에서 떨어진 px)

  cursorImage.style.left = `${e.pageX-5}px`;
  cursorImage.style.top = `${e.pageY+5}px`;
})