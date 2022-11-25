document.write("EXERCISE 9");
document.write("</br>");

function even(numbers) {
    let evenNumbers = [];
    for (let i = 0; i< numbers.length; i++ ) {
        if (numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
list = [2,4,7];
document.write(`Original array: ${list}`);
document.write("<br>")
document.write(`Array with even numbers: ${even(list)}`);
