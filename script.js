function allClear() {
    numOperand.innerText = '';
    operand.innerText = '';
    operator = '';
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
            result = '';
            numOperand.innerText = '';
            operator = '';
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
    if(!operator) {
        operator = op.innerText;
        operand.innerText = operator;
        operand.innerText += numOperand.innerText
        let array = Array.from(operand.innerText)
        array.push(array.shift())
        operand.innerText = array.join('')
        numOperand.innerText = '';
    } else {
        return;
    }
}


const numOperand = document.querySelector('[data-number-operand]')
const operand = document.querySelector('[data-operand]')
const numBtns = document.querySelectorAll('[data-numbers]')
const operationBtns = document.querySelectorAll('[data-operation]')
const clearBtn = document.querySelector('[data-clear]')
const delBtn = document.querySelector('[data-delete]')
const equalBtn = document.querySelector('[data-equals]')

let a = '';
let b = '';
let operator = '';
let result = '';

operationBtns.forEach(op => {
    op.addEventListener('click', () => {
        chooseOperator(op)
    })
})

numBtns.forEach(num => {
    chooseNum(num)
})

clearBtn.addEventListener('click', () => {
    allClear()
})


delBtn.addEventListener('click', () => {
    delNum()
})

window.addEventListener('keydown', (e) => {
    const btnPressed = document.querySelector(`button[data-key="${e.key}"]`)
    if (e.key === 'Backspace') {
        delNum()
    } else if(!operator) {
        numOperand.innerText += btnPressed.innerText
        a = numOperand.innerText
    } else {
        numOperand.innerText += btnPressed.innerText
        b = numOperand.innerText
    }
})