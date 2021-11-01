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
  func(){
    
  }
}
