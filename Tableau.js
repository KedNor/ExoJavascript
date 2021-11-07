/**
//TABLEAU

//créer un tableau on peut mettre dans un tableau des nombres des strings, des objets, et des tableau ... plusieurs façon de déclarer un tableau

//1 ere façon
const tableau = [1, "deux", { clé: "valeur" }, [1, 2, 3]];
// console.log(tableau);

//2eme façon avec Array()

const tableau2 = Array("trois", 1, 2, 3, { key: "value" }, [1, 2, 3]);
// console.log(tableau2);

//3eme façon avec new Array
const tableau3 = new Array("trois", 1, 2, 3, { key: "value" }, [1, 2, 3]);
// console.log(tableau3);

//Acceder au élement de notre tableau avec l'index [numéro]

const TableauE = ["Terre", "Soleil", "Lune"];
// console.log(TableauE[0]); //la j'accede a l'index 0 qui correspond a terre

//acceder au dernier element d'un tableau
// TableauE.length - 1;

//reset un tableau a 0
// TableauE.length = 0;

// modifier un element dans un tableau
// TableauE[0] = "Mars"; //on remplace terre par mars


//un tableau dans un tableau on peut metre plusieurs tableau dans un tableau c-a-d tableau a plusieurs dimension
const PlusieursTab = [
  ["Terre", "Soleil", "Lune"],
  ["Mars", "Soleil", "LuneMars"],
  ["Jupiter", "Soleil", "JupiterLune"],
];
//accés au tableau dans un tableau
console.log(PlusieursTab[0][0]); //ici on accede au premier tableau ensuite la premiere valeur de notre premier tableau

//décomposition du tableau
const tableaux = [1, 2, 3, 4];
const [a, b] = tableaux;
console.log(b); // 2

//operateur Rest ici il recupere les element restant qu'on stock dans une variable qui s'appel le reste
const tableau = [1, 2, 3, 4];
const [a, ...leReste] = tableau;
console.log(a); // 1
console.log(leReste); // [2, 3, 4]

//ici avec l'operateur rest on copie un tableau en prenant ce qui nous interesse metre les virgules permet d'écarter des élements 
const tableau = [1, 2, 3, 4];
const [, , ...copie] = tableau;
console.log(copie); // [3, 4] */

//Ajout des element dans un tableau
const arr = [1, 2, 3, 4];
arr.unshift(0); //unshift permet d'ajouter un element en debut d'un tableau
arr.push(0); //push ajouter un element en fin du tableau

//supprimer des éléments d'un tableau
arr.shift(); //supp premier element
arr.pop(); //supprimer le dernier element
arr.splice(); //mettre l'index de l'element a supp
console.log(arr);

//... Rest pour ecarter des elements
// const tableau = [1, 2, 3, 4];
// const [, , ...copie] = tableau;
// console.log(copie); // [3, 4]

//Trouver l'emplacement d'un element dans un tableau
const arr0 = ["un", "deux", "trois", "quatre"];
console.log(arr0.indexOf("deux")); //La méthode indexOf() renvoie l'index du premier élément trouvé.
console.log(arr0.includes("un")); //renvoi un booleen La méthode includes() permet de vérifier si un tableau contient une valeur.

//copîer un tableau
const arr1 = [1, 2, 3];
// const copy = arr1.slice();La méthode slice() renvoie un nouveau tableau, contenant une copie superficielle d'une partie du tableau d'origine.
// La méthode peut prendre facultativement en premier paramètre un index de début et en second un index de fin exclus.
// copy.push(4);

// const y = (arr1) => {
//   arr1.push(5);
// };
// y(arr1);

// console.log(copy);

// Pour obtenir une copie profonde d'un tableau qui ne partage aucune référence en commun avec le tableau source il faut utiliser, comme nous l'avons vu pour les objets : JSON.parse(JSON.stringify(objet)).

// Prenons un exemple :

const tableau = [[1, 2], { a: 1 }];
const tableau2 = JSON.parse(JSON.stringify(tableau));

tableau2[0].push(42);
tableau2[1].a = 2;

console.log(tableau2); // [[1,2], {a: 1}]

//Fusionner des tableau concat()
//Fusionner avec ...Spread Operator

const tabFusion = [1, 2, 3];
const tabFusion2 = [4, 5, 6];
const tabFusion3 = [7, 8, 9];

const fusion = tabFusion.concat(tabFusion2).concat(tabFusion3); //concat()
const fusion1 = [...tabFusion, ...tabFusion2, ...tabFusion3]; //...spread

console.log(fusion1);

//TRIER UN TABLEAU
// -1- sort() permet de trier les éléments d'un tableau en utilisant facultativement une fonction de rappel.
const tableauTrie = ["z", "b", "k", "y", "c"];
tableau.sort();
console.log(tableauTrie); // ["b", "c", "k", "y", "z"]

//Trier des tableaux contenant des chaînes de caractères avec des majuscules avec localeCompare()
const tableauTrie1 = [
  "Château",
  "élève",
  "Baron",
  "antre",
  "étage",
  "espiègle",
];
tableauTrie1.sort((a, b) => a.localeCompare(b, "fr"));
console.log(tableauTrie1); // ["antre", "Baron", "Château", "élève", "espiègle", "étage"]

// La méthode reverse() permet d'inverser tous les éléments d'un tableau :

const tableauRverse = [1, "chaise", 2, "tabouret"];
tableau.reverse();
console.log(tableauRverse); // ["tabouret", 2, "chaise", 1]

//ITERER SUR UN TABLEAU

//itérer sur l'ensemble d'un tableau avec une boucle for TRES IMPORTANT
const tab = [1, 2, 3, 4, 5, 45, 7, 9, "salut"];
// for (let index = 0; index < tab.length; index++) {
//   console.log(tab[index]);
// }

//ForOf méthode a priviligier
for (const iterator of tab) {
  console.log(iterator);
}
//foreach

// tab.forEach((element) => {
//   console.log(tab[element]);
// });

//Programmation fonctionelle
//Transormer en miniscule un tableau en le metre dans un autre tableau
const MAJ = ["SANDWICH", "PIZZA", "PATES"];
// const MIN = [];

// for (const iterator of MAJ) {
//   MIN.push(iterator.toLowerCase());
// }
// console.log(MAJ);
// console.log(MIN);

//maintenant on utilise map important La méthode map() crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant
const MAP = MAJ.map((x) => {
  return x.toLowerCase();
});
console.log(MAP);

//La méthode filter() crée et retourne un nouveau tableau contenant les éléments qui passent le test de la fonction de rappel.

const tableauz = [
  //tableau d'objet
  { prix: 42 },
  { prix: 2 },
  { prix: 12 },
  { prix: 50 },
  {},
  { prix: undefined },
  { prix: NaN },
  { prix: null },
];
const tableauy = tableauz.filter((el) => el.prix > 10);
console.log(tableauy); // [{prix: 42}, {prix: 12}, {prix: 50}] on filtre superieur a 10

//Methode Reduce()
//reduceRight()
//flat()
//flatMap()
//every() permet de tester si tous les éléments d'un tableau vérifient une condition donnée par une fonction en argument. Cette méthode renvoie un booléen pour le résultat du test.
const FonctionVerifie = (parametre) => parametre < 100; //ici notre fonction verifie

const tableauAverifier = [1, 30, 39, 29, 10, 13];
console.log(tableauAverifier.every(FonctionVerifie));
//some()teste si au moins un élément du tableau passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));

//join  crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau
const NomComposé = ["Jean", "Luc", "Chomeur"];

console.log(NomComposé.join());

console.log(NomComposé.join(""));

console.log(NomComposé.join("-"));
