var ColorTablas = (function (){

    colorFila = function(objTabla, numFila, colorHtml){
        var tbody = objTabla.children[1];
        var tr = tbody.children[numFila - 1];
        var tds = tr.children;
        for (var i = 0; i < tds.length; i++)
            tds[i].style.backgroundColor = colorHtml;
    };

    colorColumna = function(objTabla, numColumna, colorHtml){
        var tbody = objTabla.children[1];
        var trs = tbody.children;
        for(var i = 0; i < trs.length; i++){
            var td = trs[i].children[numColumna - 1];
            td.style.backgroundColor = colorHtml;
        }
    };

    return {
        'colorFila': colorFila,
        'colorColumna': colorColumna
    };
})();
