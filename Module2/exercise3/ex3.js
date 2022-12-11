let dogs = [];
        let ul = document.getElementById("dogs");

        
        for (let i = 1; i <= 6; i++) {
            let name = window.prompt("Enter the name of a dog number" + i);
            dogs.push(name);
        }
        dogs.sort();
        dogs.reverse();

        for (i = 0; i < dogs.length; ++i) {  //prints in an unordered list to the web page
            var li = document.createElement('li');
            li.innerText = dogs[i];
            ul.appendChild(li);
            }