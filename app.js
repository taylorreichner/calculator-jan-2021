
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const button = document.getElementById('button')
const result = document.getElementById('result')

button.addEventListener('click', () => {

    const inputValue1 = input1.valueAsNumber;
    const inputValue2 = input2.valueAsNumber;

    const sum = inputValue1 + inputValue2;

    result.textContent = sum;

});

const input3 = document.getElementById('input-3');
const input4 = document.getElementById('input-4');
const button2 = document.getElementById('button-2');
const result2 = document.getElementById('result-2');

button2.addEventListener('click', () => {

    const inputValue3 = input3.valueAsNumber;
    const inputValue4 = input4.valueAsNumber;

    const sum1 = inputValue3 - inputValue4;

    result2.textContent = sum1;

});

const input5 = document.getElementById('input-5');
const input6 = document.getElementById('input-6');
const button3 = document.getElementById('button-3');
const result3 = document.getElementById('result-3');

button3.addEventListener('click', () => {

    const inputValue5 = input5.valueAsNumber;
    const inputValue6 = input6.valueAsNumber;

    const sum2 = inputValue5 * inputValue6;

    result3.textContent = sum2;

});

const input7 = document.getElementById('input-7');
const input8 = document.getElementById('input-8');
const button4 = document.getElementById('button-4');
const result4 = document.getElementById('result-4');

button4.addEventListener('click', () => {

    const inputValue7 = input7.valueAsNumber;
    const inputValue8 = input8.valueAsNumber;

    const sum3 = inputValue7 / inputValue8;

    result4.textContent = sum3;

});
