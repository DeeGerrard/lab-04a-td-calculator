

import { add, toNumber } from './calculator.js';
const inputA = document.getElementById('number-A-input');
const inputB = document.getElementById('number-B-input');
const addCal = document.getElementById('add-cal');
const addOutput = document.getElementById('add-output');

addCal.addEventListener('click', () => {
    const numberA = toNumber(inputA);
    const numberB = toNumber(inputB);
    const addResult = add(numberA, numberB);
    addOutput.textContent = addResult;
});

import { subtract, toNumber } from './calculator.js';
const input1 = document.getElementById('number-1-input');
const input2 = document.getElementById('number-2-input');
const subCal = document.getElementById('sub-cal');
const subOutput = document.getElementById('sub-output');

subCal.addEventListener('click', () => {
    const number1 = toNumber(input1);
    const number2 = toNumber(input2);
    const subResult = subtract(number1, number2);
    subOutput.textContent = subResult;
});

import { multiply, toNumber } from './calculator.js';
const inputX = document.getElementById('number-x-input');
const inputY = document.getElementById('number-y-input');
const multCal = document.getElementById('mult-cal');
const multOutput = document.getElementById('mult-output');

multCal.addEventListener('click', () => {
    const numberX = toNumber(inputX);
    const numberY = toNumber(inputY);
    const multResult = multiply(numberX, numberY);
    multOutput.textContent = multResult;
});

import { divide, toNumber } from './calculator.js';
const input3 = document.getElementById('number-3-input');
const input4 = document.getElementById('number-4-input');
const divCal = document.getElementById('div-cal');
const divOutput = document.getElementById('div-output');

multCal.addEventListener('click', () => {
    const numberX = toNumber(inputX);
    const numberY = toNumber(inputY);
    const divResult = divide(numberX, numberY);
    divOutput.textContent = divResult;
});