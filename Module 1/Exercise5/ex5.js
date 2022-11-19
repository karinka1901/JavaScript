document.write("EXERCISE 5");
document.write("</br>");


let year = parseInt(prompt("Enter the year:"));

if (year % 4 === 0 || year % 100 === 0 && year % 400) {
    document.write(`${year} is a leap year`);
}
else {
    document.write(`${year} is not a leap year`);
}

