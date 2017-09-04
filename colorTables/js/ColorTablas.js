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

    vecinos = function(objTabla, fila, columna, claseCss){
        var vecinos = Tabla.vecinos(objTabla, fila, columna);
        for(var i = 0; i < vecinos.length; i++)
            if(vecinos[i].getAttribute('class') === null)
                vecinos[i].setAttribute('class', claseCss);
    };

    celda = function(objTabla, fila, columna, claseCss){
        var celda = Tabla.celda(objTabla, fila, columna);
        var notificacion = document.getElementById('notificacion');
        if(celda.classList.contains(claseCss))
            notificacion.textContent = 'Celda ya coloreada';
        else{
            notificacion.textContent = '';
            celda.setAttribute('class', claseCss);
        }
    };

    return {
        'fila': fila,
        'columna': columna,
        'vecinos': vecinos,
        'celda': celda
    };
})();
