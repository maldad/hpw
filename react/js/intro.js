function mi_suma(x, y) {
  return x + y;
}

// aún cuando arguments es del tipo Array éste no puede utilizar
// las funciones de Array
function suma_de_varios() {
  var sum = 0;
  //arguments es un objeto que almacena los valores de entrada
  console.log(arguments);
  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  }
  return sum;
}

// sintaxis de parámetros de rest
// ...variable
// los tres puntos que preceden al nombre de la variable indican
// que dicha variable almacena un número no definido de parámetros
function promedio(...args) {
  var sum = 0;
  for (let value of args) {
    sum += value;
  }
  return sum / args.length;
}
