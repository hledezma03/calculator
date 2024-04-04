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

function clearDisplay() {
    display.textContent = ''
    first = 0;
    second = 0;
    operation = null
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

clear.addEventListener("click", () => clearDisplay())

numbers.forEach(number => {
    number.addEventListener("click", ()=> {
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
            second = undefined;
            display.textContent = '';
        } else {
            first = parseFloat(display.textContent);
            display.textContent = '';
            operation = operator.textContent;
        }
    })
})
console.log(first)
console.log(second)
console.log(operation)
equal.addEventListener("click", () => {
    if (first && operation) {
        second = parseFloat(display.textContent);
        result = operate(first, operation, second);
        display.textContent = result;
        console.log(`${first}    ${operation}    ${second}`);
        first = result;
        second = undefined;
        operation = undefined;
    }
});