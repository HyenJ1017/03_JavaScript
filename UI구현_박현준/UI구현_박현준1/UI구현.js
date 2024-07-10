const inputColor = document.querySelector('.inputTc');
const inputBc = document.querySelector('.inputBc');
const Output = document.querySelector('.outSpan');


function btn1(){

  Output.style.width=`${document.getElementById("inputWidth").value}px`;
  Output.style.height=`${document.getElementById("inputHeight").value}px`;
  Output.style.fontSize=`${document.getElementById("inputFontSize").value}px`;
  
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

