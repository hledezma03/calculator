function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
};

function multiply(a,b) {
    return a*b;
};

function divide(a,b) {
    return a/b;
}
let first;
let second;
let result;
let operation;
let resultShown = false;

function clearDisplay() {
    display.textContent = ''
    first = 0;
    second = 0;
    operation = null
}

function deleteLastElement() {
    let displayContent = display.textContent
    display.textContent = displayContent.slice(0,-1);
}




function operate(a,sign,b) {
    if (sign == '+') {
        return add(a,b);
    } else if (sign == '-') {
        return subtract(a,b);
    } else if (sign == '*') {
        return multiply(a,b);
    } else if (sign == '/') {
        return divide(a,b);
    };
};

const display = document.querySelector('h1');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const equal = document.querySelector('#equal');
const deleteBtn = document.querySelector('#delete')

deleteBtn.addEventListener("click", () => deleteLastElement());

clear.addEventListener("click", () => clearDisplay())

numbers.forEach(number => {
    number.addEventListener("click", ()=> {
        if (resultShown) { 
            display.textContent = '';
            resultShown = false;
        }
        display.textContent += number.textContent;
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (first && operation) {
            second = parseFloat(display.textContent);
            result = operate(first, operation, second);
            display.textContent = result;
            first = result;
            operation = operator.textContent;
            resultShown = true
        } else {
            first = parseFloat(display.textContent);
            display.textContent = '';
            operation = operator.textContent;
        }
    })
})

equal.addEventListener("click", () => {
    if (first && operation) {
        second = parseFloat(display.textContent);
        result = operate(first, operation, second);
        display.textContent = result;
        first = result;
        second = undefined;
        operation = undefined;
        resultShown = true;
    }
});