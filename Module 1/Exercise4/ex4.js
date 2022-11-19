'use strict';
document.write("EXERCISE 4");
document.write("</br>");
let yourName = window.prompt('Enter your name:');
let number = (Math.floor(Math.random() * 4) + 1);

if (number === 1) {
    document.write(yourName + ", you are Ravenclaw.");
    document.write("<br>");
}
else if (number === 2 ) {
    document.write(yourName + ", you are Gryffindor.");
    document.write("<br>");
}
else if (number === 3) {
    document.write(yourName + ", you are Slytherin.");
    document.write("<br>");
}
else if (number === 4) {
    document.write(yourName + ", you are Hufflepuff.");
    document.write("<br>");
        }
