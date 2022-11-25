
function rollDice() {
    rolledNum = [];
    let list = document.getElementById("dice");
    
    while (true) {
    let dice = (Math.floor(Math.random() * 6) + 1);
        if (dice == 6) {
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
}

rollDice();