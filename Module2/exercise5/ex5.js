'use strict';
document.write("EXERCISE 5");
document.write("</br>");

let numbers = [];

while (true) {
    let number = parseInt(prompt("Enter a number:"));
    if (numbers.includes(number)) {
        document.write("this number already exists");
        console.log(numbers);
        break;
    }
    else {
        numbers.push(number);
    }
}
