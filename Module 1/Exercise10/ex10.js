'use strict';
document.write("EXERCISE 10");
document.write("</br>");

let number = parseInt(prompt("How many times would you like to roll the dice?"));
let diceGuess = parseInt(prompt("Guess the sum: "));
let count = 0;
let probability = 0;
let test = 10000;

for (let a =0; a<=test; a++){
    let sum = 0;
    for (let i = 1; i<= number; i++) {
        let dice = (Math.floor(Math.random() * 6) + 1); 
        sum += dice;
        }  
    if (sum === diceGuess){
        count += 1;
    }
}
probability = (count / test)*100;


document.write(`The probability of getting ${diceGuess} from ${number} rolls, is roughly ${probability.toFixed(2)}%`);