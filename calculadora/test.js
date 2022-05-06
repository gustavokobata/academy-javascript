'use strict';

const displayResults = document.getElementById('results');
const numbers = document.querySelectorAll('[id*=key]');

const displayContent = (text) => {
    displayResults.textContent += text;
} 

const insertNumber = (newEvent) => displayContent(newEvent.target.textContent);

numbers.forEach(number =>
    number.addEventListener('click', insertNumber)
);

function clean() 
{
    document.getElementById('results').innerHTML = "";
}