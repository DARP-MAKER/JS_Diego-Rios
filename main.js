
//function primeNumber(num1)
//if (num1 % 1 === 0 && num1/num1 === 0) {
  //  return "primo";
  //} else {
   // return "no primo";
  //}

//let numero = parseInt(prompt("ingrese numero"))
//let resultado = primeNumber(numero);

function primeNumber(num1) {
  if (num1 === 1) {
    return "no primo";
  } else if (num1 === 2) {
    return "primo";
  } else {
    for (let i = 2; i < num1; i++) {
      if (num1 % i === 0) {
        return "no primo";
      }
    }
    return "primo";
  }
}

let numero = parseInt(prompt("Ingrese un número"));
let resultado = primeNumber(numero);
alert(resultado);







