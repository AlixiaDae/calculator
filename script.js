function add(a,b) {
    return a + b;
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

function operate(a,b) {
    return add(a,b);
    /* Get two numbers a and b
    run a and b through an operator
    */
}



const firstOperand = document.getElementById('prev-operand');
const secOperand = document.getElementById('next-operand');
const numBtns = document.querySelectorAll('.calc-numbers');
const operators = document.querySelectorAll('.calc-operator');
const clear = document.querySelector('.calc-clear');
const del = document.querySelector('.calc-del');

clear.addEventListener('click', () => {
    firstOperand.innerHTML = '';
    secOperand.innerHTML = '';
})


operators.forEach(operator => {
    operator.addEventListener('click', () => {
            firstOperand.innerHTML += operator.innerHTML;
        
    })
})


numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        firstOperand.innerHTML += numBtn.innerHTML;
    })
})
