
let number = parseInt(prompt("Enter the number of participants:"));
let participants = [];
let list = document.getElementById("names");

for(let i = 0; i < number; i++) {
    let name = window.prompt("Enter the name of participant:");
    participants.push(name);
} 
participants.sort(); //sorts alphabetically

for (i = 0; i < participants.length; ++i) {  //prints in an ordered list to the web page
    var li = document.createElement('li');
    li.innerText = participants[i];
    list.appendChild(li);
    } 

