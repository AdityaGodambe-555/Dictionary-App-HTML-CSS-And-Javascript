function giveme(){
    const result = document.getElementById("result");
    // var btn = document.getElementById("search-box");
    var inpword = document.getElementById("inp-word").value;
    var url="https://api.dictionaryapi.dev/api/v2/entries/en/"+inpword;
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        result.innerHTML =
        `<div class="word">
                <h3>${inpword}</h3>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>/${data[0].phonetic}/</p>
            </div>
            <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
            <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>
        </div>  
        `;

    })
    .catch(() => {
        result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    });
}

