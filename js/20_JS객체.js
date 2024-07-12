/* JS 객체 생성 + 다루기

  - JS 객체 : {k:v, k:v, k:v ...}

  (중요!!) k(Key)는 무조건 string !!!
  -> "Key" 또는 'key' 또는 key
    => 따옴표 안써도 "key"(스트링으로)로 해석함 !!!

  - JS객체를 콘솔에 출력하는 경우
    입력한 순서와 관계없이 key "오름차순"으로 정렬되어 출력됨
    => 순서로 코드짜면 안됨 !!!

  [JS 객체 생성 방법]
    1. {} : JS 객체의 리터럴 표기법을 이용한 생성

    2.생성자 함수 : 생성자 + new 연산자를 이용한 생성
*/

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {

  // 1. 객체 생성
  const product = {
    "productName" : "새우깡",
    'brand'       : "농심",
    price         : 1500      // ""없지만 string으로 취급되고 있음
  };

  // console.log(product);

  // 2. Key를 이용하여 원하는 Value만 얻어오기
  // -1) 객체명 . key
  // -2) 객체명["key"]
  console.log(product.productName);
  console.log(product.brand);
  console.log(product.price);
  
  console.log(product["productName"]);
  console.log(product["brand"]);
  console.log(product["price"]);
  
  // 3. 객체, 특정Key의  Value 수정하기
  // -1) 존재하는 key에 새로운 값 대입 ==> 값 덮어쓰기
  product.price = 2000;
  
  console.log(`새로운 가격 : ${product.price}`);
  
  // 4. 객체에 새로운 key : value 를 추가하기
  // -1) 객체명.새로운key    = 새로운value
  // -2) 객체명["새로운key"] = 새로운value
  product.discount = 0.2;
  product["store"]="GS25";

  console.log(product);

  // 5. 객체 내에서 특정 key 삭제하기
  // -1) delete 객체명.key
  //       => 객체에서 K:V 삭제
  delete product.productName;   // "productName" : "새우깡" 삭제

  console.log(product);


});


/* ********************************************* */
/* 메서드() 확인 */
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {

  const person = {};                    // 비어있는 객체 person 생성

  // 비어있는 객체에 필드(==변수) K:V 추가
  person["name"] = "홍길동";
  person.age     = 20;

  // 비어있는 객체에 메서드(==함수 ) K:V 추가
  // 객체명.새로운Key = function(){};
  //                     -> 화살표함수 안먹힘.
  person.introduce = function(){
    const gender = '남자';

    // 홍길동은 20세 남자 입니다.
    alert(`${this.name}은 ${this.age}세 ${gender} 입니다.`);
  };

  /*  this 참조 변수
  - 작성된 위치마다 의미가 다름

  1) 객체 내 함수(매서드)에서 this == 같은 객체(함수의 형제);
  2) 이벤트 핸들러 내에서 this
    <button onclick="testFn(this)">테스트버튼</button>
    여기서 this == 이벤트가 발생한 요소(클릭된 button)
  3) 화살표 함수 내에서 this == Window 객체 (위에서 화살표 안쓴이유)
    ( 화살표 함수 에서는 this를 못쓴다고 생각 !!! )
  */

  // 메서드 수행(객체에 저장된 함수를 호출)
  person.introduce();

  // 메서드는 객체에 종속된(속한) 함수
  // -> 꼭 객체명.함수명() 형식으로 호출해야 한다.
  // intoduce();         -> 안됨
  // person.introduce(); -> 됨

});

/* ********************************************* */
/* ============================================== */
/* 생성자 함수 */

// 학생(student) 생성자 함수 정의
function Student(inputGrade, inputBan, inputCode, inputName){

  // 여기(함수)서 this == 생성되는 Student 객체

  // 객체변수
  this.grade  = inputGrade; // 전달받은 inputGrade 를 생성되는 객체 grade의 value로 대입
  this.ban    = inputBan;
  this.number = inputCode;
  this.name   = inputName;

  // 메서드(객체의 함수)
  this.information = function(){
    let str = `${this.grade}학년 ${this.ban}반 ${this.number}번 ${this.name}`;
    return str; // student.information 하면 str값 반환해줌;
  };
};

/* ********************************************* */
/* 입력 값을 이용해 Student 객체를 생성하여 배열에 저장 */

/* 객체 배열 : 배열 내 요소가 모두 객체(객체를 저장한 배열) 
-> [ {}, {}, {}, {}, ...
  */

const inputGrade = document.querySelector("#inputGrade");
const inputBan   = document.querySelector("#inputBan");
const inputCode  = document.querySelector("#inputCode");
const inputName  = document.querySelector("#inputName");
const addStudent = document.querySelector("#addStudent");

// todtjdehls Student 객체를 저장 할 배열 선언
const studentList = [];

addStudent.addEventListener("click", ()=>{

  // input에 작성된 값을 이용해 학생 객체 생성
  const std = new Student(inputGrade.value, inputBan.value, inputCode.value, inputName.value)

  // 생성된 Student객체 std를 studentList에 저장
  // * 배열명.push(값) : 배열 마지막 요소로 값 추가
  studentList.push(std);

  // 이전 입력값 삭제(편의성)
  inputGrade.value = '';  // 빈 문자열을 value에 대입 해 삭제한 효과를 냄
  inputBan.value   = '';
  inputCode.value  = '';
  inputName.value  = '';
});

/* 학생목록 출력하기 */
/* ********************************************* */
const printStudents = document.querySelector("#printStudents");
const result = document.querySelector("#result");

printStudents.addEventListener("click", () => {

  result.innerHTML = '';                            // 이전 내용삭제

  for ( let i = 0 ; i < studentList.length ; i++ ){ // studentList[] 에 존재하는 모은 학생 객체 접근하기
    
    const info = studentList[i].information();      //학생 정보를 한줄로 반환하는 메서드 호출

    const li = document.createElement("li");        // li 태그 생성
    li.innerText = info;                            // li 의 내용으로 info 대입
    result.append(li);                              // result의 마지막 자식으로 li를 추가

  }
});

/* ********************************************* */
/* ============================================== */
/* <button id="checkJSON">JSON 확인</button> */
const checkJSON = document.querySelector("#checkJSON");
checkJSON.addEventListener("click", () => {

  // JS객체 생성
  const obj = {};
  obj.id = "user01";
  obj.pw = "pass01";
  obj.name = "짱구";
  obj.src = "서울시 중구";
  obj.email = "user01@naver.com";
  obj.point = 10000;

  console.log(obj);

  // JS객체 -> JSON (문자열) 변환
  const json1 = JSON.stringify(obj);

  console.log("JSON 확인 : ", json1, typeof json1);

  // JSON 생성
  const json2 = '{"menu":"김밥", "price":3500, "cal":485}';

  console.log("JSON2 확인 : ", json2, typeof json2);

  // JSON(문자열) -> JS객체 변환
  const obj2 = JSON.parse(json2);

  console.log("OBJ2 확인 : ", obj2, typeof obj2);

  // 기상청 서버에 7/12 오전 10시 전국 미세먼지 농도를 JSON으로 받아오기
  fetch('https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=BTjX5Rqk5SZSwrW687YxxqoqoH7FbYV/BKqfde1PPn0jiIoOy6aYAUb1MuK7h9izWzM/YX6SVOjBBUMIuwRRIg==&returnType=JSON&numOfRows=100&pageNo=1&searchDate=2024-07-12&InformCode=PM10')
  .then( response => response.json())
  .then( result => {
    console.log(result)
  } );

});   