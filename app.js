const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

const operate = (num1, operator, num2) => {
  if (operator === '+') {
    return add(num1, num2);
  }
  if (operator === '-') {
    return subtract(num1, num2);
  }
  if (operator === '×') {
    return multiply(num1, num2);
  }
  if (operator === '÷') {
    return divide(num1, num2);
  }

  return 'ERROR';
};

let displayValue = '';

const buttons = document.querySelectorAll('button');
const unitBox = document.querySelector('.unit-box');

buttons.forEach((button) =>
  button.addEventListener('click', () => {
    displayValue += button.innerHTML;
    unitBox.innerHTML = displayValue;
  })
);
