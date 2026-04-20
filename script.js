// calculator.js
function calculator(a, b, operator) {
    if (operator === "+") return a + b;
    if (operator === "-") return a - b;
    if (operator === "*") return a * b;
    if (operator === "/") return a / b;
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "*"));