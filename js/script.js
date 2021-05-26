//HOME
function goDown() {
    document.body.scrollTop = 795;
    document.documentElement.scrollTop = 795;
}

//AFFICHER INFOS LIEUX
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

//IMAGES ZOOM DES LIEUX
function imageZoom(element, id, id2) {
    document.getElementById(id).src = element.src;
    document.getElementById(id2).style.display = "block";
}

//FORMULAIRE DE CONTACT
function sendMail() {
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var raison = document.getElementById("raison").value;

    var ebody = '\r\n' + 'Prénom: ' + prenom + '\r\n' + 'Nom: ' + nom + '\r\n' + 'Mail: ' + email;

    document.getElementById('formContact').action = "mailto:kevinlaveau7@gmail.com?subject="
        + encodeURIComponent(raison)
        + "&body=" + encodeURIComponent(subject)
        + encodeURIComponent(ebody);
}

//FORMULAIRE DE CONNEXION
function ShowMDP(id) {
    var x = document.getElementById(id);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

//AFFICHER LES POSTERS DS SAISONS
