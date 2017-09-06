var Interfaz = (function(){
  
  aceptar = function(event){
    var tabla = document.getElementById("tablon");
    var fila = parseInt(document.getElementById("inputfila").value);
    var columna = parseInt(document.getElementById("inputcolumna").value);
    var checkFila = document.getElementById("checkFila");
    var checkColumna = document.getElementById("checkColumna");
    var checkVecinos = document.getElementById("checkVecinos");
    var checkCelda = document.getElementById("checkCelda");
    var color = document.getElementById("color").value;

    if(checkFila.checked){
      ColorTablas.fila(tabla, fila, color);
    }
    if(checkColumna.checked){
      ColorTablas.columna(tabla, columna, color);
    }
    if(checkVecinos.checked){
      ColorTablas.vecinos(tabla, fila, columna, color);
    }
    if(checkCelda.checked){
      ColorTablas.celda(tabla, fila, columna, color);
    }
  }

  main = function(){
    var button = document.getElementById("button1");
    button.addEventListener("click", aceptar, false);
  };

  return {
    "main" : main
  };
})();
