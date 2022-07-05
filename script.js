// Portfolio - Filtre avec mots-clés pour type d'images.
// Variables d'entrée

let list = document.querySelectorAll('.buttonPortfolio');
let itemBox = document.querySelectorAll('.imgBox');

// Instructions

for(let i = 0; i<list.length; i++){
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-keyword');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('cache');

        if(itemBox[k].getAttribute('data-img') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('cache');
            itemBox[k].classList.add('active');
        }
    }
    })
}

//
// Variables d'entrée

var prendrePhoto = document.getElementsByClassName("clicCamera");
var lancerPolaroid = document.getElementsByClassName("sortiePolaroid");
var lancerFlash = document.getElementsByClassName("mesures");
