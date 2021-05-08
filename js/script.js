//HOME
function goDown() {
    document.body.scrollTop = 795;
    document.documentElement.scrollTop = 795;
}

//LIEUX
function myLocation(id) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    var x = document.getElementById(id);

    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function hidePrevDisplay() {

}

//IMAGES ZOOM DES LIEUX
function imageZoom(element, id, id2) {
    document.getElementById(id).src = element.src;
    document.getElementById(id2).style.display = "block";
}

//FORMULAIRE DE CONTACT
function send() {
    document.getElementById('form').action = "mailto:kevinlaveau7@gmail.com?subject=" + document.getElementById('raison').value;
}