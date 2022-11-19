'use strict';
document.write("EXERCISE 7");
document.write("</br>");

let number = parseInt(prompt("How many times would you like to roll the dice?"));
let sum = 0;
for (let i = 1; i<= number; i++) {
    let dice = (Math.floor(Math.random() * 6) + 1); 
    document.write(`The result of the roll number ${i} is ${dice}.`);
    document.write("<br>");
    sum += dice;
}
document.write("<br>");
document.write(`The sum is: ${sum}.`);
