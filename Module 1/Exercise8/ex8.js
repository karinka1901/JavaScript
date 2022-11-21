'use strict';
let year = parseInt(prompt("Enter the start year:"));
let end = parseInt(prompt("Enter the end year:"));
let leapYears =[]
let list = document.getElementById("years");

//appends only leap years to the array from the given interval
for (year; year <= end; year++) {
    if (year % 4 === 0 || year % 100 === 0 && year % 400){
        leapYears.push(year);
    }
}
//prints an unordered list to the HTML document
for (let i = 0; i < leapYears.length; ++i) {
let li = document.createElement('li');
li.innerText = leapYears[i];
list.appendChild(li);
}
