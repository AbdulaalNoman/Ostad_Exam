const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operationSelect = document.getElementById('operation');
const calculateBtn = document.getElementById('calculateBtn');
const resultDisplay = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;

  if (isNaN(num1) || isNaN(num2)) {
    resultDisplay.textContent = 'Error: Please input valid numbers.';
    return;
  }

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultDisplay.textContent = 'Error: Division by zero.';
        return;
      }
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operation.';
  }

  resultDisplay.textContent = `Result: ${result}`;
});