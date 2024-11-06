let num1 = 8
let num2 = 2
document.getElementById('num1-el').innerHTML = num1
document.getElementById('num2-el').innerHTML = num2
let sumEl = document.getElementById('sum-el')

function add() {
    let sum = num1 + num2
    sumEl.innerHTML = "Sum:" + sum
}

function subtract() {
    let sub = num1 - num2
    sumEl.innerHTML = "Result:" + sub
}

function divide() {
    let div = num1 / num2
    sumEl.innerHTML = "Result:" + div
}

function multiply() {
    let mtp = num1 * num2
    sumEl.innerHTML = "Result:" + mtp
}
