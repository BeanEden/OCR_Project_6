class FilmContent {
    constructor(image, title, category, exitDate, rated, imdbScore, director, actors, duration, originCountry, boxOfficeResult, summary) {
    this.image = image;
    this.title = title;
    this.category = category;
    this.exitDate = exitDate;
    this.rated = rated;
    this.imdbScore = imdbScore;
    this.director = director;
    this.actors = actors;
    this.duration = duration;
    this.originCountry = originCountry;
    this.boxOfficeResult = boxOfficeResult;
    this.summary = summary;
    }
}

let film1 = new FilmContent("img/image_test.webp", "titre_test", "genre", "01/01/2001", "PG18", "7", "director", ["actor1", "actor2", "actor3"], "120min", "pays","100m","description");
console.log(film1.image)

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}