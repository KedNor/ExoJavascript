// Fonction Javascript

// declaration de fonction

function nom(param1, param2) {
  //bloc
  console.log("fonction execution");
}

nom();

//expression
const nomDeLaFonction = function nom2() {
  console.log("fonction2 execution");
};

nomDeLaFonction();

//proprieté name retrouvé le nom de la fonction

console.log(nomDeLaFonction.name); //ici le nom de la fonction est nom2

//argument

function func(param) {
  console.log(param.toUpperCase());
}

func("param"); // ====> argument

//operateurs rest
function add(...numbers) {
  console.log(numbers);
}

//return ici la fonction retourne a + b c-a-d parametre a + parametre b, nous stockant notre fonction dans une const et on lui donne comme valeur de parametre 10,7
//Une fonction dont vous ne spécifiez pas la valeur de retour, retourne undefined.

function additionner(a, b) {
  return a + b;
}

const total = additionner(10, 7);
console.log(total);

/*Mot clé THIS */
const obj = {
  func() {},
};

// les focntions sont des objets

//
function a() {}
a.foo = "bar";
console.log(a.foo);

//methode call
//objet b
const b = {
  name: "jean",
  lastName: "Louis",
};
//fonction bonjour
function bonjour() {
  console.log(`bonjour: ${this.name + this.lastName}`);
}
//La méthode call() permet d'appeler une fonction rattachée à un objet donné sur un autre objet
bonjour.call(b);

/** Il suffit d'utiliser call() ou apply() et de passer en premier argument la valeur de this.

"use strict"

const personne = { name: 'Jean Dupont' };

function formuleSalutation(formule) {
  return this.name + formule;
}

formuleSalutation(' vous salue'); // TypeError: Cannot read property 'name' of undefined
formuleSalutation.call(personne, ' vous salue');  // => 'Jean Dupont vous salue'
**/

// Fonction fléchée () => {}

const z = (parametre) => {
  //bloc d'instruction
  console.log(parametre);
};

z("Zoo");

//Fonction callback Une fonction de rappel (callback) est une fonction passée en argument à une autre fonction et qui est exécutée dans cette dernière.
/**setTimeout(() => console.log('Terminé'), 1000);**/

const cb = () => {
  console.log("cb");
};

function fn(a, cb) {
  console.log("a : ", a);
  // cb();
}

fn("je suis a ", b);

//les fermetures closures fon ction dans  une autre fonction 

function powerBy(power) {
  return function (number) {
    return number ** power;
  };
}

console.log(powerBy(2)(3));



