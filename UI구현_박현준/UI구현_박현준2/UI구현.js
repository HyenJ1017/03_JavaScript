const start = document.querySelector('.button1');


start.onclick=function(){

  const Output = document.querySelector('.outSpan');
  const inputColor = document.querySelector('.inputTc');
  const inputBc = document.querySelector('.inputBc');

  const numbers = document.querySelectorAll(".input1");

  Output.style.width=`${numbers[0].value}px`;
  Output.style.height=`${numbers[1].value}px`;
  Output.style.fontSize=`${numbers[2].value}px`;
  
  Output.style.color=inputColor.value;
  Output.style.backgroundColor=inputBc.value;
  
  const text = document.getElementById("inputText")
  if(text.value.length === 0 ) Output.innerText="입력값 없음";
  else Output.innerText = text.value;

  Output.style.fontWeight='';
  const bold = document.querySelector("[name = fontBold]:checked");
  if(bold === null) Output.style.fontWeight='bold';
  else Output.style.fontWeight=`${bold.value}`;

  const align = document.querySelector("[name = align]:checked");
  if(align === null) Output.style.textAlign='right';
  else Output.style.textAlign=`${align.value}`;

  const justify = document.querySelector("[name = inputJc]:checked");
  if(justify === null) Output.style.justifyContent='center';
  else Output.style.justifyContent=`${justify.value}`;
  
}

