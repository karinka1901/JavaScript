let listOfnames = [];
        let candidates = [];
        let number = parseInt(prompt("Enter the number of candidates:"));
        for (let i = 1; i <= number; i++) {
            let names = prompt("Enter the name of the candidate number " + i);
            listOfnames.push(names);
        }
        //creates objects and adds them to an array
        listOfnames.forEach(function(entry){ 
            var candidate = {};
            candidate['name'] = entry;
            candidate['votes'] = 0;
            candidates.push(candidate);
        });
        console.log(candidates); 

        let votersNum = parseInt(prompt("Enter the number of voters:"));
        for (let j = 1; j <= votersNum; j++) {
            let namesVotes = prompt("Who would you like to vote for?");
            for (let a = 0; a < listOfnames.length; a++){
                if (namesVotes === candidates[a]['name']){
                    candidates[a]['votes'] += 1;
                }
                else {
                    candidates[a]['votes'] += 0;
                }
            }
        }
        //sorts the objects
        candidates.sort((a, b) =>  {
        return b.votes - a.votes;
        });
        //results
        console.log("The winner is " + candidates[0].name + " with " + candidates[0].votes + " votes!");
        console.log("RESULTS:");
        for(let c = 0; c < candidates.length; c++){
            console.log(`${candidates[c].name}: ${candidates[c].votes} votes.`);
        }