//JS POUR LA PARITES LIEUX

function myLocation(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

function myImageLocation(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = "block";
}

//FORMULAIRE DE CONTACT
function send() {
    document.getElementById('form').action = "mailto:test@gmail.com?subject=" + document.getElementById('raison').value;
}
