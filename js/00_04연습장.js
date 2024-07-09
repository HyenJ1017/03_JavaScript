function check1(){
  const input = document.getElementById('input1');

  const n = Number(input.value); // 입력 요소의 값에서 숫자로 변환하여 n에 저장합니다.
  let answer = 0;
  /* ---------- */
  let hp = n;
  let a=0;
  let b=0;
  let c=0;
  while((c+1)*5<hp)c++;
  while((b+1)*3<=(hp-5*c))b++;
  while((a)<(hp-5*c-3*b))a++;


  console.log(a, "a*5 : ", a);
  console.log(b, "b*5 : ", b*3);
  console.log(c, "c*5 : ", c*5);
  answer=a+b+c;
  /* ---------- */
  console.log(answer);
}


/* 
  function solution(n) {
    var answer = 0;
    if(answer > 0){
        if(answer*7>=n){
            break;
        }else {answer++;}
    }else {answer++;}
    return answer;
}
 */


/* */

// array 배열을 숫자 순서대로 정렬 후 가운데 있는 요소 출력
function solution(array) {
  var answer = 0;

  array.sort(function(a,b) {return a-b})
  answer = array[((array.length - 1)/2)];
  return answer;
}