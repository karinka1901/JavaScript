'use strict';
document.write("EXERCISE 4");
document.write("</br>");

let numbers = [];
let newList = [];
let number = 1;

for (let i = 0; number > 0; i++) {
    number = parseInt(prompt("Enter a number:"));
    numbers.push(number);

}
numbers.sort((a,b) => b - a);
console.log(numbers);
document.write("the numbers are printed in the console.")
