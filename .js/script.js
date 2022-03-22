//Unused - return a JSON from an URL
function jsonReturn (url) {
    let p = fetch(url)
    let z = p.then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
}

//return image/title/duration of a category (launch page 2 and info film + info bestfilm)
function listeUrlBestFilm (url1, category_number, number, start = 0) {
    let p = fetch(url1)
    let a = p.then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    let variable = 5+start
    let bestfilm = a.then(function (a) {
        for (let i = start; i < (variable); i++) {
            let count = i + 1
            infoFilm(a["results"][i]["url"], ("category" + category_number + "Film" + count))

        if (number > 5) {
            page2Fonction(a["next"], category_number, number)
        }
        if (start > 0) {
            infoBestFilm(a["results"][0]["url"], ("category" + category_number + "Film" + 1))
            }
        }
        })
}

//return image/title/duration of the second page of a fetch
function page2Fonction (url2, category_number, number){
    let p2 = fetch(url2)
    let a2 = p2.then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    let bestfilm2 = a2.then(function (a2) {
        for (let i = 0; i < number; i++) {
            let count2 = i+6
            infoFilm(a2["results"][i]["url"], ("category" + category_number + "Film" + count2))
        }
    })
}

// return image/title/duration
function infoFilm(url,itemID) {
    let p = fetch(url)
    let z = p.then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    let bestfilm = z.then(function (z) {
            document.getElementById(itemID).innerHTML = (
                "<img src=" + z["image_url"] + " alt=" + z["title"] + ">" +
                "<h1 class=heading>" + z["title"] + "</h1>" +
                "<p class=duration>" + z["duration"] + " min" + "</p>");
    })
}

// return image/title/DESCRIPTION
function infoBestFilm(url,itemID) {
    let p = fetch(url)
    let z = p.then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    let bestfilm = z.then(function (z) {
            document.getElementById(itemID).innerHTML = (
                "<img src=" + z["image_url"] + " alt=" + z["title"] + ">" +
              "<h1 class=bg-img__heading>" + z["title"] + "</h1>" +
              "<p class=bg-img__description>"+ z["description"] + "</p>");
    })
}

// return modal content (title, image, list, description)
function modalListClassic(filmPromise) {
        return (
        "<div class=modal-content>"+
        "<span class=close onclick=closeModal()>&times;</span>"+
        "<h2 class=modal-header>" + filmPromise["title"] +"</h2>"+
        "<img src=" + filmPromise["image_url"] + " alt=" + filmPromise["title"] + ">" +
        "<div class='modal-body'>" +
        "<ul>" +
        "<li> Categorie(s) : " + filmPromise["genres"] + "</li>"+
        "<li> Date de sortie : " + filmPromise["date_published"] + "</li>"+
        "<li> Rated : " + filmPromise["rated"] + "</li> "+
        "<li> Imdb score : " + filmPromise["imdb_score"] + "</li>"+
        "<li> Réalisateur : " + filmPromise["directors"] + "</li>"+
        "<li> Acteurs : " + filmPromise["actors"] + "</li>"+
        "<li> Durée : " + filmPromise["duration"] + "min"+"</li>"+
        "<li> Pays d'origine : " + filmPromise["countries"] + "</li>"+
        "<li> Box Office : " + filmPromise["worldwide_gross_income"] + "</li>"+
        "</ul>"+
        "<p> Description : " + filmPromise["long_description"]+"</p>" +
        "</div>"+
        "</div>")
    }

// modify existing modal to match content of the film promise
function specificMovieModal (filmPromise) {
    document.getElementById("myModal").innerHTML= modalListClassic(filmPromise)
        }

// feed specific Modal with an url
function modalDone(url) {
    let p = fetch(url)
    let z = p.then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    let r = z.then(function (z) {
        specificMovieModal(z)
    })
}

// from a category url and a number feed modal Done a specific film url
function openModal (url, number) {
    let p = fetch(url)
    let z = p.then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    let a = z.then(function(z) {
        if (number < 5) {
            modalDone(z["results"][number]["url"]);
        }
        else{
            let variable = number - 5
            openModal (z["next"], variable)
        }
    })
    let d = a.then(function (a) {
        {
            let modal = document.getElementById("myModal")
    modal.style.display = "flex";
}
    })
}



function allCat(url1, url2, url3, url4) {
    listeUrlBestFilm(url1,1,7,1)
    listeUrlBestFilm(url2,2,7,0)
    listeUrlBestFilm(url3,3,7,0)
    listeUrlBestFilm(url4,4,7,0)
}

function closeModal(){
    let modal = document.getElementById("myModal")
    modal.style.display = "none"
}

