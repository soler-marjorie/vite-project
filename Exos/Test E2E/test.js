// calculatrice test cypress
function addition(num1, num2) {
    return num1 + num2;
  }
  
  function calculate() {
    let firstNumber = parseFloat(document.getElementById('firstNumber').value);
    let secondNumber = parseFloat(document.getElementById('secondNumber').value);
  
    let result = addition(firstNumber, secondNumber);
  
    document.getElementById('result').innerText = result;
  }
  let btn = document.querySelector('button');
  btn.addEventListener('click',calculate)