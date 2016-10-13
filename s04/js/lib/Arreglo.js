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

    var reduce = function(vi, f, arr_entrada){
        var vf = vi;
        for(var i = 0; i < arr_entrada.length; i++)
            vf = f(vf, arr_entrada[i]);
        return vf;
    };

    var forEach = function(f, arr_entrada){
        for(var i = 0; i < arr_entrada.length; i++)
            f(arr_entrada[i]);
    };

    return {
        "filter": filter,
        "reduce": reduce,
        "forEach": forEach
    };
})();
