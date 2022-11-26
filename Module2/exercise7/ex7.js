function rollDice(sides) {
    rolledNum = [];
    let list = document.getElementById("dice");
    
    while (true) {
    let dice = (Math.floor(Math.random() * sides) + 1);
        if (dice == sides) {
            for (i = 0; i < rolledNum.length; ++i) { 
                var li = document.createElement('li');
                li.innerText = rolledNum[i];
                list.appendChild(li); 
            }
            break;
        }
        else {
            rolledNum.push(dice);
        }  
    }
    return;
}

let sides = parseInt(prompt("Enter the number of sides on the dice:"));
rollDice(sides);
