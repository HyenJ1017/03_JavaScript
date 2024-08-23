const menuselect1 = document.querySelector("#menuselect1");
const menuselect2 = document.querySelector("#menuselect2");
const menuselect3 = document.querySelector("#menuselect3");

const answerDiv1 = document.querySelector("#answerDiv1");
const answerDiv2 = document.querySelector("#answerDiv2");
const answerDiv3 = document.querySelector("#answerDiv3");

const settingBtn = document.querySelector("#settingBtn");
const backgroundWhite = document.querySelector(".backgroundWhite");
const whiteModeBtn = document.querySelector("#whiteModeBtn");
const darkModeBtn = document.querySelector("#darkModeBtn");
const settings = document.querySelector("#settings");

/* *** 좌측메뉴 펼치기 *** */
menuselect1.addEventListener("click", () => {
  
  //링크메뉴 펼치는 버튼
  // 1) 2번째클릭시
  // 2) 내부에 a태그가 이미 있다면
  if ( answerDiv1.innerHTML !== "") {
    answerDiv1.innerHTML = "";
    return;
  }

  answerDiv1.innerHTML =
    '<a href="*" class="link1">linkservlet1</a><br>' +
    '<a href="*" class="link1">linkservlet2</a><br>' +
    '<a href="*" class="link1">linkservlet3</a><br>';

});

menuselect2.addEventListener("click", () => {

  if ( answerDiv2.innerHTML !== "") {
    answerDiv2.innerHTML = "";
    return;
  }

  answerDiv2.innerHTML =
    '<a href="*" class="link1">linkservlet4</a><br>' +
    '<a href="*" class="link1">linkservlet5</a><br>' +
    '<a href="*" class="link1">linkservlet6</a><br>';

});

menuselect3.addEventListener("click", () => {

  if ( answerDiv3.innerHTML !== "") {
    answerDiv3.innerHTML = "";
    return;
  }

  answerDiv3.innerHTML =
    '<a href="*" class="link1">linkservlet7</a><br>' +
    '<a href="*" class="link1">linkservlet8</a><br>' +
    '<a href="*" class="link1">linkservlet9</a><br>';

});

/* *** 세팅메뉴열기 *** */
settingBtn.addEventListener("click", () => {

  if(settingBtn.style.backgroundColor == "green"){
    settingBtn.style.backgroundColor = "white";
    settingBtn.style.color = "black";
    settins.innerHTML = '';
    
  }else{
    settingBtn.style.backgroundColor = "green";
    settingBtn.style.color = "white";

    settings.innerHTML =
      '<div class="fixed-container3 backgroundWhite" id="settingBox">' +
        '<p>SETings</p>' +
        '<div class="btnDiv">' +
          '<button class="setBtn" id="whiteModeBtn">White</button>' +
          '<button class="setBtn" id="darkModeBtn">Dark</button>' +
        '</div>' +
      '</div>' ;

  }

});

darkModeBtn.addEventListener("click", () => {
  backgroundWhite.style.backgroundColor = "#272829";
  backgroundWhite.style.color = "white";
});


whiteModeBtn.addEventListener("click", () => {
  backgroundWhite.style.backgroundColor = "white";
  backgroundWhite.style.color = "black";
});




