/* 
Activité 2
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia._dr",
        auteur: "annie.zette"
    }
];

var contenu = document.getElementById("contenu");
var success = document.getElementById("success");
var isOk = true;
var successText = document.createElement('H2');

// Crée et renvoie un élément DOM affichant les données d'un lien
// Le paramètre lien est un objet JS représentant un lien
function creerElementLien(lien) {
    var titreLien = document.createElement("a");
    titreLien.href = lien.url;
    titreLien.style.color = "#428bca";
    titreLien.style.textDecoration = "none";
    titreLien.style.marginRight = "5px";
    titreLien.appendChild(document.createTextNode(lien.titre));

    var urlLien = document.createElement("span");
    urlLien.appendChild(document.createTextNode(lien.url));
    urlLien.classList.add('element');

    // Cette ligne contient le titre et l'URL du lien
    var ligneTitre = document.createElement("h4");
    ligneTitre.style.margin = "0px";
    ligneTitre.appendChild(titreLien);
    ligneTitre.appendChild(urlLien);

    // Cette ligne contient l'auteur
    var ligneDetails = document.createElement("span");
    ligneDetails.appendChild(document.createTextNode("Ajouté par " + lien.auteur));

    var divLien = document.createElement("div");
    divLien.classList.add("lien");
    divLien.appendChild(ligneTitre);
    divLien.appendChild(ligneDetails);
    return divLien;
}

function creerNouveauLien(){
    successText.innerHTML = "";
    if(document.getElementById("auteur").value === '' || document.getElementById("titre").value === '' || document.getElementById("url").value === '' || isOk === false) {
        return false;
    }
    var lienAcreer = {
        titre: "",
        url: "",
        auteur: ""
    }
    lienAcreer.titre = document.getElementById("titre").value;
    if (document.getElementById("url").value.indexOf("http://") === -1) {
        lienAcreer.url = "http://" + document.getElementById("url").value;
    } else {
        lienAcreer.url =  document.getElementById("url").value;    
    }
    lienAcreer.auteur = document.getElementById("auteur").value;
    listeLiens.unshift(lienAcreer);
    var elementLienAcreer = creerElementLien(lienAcreer);
    contenu.appendChild(elementLienAcreer);
    var Node = document.getElementById("contenu");
    var NodeListe = Node.getElementsByClassName("lien");
    var position = NodeListe.item(0);

    successText.innerHTML = 'Le lien ' + lienAcreer.titre + ' a bien été ajouté !';
    var nodeSuccess = document.createTextNode(lienAcreer.titre.value);
    Node.insertBefore(elementLienAcreer,position);
    success.appendChild(successText);
    success.style.display = 'block';
    document.getElementById("auteur").value = '';
    document.getElementById("titre").value = '';
    document.getElementById("url").value = '';
    document.getElementById("form").reset();
}


// Parcours de la liste des liens et ajout d'un élément au DOM pour chaque lien
listeLiens.forEach(function (lien) {
    var elementLien = creerElementLien(lien);
    contenu.appendChild(elementLien);
});

function myFunction() {
    var x = document.getElementById('formulaire');
    var btn = document.getElementById('btnAjout');
    if (x.style.display === 'none' || x.style.display === '') {
        x.style.display = 'inline-block';
        btn.style.display = 'none';
    } else {
        x.style.display = 'none';
    }
};


 function validate() {
        isOk = true;
        var url = document.getElementById("url").value;
        if (url === '') {
            return true;
        }
        if (document.getElementById("url").value.indexOf("http://") === -1) {
            var pattern = /^[a-zA-Z0-9._-]+\.[a-z]{2,4}$/;
            if (!pattern.test(url)) {
                alert("Url is not valid!");
                isOk = false;
                return false;
            } else {
            return true;
        }
         if (document.getElementById("url").value.indexOf("http://") != -1){
            var regexQuery = "^(https?://)?(www\\.)?([-a-z0-9]{1,63}\\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\\.[a-z]{2,6}(/[-\\w@\\+\\.~#\\?&/=%]*)?$";
            var url = new RegExp(regexQuery,"i");
            if (url.test(userInput)) {
                alert('valid url: ' + userInput);
                return true;
            }
            alert('invalid url: ' + userInput);
            return false;

}}
}