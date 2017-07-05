var Objeto = (function () {

    var filter = function(f, obj_entrada){
        var obj_salida = {};
        for(var llave in obj_entrada)
            if(f(obj_entrada[llave]))
                obj_salida[llave] = obj_entrada[llave];
        return obj_salida;
    }

    var map = function(f, obj_entrada){
        var obj_salida = {};
        for(var llave in obj_entrada)
            obj_salida[llave] = f(obj_entrada[llave]);
        return obj_salida;
    }
   
    var reduce = function(vi, f, obj_entrada){
        var vf = vi;
        for(var llave in obj_entrada)
            vf = f(vf, obj_entrada[llave]);
        return vf;
    }

    var forEach = function(f, obj_entrada){
        for(var llave in obj_entrada)
            f(obj_entrada[llave]);
    };

    return {
        "filter": filter,
        "map": map,
        "reduce": reduce,
        "forEach": forEach
    }
})();
