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

/////////////////////////////////FUNCTIONALITY

//functionality for number buttons
const numberFilterFunction = function (number) {
  if (resultDisplay.innerText === '0') {
    resultDisplay.innerText = `${number}`;
  } else {
    resultDisplay.innerText += `${number}`;
  }
};

btn1.addEventListener('click', numberFilterFunction.bind(this, 1));
btn2.addEventListener('click', numberFilterFunction.bind(this, 2));
btn3.addEventListener('click', numberFilterFunction.bind(this, 3));
btn4.addEventListener('click', numberFilterFunction.bind(this, 4));
btn5.addEventListener('click', numberFilterFunction.bind(this, 5));
btn6.addEventListener('click', numberFilterFunction.bind(this, 6));
btn7.addEventListener('click', numberFilterFunction.bind(this, 7));
btn8.addEventListener('click', numberFilterFunction.bind(this, 8));
btn9.addEventListener('click', numberFilterFunction.bind(this, 9));
btn0.addEventListener('click', numberFilterFunction.bind(this, 0));

//fix this logic - should only disallow if the current number already has a decimal point
btnPeriod.addEventListener('click', function () {
  if (!resultDisplay.innerText.includes('.')) {
    resultDisplay.innerText += '.';
  }
});

//functionality for operator buttons
const operatorFilterFunction = function (operator) {
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
    resultDisplay.innerText += operator;
  }
};

btnMinus.addEventListener('click', operatorFilterFunction.bind(this, '-'));
btnPlus.addEventListener('click', operatorFilterFunction.bind(this, '+'));
btnDivide.addEventListener('click', operatorFilterFunction.bind(this, '/'));
btnMultiply.addEventListener('click', operatorFilterFunction.bind(this, '*'));
btnExponent.addEventListener('click', operatorFilterFunction.bind(this, '^'));

//functionality for delete and clear buttons
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

clearBtn.addEventListener('click', function () {
  resultDisplay.innerText = '';
});

///////////////features to implement
//result needs to display entered information, then display result after equals button is clicked

//functionality for equals button
//if result is way too large or way too small, display ERROR
//slice out numbers, then slice out operators, then make it into a math problem, then print the result to the results bar
equalsBtn.addEventListener('click', function () {});

const numsRegex = /[*+\-/\^]/;
const operatorsRegex = /(?:\d+\.)?\d+/g;
const identifyLastNumber = function () {
  let numbersOnly = [resultDisplay.innerText.split(numsRegex)];
  console.log(numbersOnly);

  let operatorsOnly = [resultDisplay.innerText.split(operatorsRegex)];
  //need to slice out the first and last elements
  console.log(operatorsOnly);

  const lastNum = resultDisplay.innerText.substring(
    resultDisplay.innerText.length,
    resultDisplay.innerText.lastIndexOf('-') + 1
  );
  // console.log(lastNum);
};

//debug
debugBtn.addEventListener('click', identifyLastNumber);
