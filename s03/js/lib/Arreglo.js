var Arreglo = (function () {
    var filter = function(g, arr_entrada){
        var arr_salida = [];
        for(var i = 0; i < arr_entrada.length; i++){
            if(g(arr_entrada[i])) {
                arr_salida.push(arr_entrada[i]);
            }
        }
        return arr_salida;
    };
    return {
        "filter": filter
    };
})();
