'use strict';

document.write("EXERCISE 6");
document.write("</br>");

let ans = confirm('Should I calculate the square root?');
if (ans === true) {
    let number = parseInt(prompt("Enter the number:"));

    if (number < 0) {
        document.write("The square root of a negative number is not defined");
    }

    else {
        let sqr = number **2;
        document.write(`The square root of ${number} is ${sqr}`);
    }
    
}
if (ans === false) {
    document.write("The square root is not calculated.");
}
