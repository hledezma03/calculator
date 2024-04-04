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
    decimal.disabled = false
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
const changeSignBtn = document.querySelector('#changeSign');
const porcentage = document.querySelector('#porcentage');
const decimal = document.querySelector('#decimal');


changeSignBtn.addEventListener("click", () => {
    let displayNumber = parseFloat(display.textContent);
    display.textContent = displayNumber * -1;
});

decimal.addEventListener("click", () => {
    display.textContent += decimal.textContent
    decimal.disabled = true
})


porcentage.addEventListener("click", () => {
    let displayNumber = parseFloat(display.textContent)
    display.textContent = displayNumber / 100;
})


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
        decimal.disabled = false;
        if (first && operation) {
            second = parseFloat(display.textContent);
            result = operate(first, operation, second).toFixed(5);
            display.textContent = parseFloat(result).toString();
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
        result = operate(first, operation, second).toFixed(5);
        display.textContent = parseFloat(result).toString();
        first = result;
        second = undefined;
        operation = undefined;
        resultShown = true;
    }
});