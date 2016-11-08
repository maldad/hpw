var ClaseTablas = (function (){

    fila = function(objTabla, numFila, claseCss){
        var tbody = objTabla.children[1];
        var tr = tbody.children[numFila -1 ];
        var tds = tr.children;
        for(var i = 0; i < tds.length; i++)
            tds[i].setAttribute('class', claseCss);
    };

    columna = function(objTabla, numColumna, claseCss){
        var tbody = objTabla.children[1];
        var trs = tbody.children;
        for(var i = 0; i < trs.length; i++){
            var td = trs[i].children[numColumna - 1];
            td.setAttribute('class', claseCss)
        }
    };

    vecinos = function(objTabla, fila, columna, claseCss){
        var vecinos = Tabla.vecinos(objTabla, fila, columna);
        for(var i = 0; i < vecinos.length; i++)
            if(vecinos[i].getAttribute('class') === null)
                vecinos[i].setAttribute('class', claseCss);
    };

    return {
        'fila': fila,
        'columna': columna,
        'vecinos': vecinos
    };
})();
