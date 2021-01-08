import { getSum } from './utils.js';
import { getSubtract } from './utils.js';
import { getMultiply } from './utils.js';
import { getDevide } from './utils.js';

const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const result = document.getElementById('result');


export function clicker() {

    const inputValue1 = input1.valueAsNumber;
    const inputValue2 = input2.valueAsNumber;

    const sum = getSum(inputValue1, inputValue2);

    result.textContent = sum;

}



const input3 = document.getElementById('input-3');
const input4 = document.getElementById('input-4');
const result2 = document.getElementById('result-2');

export function clicker2() {

    const inputValue3 = input3.valueAsNumber;
    const inputValue4 = input4.valueAsNumber;

    const subtract = getSubtract(inputValue3, inputValue4);

    result2.textContent = subtract;

}



const input5 = document.getElementById('input-5');
const input6 = document.getElementById('input-6');
const result3 = document.getElementById('result-3');

export function clicker3() {

    const inputValue5 = input5.valueAsNumber;
    const inputValue6 = input6.valueAsNumber;

    const multiply = getMultiply(inputValue5, inputValue6);

    result3.textContent = multiply;
}



const input7 = document.getElementById('input-7');
const input8 = document.getElementById('input-8');
const result4 = document.getElementById('result-4');

export function clicker4() {

    const inputValue7 = input7.valueAsNumber;
    const inputValue8 = input8.valueAsNumber;

    const devide = getDevide(inputValue7, inputValue8);

    result4.textContent = devide;
}
