function add(a,b) {
    return Number(a) + Number(b);
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

function clear() {
    a = '';
    b = '';
    operator = '';
    result = '';
    firstOperand.innerHTML = '';
}


function calculate() {
    switch(operator) {
    case '+' :
        firstOperand.innerHTML = '';
        result = add(a,b);
        firstOperand.innerHTML = result;
        break;
    case '-' :
        firstOperand.innerHTML = '';
        result = subtract(a,b);
        firstOperand.innerHTML = result;
        break;
    case '*' :
        firstOperand.innerHTML = '';
        result = multiply(a,b);
        firstOperand.innerHTML = result;
        break;
    case '/' :
        firstOperand.innerHTML = '';
        result = divide(a,b);
        firstOperand.innerHTML = result;
        break;
    }
}


const firstOperand = document.getElementById('first-operand');
const secOperand = document.getElementById('next-operand');
const numBtns = document.querySelectorAll('.calc-numbers');
const operators = document.querySelectorAll('.calc-operator');
const clearBtn = document.querySelector('.calc-clear');
const del = document.querySelector('.calc-del');
const equals = document.querySelector('.calc-equals');

let a = '';
let b = '';
let operator = '';
let result = '';

clearBtn.addEventListener('click', () => {
    clear()
});

/*If a is displayed, delete last character and save new a
If b is displayed, delete last character and save new b */

del.addEventListener('click', () => {
      if (!operator) {
        firstOperand.innerHTML = firstOperand.innerHTML.slice(0,-1);
        a = firstOperand.innerHTML;
    } else {
        firstOperand.innerHTML = firstOperand.innerHTML.slice(0,-1);
        b = firstOperand.innerHTML;
    }
})

/*Store numbers in display to a variable
Pick an operator, store in a variable. and clear display
Store second number to another variable
Equals btn must clear display, apply operator on first and second, and display result
*/

/*Remove operator to allow a new operator for a new calculation */

equals.addEventListener('click', () => {
    calculate();
    operator = '';
})

operators.forEach(e => {
    e.addEventListener('click', () => {
        if (!result) {
        firstOperand.innerHTML = '';
        return operator = e.innerHTML;
    }   else {
        a = result;
        b = '';
        firstOperand.innerHTML = '';
        return operator = e.innerHTML;
    } 
    })
})

numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
    if(!operator) { 
        a += numBtn.innerHTML;
        firstOperand.innerHTML = a;
        a = firstOperand.innerHTML;
    } else {
        b += numBtn.innerHTML;
        firstOperand.innerHTML = b;
        b = firstOperand.innerHTML;
    }
    })
})

