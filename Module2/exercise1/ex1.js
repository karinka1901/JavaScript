'use strict';
document.write("EXERCISE 1");
document.write("</br>");

let list = [];
let newList = [];

for (let i = 0; i < 5; i++) {
    let number = parseInt(prompt("Enter a number:"));
    list.push(number);
}
document.write(list);
document.write("<br>");

for(let j = 4; j >= 0; j--) {
    newList.push(list[j]);
}
document.write(newList);
