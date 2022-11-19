'use strict';
document.write("EXERCISE 9");
document.write("</br>");

let number = parseInt(prompt("Enter the number"));
let isPrime = true;
    
    for (let i = 2; i < number; i++) {
            if (number % i == 0) {
            isPrime = false;
            break;
            }   
        }
    if (isPrime) {
        document.write(`The number ${number} is a prime number.`);
    }
        else {
        document.write(`The number ${number} is not a prime number.`);
    }
