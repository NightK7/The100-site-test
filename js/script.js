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
    var divs = ['camp100', 'arkadia', 'weather', 'tondc', 'deadzone', 'becca', 'polis', 'shallow', 'polaris', 'ark', 'eligius', 'sanctum', 'nakara', 'etherea', 'skyring', 'bardo'];

    for (var i = 0; i < divs.length; i++) {
        if (x != document.getElementById(divs[i])) {
            document.getElementById(divs[i]).style.display = 'none';
        }
    }
    x.style.display = 'block';
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

    document.getElementById('formContact').action = "mailto:test@gmail.com?subject="
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