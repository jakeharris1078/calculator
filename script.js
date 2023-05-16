'use strict';

////////////////////////////////////SELECTORS

//function buttons
const deleteBtn = document.getElementById('delete-btn');
const equalsBtn = document.getElementById('equals-btn');
const clearBtn = document.getElementById('clear-btn');
const debugBtn = document.getElementById('debug');

//number buttons
const numberButtons = document.getElementsByClassName('number-btn');
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
const btn6 = document.getElementById('btn-6');
const btn7 = document.getElementById('btn-7');
const btn8 = document.getElementById('btn-8');
const btn9 = document.getElementById('btn-9');
const btn0 = document.getElementById('btn-0');
const btnPeriod = document.getElementById('period-btn');

//operator buttons
const operatorButtons = document.getElementsByClassName('operator-btn-math');
const btnPlus = document.getElementById('btn-plus');
const btnMinus = document.getElementById('btn-minus');
const btnMultiply = document.getElementById('btn-multiply');
const btnDivide = document.getElementById('btn-divide');
const btnExponent = document.getElementById('btn-exponent');

//result display
const resultDisplay = document.getElementById('result');

//last character of display
let lastCharDisplay;

const numberConditions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const operatorConditions = ['+', '-', '*', '/', '^'];

/////////////////////////////////FUNCTIONALITY

//debug
debugBtn.addEventListener('click', function () {
  // resultDisplay.innerText = 'test';
  lastCharDisplay = resultDisplay.innerText.charAt(
    resultDisplay.innerText.length - 1
  );
  console.log(
    `lastchar is ${lastCharDisplay} type of lastchar is ${typeof lastCharDisplay}`
  );
});

clearBtn.addEventListener('click', function () {
  resultDisplay.innerText = '';
});

btn1.addEventListener('click', function () {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerHTML = '1';
  } else {
    resultDisplay.innerText += '1';
  }
});

btn2.addEventListener('click', function () {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerHTML = '2';
  } else {
    resultDisplay.innerText += '2';
  }
});

btn3.addEventListener('click', function () {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerHTML = '3';
  } else {
    resultDisplay.innerText += '3';
  }
});

btn4.addEventListener('click', function () {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerHTML = '4';
  } else {
    resultDisplay.innerText += '4';
  }
});

btn5.addEventListener('click', function () {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerHTML = '5';
  } else {
    resultDisplay.innerText += '5';
  }
});

btn6.addEventListener('click', function () {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerHTML = '6';
  } else {
    resultDisplay.innerText += '6';
  }
});

btn7.addEventListener('click', function () {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerHTML = '7';
  } else {
    resultDisplay.innerText += '7';
  }
});

btn8.addEventListener('click', function () {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerHTML = '8';
  } else {
    resultDisplay.innerText += '8';
  }
});

btn9.addEventListener('click', function () {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerHTML = '9';
  } else {
    resultDisplay.innerText += '9';
  }
});

btn0.addEventListener('click', function () {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerHTML = '0';
  } else {
    resultDisplay.innerText += '0';
  }
});

btnPeriod.addEventListener('click', function () {
  if (!resultDisplay.innerText.includes('.')) {
    resultDisplay.innerText += '.';
  }
});

btnPlus.addEventListener('click', function () {
  lastCharDisplay = resultDisplay.innerText.charAt(
    resultDisplay.innerText.length - 1
  );
  if (
    !(
      lastCharDisplay.includes('^') ||
      lastCharDisplay.includes('+') ||
      lastCharDisplay.includes('-') ||
      lastCharDisplay.includes('.') ||
      lastCharDisplay.includes('/') ||
      lastCharDisplay.includes('*')
    )
  ) {
    resultDisplay.innerText += '+';
  }
});

btnMinus.addEventListener('click', function () {
  lastCharDisplay = resultDisplay.innerText.charAt(
    resultDisplay.innerText.length - 1
  );
  if (
    !(
      lastCharDisplay.includes('^') ||
      lastCharDisplay.includes('+') ||
      lastCharDisplay.includes('-') ||
      lastCharDisplay.includes('.') ||
      lastCharDisplay.includes('/') ||
      lastCharDisplay.includes('*')
    )
  ) {
    resultDisplay.innerText += '-';
  }
});

btnDivide.addEventListener('click', function () {
  lastCharDisplay = resultDisplay.innerText.charAt(
    resultDisplay.innerText.length - 1
  );
  if (
    !(
      lastCharDisplay.includes('^') ||
      lastCharDisplay.includes('+') ||
      lastCharDisplay.includes('-') ||
      lastCharDisplay.includes('.') ||
      lastCharDisplay.includes('/') ||
      lastCharDisplay.includes('*')
    )
  ) {
    resultDisplay.innerText += '/';
  }
});

btnMultiply.addEventListener('click', function () {
  lastCharDisplay = resultDisplay.innerText.charAt(
    resultDisplay.innerText.length - 1
  );
  if (
    !(
      lastCharDisplay.includes('^') ||
      lastCharDisplay.includes('+') ||
      lastCharDisplay.includes('-') ||
      lastCharDisplay.includes('.') ||
      lastCharDisplay.includes('/') ||
      lastCharDisplay.includes('*')
    )
  ) {
    resultDisplay.innerText += '*';
  }
});

//NOTE - need to do special coding for this one. convert ^ to ** for the math part
btnExponent.addEventListener('click', function () {
  lastCharDisplay = resultDisplay.innerText.charAt(
    resultDisplay.innerText.length - 1
  );
  if (
    !(
      lastCharDisplay.includes('^') ||
      lastCharDisplay.includes('+') ||
      lastCharDisplay.includes('-') ||
      lastCharDisplay.includes('.') ||
      lastCharDisplay.includes('/') ||
      lastCharDisplay.includes('*')
    )
  ) {
    resultDisplay.innerText += '^';
  }
});

//functionality for delete button
deleteBtn.addEventListener('click', function () {
  let newString = resultDisplay.innerText.substring(
    0,
    resultDisplay.innerText.length - 1
  );

  for (let i = newString.length; i >= 0; i--) {
    resultDisplay.innerText = newString;
  }

  if (resultDisplay.innerText.length == 0) {
    resultDisplay.innerText = '0';
  }
});

///////////////features to implement
//result needs to display entered information, then display result after equals button is clicked
//need to refactor everything once it's done

//functionality for equals button
//if result is way too large or way too small, display ERROR
//slice out numbers, then slice out operators, then make it into a math problem, then print the result to the results bar
equalsBtn.addEventListener('click', function () {});
