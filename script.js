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

let btns = document.querySelectorAll('button');
let display = document.querySelector('.output');

btns.forEach(button => {
    button.addEventListener('click', () => {
        display.innerHTML = button.innerHTML;
    })
})
