function primeNumber(num1) {
  if (num1 === 1) {
    return "el numero ingresado no es primo";
  } else if (num1 === 2) {
    return "el numero ingresado es primo";
  } else {
    for (let i = 2; i < num1; i++) {
      if (num1 % i === 0) {
        return "el numero ingresado no es primo";
      }
    }
    return "el numero ingresado es primo";
  }
}

let continuar = true;

while (continuar) {
  let numero = parseInt(prompt("Ingrese un número"));
  let resultado = primeNumber(numero);
  alert(resultado);

  let respuesta = prompt("¿Desea ingresar otro número? (s/n)");

  while (respuesta.toLowerCase() !== "s" && respuesta.toLowerCase() !== "n") {
    alert("Ingrese solo 's' o 'n'.");
    respuesta = prompt("¿Desea ingresar otro número? (s/n)");
  }

  continuar = respuesta.toLowerCase() === "s";
}







