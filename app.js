import { clicker } from './handlers.js';
import { clicker2 } from './handlers.js';
import { clicker3 } from './handlers.js';
import { clicker4 } from './handlers.js';

const button = document.getElementById('button');
button.addEventListener('click', clicker);

const button2 = document.getElementById('button-2');
button2.addEventListener('click', clicker2);

const button3 = document.getElementById('button-3');
button3.addEventListener('click', clicker3);

const button4 = document.getElementById('button-4');
button4.addEventListener('click', clicker4)
