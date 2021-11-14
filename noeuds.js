//Node noeuds

//Méthode sans innerHtml 
const app = document.querySelector("#app");

const section = document.createElement("section"); //ceci crée une section (Balise html)

const image = document.createElement("img");
const imageSrc = document.createAttribute("src"); //ceci crée un attribut html
imageSrc.value = "lien de l'image "//pour ajouter le lien ou valeur tout simplement 
// vautr mieux utiliser setAttribute() qui crée et set un attribut

const paragraphe = document.createElement("p");
const paragrapheClass = document.createAttribute("class");
const paragrapheText = document.createTextNode('Je suis un paragraphe');//Rajouter du text dans un paragraphe

const a = document.createElement("a");
const aHref = document.createAttribute("href");


const commentaire = document.createComment("je suis un commentaire ");

//app.innerHTML = `







`;
