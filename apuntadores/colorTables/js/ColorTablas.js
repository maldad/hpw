var ColorTablas = (function (){

    fila = function(objTabla, numFila, color){
        var tbody = objTabla.children[1];
        var tr = tbody.children[numFila - 1 ];
        var tds = tr.children;
        for(var i = 0; i < tds.length; i++){
            tds[i].style.backgroundColor = color;
        }
    };

    columna = function(objTabla, numColumna, color){
        var tbody = objTabla.children[1];
        var trs = tbody.children;
        for(var i = 0; i < trs.length; i++){
            var td = trs[i].children[numColumna - 1];
            td.style.backgroundColor = color;
        }
    };

    vecinos = function(objTabla, fila, columna, color){
        var vecinos = Tabla.vecinos(objTabla, fila, columna);
        for(var i = 0; i < vecinos.length; i++){
          vecinos[i].style.backgroundColor = color;
        }
    };

    celda = function(objTabla, fila, columna, color){
        var celda = Tabla.celda(objTabla, fila, columna);
        celda.style.backgroundColor = color;
    };

    return {
        "fila": fila,
        "columna": columna,
        "vecinos": vecinos,
        "celda": celda
    };
})();
