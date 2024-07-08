
function createTable() {
  const startInput = document.getElementById("start");
  const endInput   = document.getElementById("end");

  const start = Number(startInput.value);
  const end = Number(endInput.value);

  const theadRow = document.getElementById("thead-row");
  const tbody = document.getElementById("tbody");

  let danName = '';    //const start = Number(startInput.value);
  for (let dan = start ; dan <= end ; dan++ ) {
    danName += `<th>${dan}단</th>`;  //theadRow.innerHTML += `<th>${dan}단</th>`;
  }

  theadRow.innerHTML=danName;
  
  let tbody2 = '';  //const end   = Number(endInput.value);
  for( let num = 1 ; num <= 9 ; num++ ){
    let danSub = '';
    for( let dan2 = start ; dan2 <= end ; dan2++ ){
      danSub += `<td>${dan2} x ${num} = ${dan2 * num}</td>`;//tr += `<td>${dan} x ${num} = ${dan * num}</td>`
    }
    tbody2 += `<tr>${danSub}</tr>`;
  }

  tbody.innerHTML=tbody2;
}

