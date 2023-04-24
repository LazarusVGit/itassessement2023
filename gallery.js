function openPopup(){
    document.getElementById("lightbox").style.display = "block";
}

function closePopup(){
    document.getElementById("lightbox").style.display = "none";
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slides");
    slides[n].style.display = "block";
    for (i = 0; i < slides.length; i++){
        if (i == n) {continue}
        else {slides[i].style.display = "none";}
    }
}