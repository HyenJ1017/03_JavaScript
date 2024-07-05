function button1(){
  const rad = document.getElementById("rad");
  const r = Number(rad.value);
  const result = document.getElementById("span1");
  let oneLine = '';

// 전체 행(row)수 = 2*r
// 최대 열(col)) = 2*r
// 반지름 r

  let a = 0;

  for( let row = 1 ; row <= r*2 ; row++ ){

    let circle = ''; // 원 그릴 여백 & *

    if ( r > row ) {  // 각 행마다 재 정의
      a = Math.floor(Math.sqrt(r*r - (r-row)*(r-row)));
    } else {
      a = Math.floor(Math.sqrt(r*r - (row-r)*(row-r)));
    }
    let w = a * 2;
    let b = r - a;

    //왼쪽여백 &nbsp; 넣기
    for( let i = 0 ; i < b ; i++){
      circle += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    circle += "&nbsp;" + "*";

    // 원 가운데 &nbsp; 넣기
    for( let i = 0 ; i < w ; i++){
      circle += "&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    circle += "*<br>";

    oneLine += circle;

  }

  result.innerHTML=oneLine;

}