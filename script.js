// Calculate functions

let a = '';
let b = '';
let operator = '';
let result = '';

function calculate(a,b) {
    switch(operator) {
    case '+':
        operand.innerText = ''
        numOperand.innerText = Number(a) + Number(b)
        operator = ''
        result = numOperand.innerText
        break;
    case '-':
        operand.innerText = ''
        numOperand.innerText = Number(a) - Number(b)
        operator = ''
        result = numOperand.innerText
        break;
    case '*':
        operand.innerText = ''
        numOperand.innerText = Number(a) * Number(b)
        operator = ''
        result = numOperand.innerText
        break;
    case '/':
        operand.innerText = ''
        numOperand.innerText = Number(a) / Number(b)
        operator = ''
        result = numOperand.innerText
        break;
    }
}


function allClear() {
    numOperand.innerText = '';
    operand.innerText = '';
    operator = '';
    result = '';
}

function delNum() {
    if(b) {
        numOperand.innerText = numOperand.innerText.slice(0,-1)
    } else if(operator) {
        operator = '';
        operand.innerText = operator
    } else {
        numOperand.innerText = numOperand.innerText.slice(0,-1)
    }
}

function chooseNum(num) {
    num.addEventListener('click', () => {
        if(result) {
            allClear()
            numOperand.innerText += num.innerText
            a = numOperand.innerText
        } else if(!operator) {
            numOperand.innerText += num.innerText
            a = numOperand.innerText;
        } else {
            numOperand.innerText += num.innerText
            b = numOperand.innerText
        }
    })
}

function chooseOperator(op) {
    if(result) {
        a = result
        operand.innerText += a
        result = ''
    } if(!operator) {
        operator = op.innerText;
        operand.innerText = operator;
        operand.innerText += numOperand.innerText
        let array = Array.from(operand.innerText)
        array.push(array.shift())
        operand.innerText = array.join('')
        numOperand.innerText = '';
    } else {
        operator = operator;
    }
}


const numOperand = document.querySelector('[data-number-operand]')
const operand = document.querySelector('[data-operand]')
const numBtns = document.querySelectorAll('[data-numbers]')
const operationBtns = document.querySelectorAll('[data-operation]')
const clearBtn = document.querySelector('[data-clear]')
const delBtn = document.querySelector('[data-delete]')
const equalBtn = document.querySelector('[data-equals]')



clearBtn.addEventListener('click', () => {
    allClear()
})


delBtn.addEventListener('click', () => {
    delNum()
})

operationBtns.forEach(op => {
    op.addEventListener('click', () => {
        chooseOperator(op)
    })
})

numBtns.forEach(num => {
    chooseNum(num)
})

equalBtn.addEventListener('click', () => {
    calculate(a,b)
})


window.addEventListener('keydown', (e) => {
    const btnPressed = document.querySelector(`button[data-key="${e.key}"]`)
    if (e.key === 'Backspace') {
        delNum()
    } else if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        operand.innerText = e.key
        operator = operand.innerText
        operand.innerText += numOperand.innerText
        let array = Array.from(operand.innerText)
        array.push(array.shift())
        operand.innerText = array.join('')
        numOperand.innerText = '';
    } else if(e.key === '=') {
        calculate(a,b)
    } else if(!operator) {
        numOperand.innerText += btnPressed.innerText
        a = numOperand.innerText
    } else {
        numOperand.innerText += btnPressed.innerText
        b = numOperand.innerText
    }
})