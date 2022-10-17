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
    case '' :
        firstOperand.innerHTML = firstOperand.innerHTML;
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

/*Remove operator to allow a new operator for a new calculation
Sets a as result to allow consecutive addition of operators without needing to clear everything after equals is clicked */

equals.addEventListener('click', () => {
    calculate();
    a = result;
    b = '';
    operator = '';
})

/*Add consecutive operators
when operator is clicked after a and b are set, calculate and make the result a new a
*/

operators.forEach(e => {
    e.addEventListener('click', () => {
        if(!operator) {
            firstOperand.innerHTML = '';
            operator = e.innerHTML;
        } else {
            calculate();
            a = result;
            b = '';
            operator = e.innerHTML;
        }
    })
})


/*Refactor to allow consecutive operators without having to click the equals button

operators.forEach(e => {
    e.addEventListener('click', () => {
        if (!result) {
        calculate();
        b = '';
        firstOperand.innerHTML = '';
        return operator = e.innerHTML;
    }   else {
        
        firstOperand.innerHTML = '';
        a = result;
        b = '';
        return operator = e.innerHTML;
    } 
    })
})*/

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

const btns = document.querySelectorAll('button');
const sound = new Audio('../sound/zapsplat_office_calculator_button_single_press_003_81853.mp3')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        sound.currentTime = 0;
        sound.play();
        btn.classList.add('playing');
    })
})

function removeTransition(e) {
    if(e.propertyName !== 'font-size') {
        return;
    } else {
        this.classList.remove('playing');
    }
}

btns.forEach(btn => {
    btn.addEventListener('transitionend', removeTransition)
})