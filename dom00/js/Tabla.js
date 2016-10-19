var Tabla = (function (){
    var fila = function(obj_tabla, fila){
        var cuerpo = obj_tabla.children[1];
        if(cuerpo.nodeName !== "TBODY")
            return [];
        if(cuerpo.rows[fila - 1] === undefined)
            return [];
        return cuerpo.rows[fila - 1].children;
    };
    
    var columna = function(obj_tabla, columna){
        var arr_salida = [];
        for(var i = 0; i < obj_tabla.children[1].rows.length; i++) 
            arr_salida.push(obj_tabla.children[1].rows[i].children[columna]);
        return arr_salida;
    }
    return {
        "fila": fila,
        "columna": columna
    }
})();
