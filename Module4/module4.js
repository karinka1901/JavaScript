document.querySelector("#fomr").addEventListener('submit', function(evt) {
    evt.preventDefault();
    document.getElementById("movies").innerHTML = ''; //clears previous search results
    moviesData();
});

async function moviesData(){
    try{
        const div = document.querySelector("#movies");
        const query = document.querySelector("#query");
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query.value}`);
        if (!response.ok) throw new Error('Invalid server input.');
        const apiData = await response.json();
        console.log(apiData); //STEP 1

        //---STEP 2---//
        //creates a title
        // const section = document.createElement("section");
        // const title = document.createElement("h2");
        // title.innerHTML = apiData[0]['show']['name'];
        // section.appendChild(title);
        // div.appendChild(section);
        // //creates a link
        // const a = document.createElement("a");
        // a.href= apiData[0]['show']['url'];
        // a.target ="_blank";
        // a.innerHTML =apiData[0]['show']['url'];
        // section.appendChild(a);
        // div.appendChild(section);
        // //creates an image
        // const img = document.createElement("img");
        // img.src = 'https://via.placeholder.com/00x200?text=text+here';
        // if (apiData[movie]['show']['image'] != null) {
        //     img.src = apiData[movie]['show']['image']['medium'] 
        // }
        // else{
        //     img.addEventListener('error', function(event) {
        //         event.target.src = 'https://via.placeholder.com/100x200?text=text+here';
        //         event.onerror = null;
        //       });
        // }
        // section.appendChild(img);
        // div.appendChild(section);
        // //summary
        // const p = document.createElement("p");
        // p.innerHTML = apiData[0]["show"]["summary"];
        // section.appendChild(p);
        // div.appendChild(section);

        //---STEP 3---//
        for (let movie = 0; movie< apiData.length; movie++){
            //title
            const section = document.createElement("section");
            const title = document.createElement("h2");
            title.innerHTML = apiData[movie]['show']['name'];
            section.appendChild(title);
            div.appendChild(section);
            //image
            const img = document.createElement("img");
            img.src = 'https://via.placeholder.com/00x200?text=text+here';
            if (apiData[movie]['show']['image'] != null) {
                img.src = apiData[movie]['show']['image']['medium'] 
            }
            else{
                img.addEventListener('error', function(event) {
                    event.target.src = 'https://via.placeholder.com/100x200?text=text+here';
                    event.onerror = null;
                  });
            }
            section.appendChild(img);
            div.appendChild(section);
            //summary
            const p = document.createElement("p");
            p.innerHTML = apiData[movie]["show"]["summary"];
            section.appendChild(p);
            div.appendChild(section);
            //creates a link
            const a = document.createElement("a");
            a.href= apiData[movie]['show']['url'];
            a.target ="details";
            a.textContent ="More details";
            section.appendChild(a);
            div.appendChild(section);
            //iframe
            const d = document.getElementById("d");
            const iframe = document.getElementById("i");
            const modalTitle = document.getElementById("h3")
            iframe.src = a.href
            a.addEventListener("click", function() {
                d.showModal();
                modalTitle.textContent = apiData[movie]['show']['name'];;
            });
            const close = document.getElementById("close");
                close.addEventListener('click', () =>{
                d.close()
            })
            //creates genres
            const genre = document.createElement("p");
            genre.id ="genre";
            genre.innerHTML = apiData[movie]['show']['genres'].join(" | ");
            section.appendChild(genre);
            div.appendChild(section);
        }
    } catch (error) {
        console.log(error.message);
    }
}



