//DOM Javascript

//Selectionner des elements HTML :
// const elem = document.getElementById("test");
// const elem1 = document.getElementsByClassName("nom de la class");
//element.querySelector() retourne le premier élément sélectionné par le sélecteur.
//element.querySelectorAll() retourne tous les éléments sélectionnés par le sélecteur passé en argument

const paragraphe = document.querySelector("p");
const img = document.querySelector("img");
const section = document.querySelector("section");
const lien = document.querySelector("a");
const input = document.querySelector("input");

paragraphe.innerHTML = ""; //permet d'injecter du html on peut ecrire du html
paragraphe.innerText = ""; //permet de modifier le text

img.src = ""; //modifier image
img.alt = ""; //modifier alt

//accés au attributs
/**
 * element.hasAttribute(nom) prend le nom d'un attribut en argument et retourne un booléen suivant qu'il existe ou non sur l'élément.
 * element.setAttribute(nom, valeur) prend le nom d'un attribut en argument et sa valeur en deuxième argument. Elle crée l'attribut ou modifie sa valeur si il existe déjà.
 * element.removeAttribute(nom) prend le nom d'un attribut en argument et le supprime.
 */

//input

input.focus();
//focus() permet de focus l'input. L'utilisateur peut donc directement taper sur son clavier sans avoir à le cibler.
//blur() permet d'enlever le focus sur l'élément.
//click() permet de simuler un clic de l'utilisateur sur l'élément. Nous verrons dans le chapitre sur les événements que cela peut être utile.
//select() permet de sélectionner le texte contenu dans le champ et de le focus. L'utilisateur peut ainsi directement saisir sur son clavier le texte de remplacement.
//setCustomValidity() permet de définir un message d'erreur de validation pour l'élément. Si vous passez une chaîne de caractère vide cela signifie que l'élément n'a pas d'erreur.
//checkValidity() retourne un booléen suivant que le champ est valide ou non.
//reportValidity() permet d'exécuter checkValidity() et d'afficher le message d'erreur si il retourne false.

//Intéragir avec CSS Style
section.style.width = "200px";
/** 
La propriété classList permet d'accéder à de nombreuses méthodes très utiles pour manipuler les classes.
Sur cet objet vous avez accès à ces méthodes :
element.classList.add(nom) permet d'ajouter la classe passée en argument sur l'élément.
element.classList.remove(nom) permet de supprimer la classe passée en argument sur l'élément.
element.classList.toggle(nom) permet d'ajouter la classe passée en argument si elle est absente, ou de la supprimer si elle est présente.
element.classList.contains(nom) permet de savoir si la classe existe sur l'élément. La méthode retourne un booléen.
**/
