// Page Accueil - Ajout du bouton "Blog" dans le footer.
// Variables d'entrée.



// Page Portfolio - Filtre avec mots-clés pour type d'images.
// Variables d'entrée

let boutonPortfolio = document.querySelectorAll(".buttonPortfolio");
let imageBox = document.querySelectorAll(".imgBox");

// Instructions.

for (let i = 0; i < boutonPortfolio.length; i++) {
  boutonPortfolio[i].addEventListener("click", function () {
    let dataFilter = this.getAttribute("data-keyword");

    for (let k = 0; k < imageBox.length; k++) {
      imageBox[k].classList.add("cache");

      if (
        imageBox[k].getAttribute("data-img") == dataFilter ||
        dataFilter == "all"
      ) {
        imageBox[k].classList.remove("cache");
      }
    }
  });
}

// Animation - Appareil photo.
// Variables d'entrée.

var imgPolaroid = "SelectPhotos/Moi.jpg";

$(".clicCamera").mouseenter(function () {
  $("#ejectionPolaroid").fadeIn();
  $("#ejectionPolaroid").css({
    background: "url(" + imgPolaroid + ")",
    position: "absolute",
    top: "220px",
    right: "75px",
    height: "80%",
    width: "60%",
    borderBottom: "20px solid white",
    borderTop: "10px white solid",
    borderLeft: "10px white solid",
    borderRight: "10px white solid",
  });
  $(".mesures").css({ boxShadow: "0.5px 2px 2px 1px wheat" });
});

$(".clicCamera").mouseleave(function () {
  $("#ejectionPolaroid").css({
    display: "none",
  });
  $(".mesures").css({ boxShadow: "0px 0px 0px 0px black" });
});

$("containeraPropos").show();
