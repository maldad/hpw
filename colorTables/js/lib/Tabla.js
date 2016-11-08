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
            arr_salida.push(obj_tabla.children[1].rows[i].children[columna - 1]);
        return arr_salida;
    }

    var diagonal_abajo_derecha = function(obj_tabla, fila, columna){
        var arr_salida = [];
        var j = columna;
        for(var i = fila - 1; i < obj_tabla.children[1].rows.length && j <= obj_tabla.children[1].rows.length; i++){
            arr_salida.push(obj_tabla.children[1].rows[i].children[j]);
            j++;
        }     
        return arr_salida;
    }

    var diagonal_abajo_izquierda = function(obj_tabla, fila, columna){
        var arr_salida = [];
        var j = columna;
        for(var i = fila - 1; i < obj_tabla.children[1].rows.length  && j > 0; i++){
            arr_salida.push(obj_tabla.children[1].rows[i].children[j]);
            j--;
        }     
        return arr_salida;
    }

    var diagonal_arriba_derecha = function(obj_tabla, fila, columna){
        var arr_salida = [];
        var j = columna;
        for(var i = fila - 1; i >= 0  && j <= obj_tabla.children[1].rows.length;  i--){
            arr_salida.push(obj_tabla.children[1].rows[i].children[j]);
            j++;
        }     
        return arr_salida;
    }

    var diagonal_arriba_izquierda = function(obj_tabla, fila, columna){
        var arr_salida = [];
        var j = columna;
        for(var i = fila - 1; i >= 0  && j > 0;  i--){
            arr_salida.push(obj_tabla.children[1].rows[i].children[j]);
            j--;
        }     
        return arr_salida;
    }

    var diagonales = function(obj_tabla, fila, columna){
        var arr_diagonales = [];
        if(!existe(obj_tabla, fila, columna))
            return [];
        arr_diagonales = arr_diagonales.concat(diagonal_abajo_derecha(obj_tabla, fila, columna));
        arr_diagonales = arr_diagonales.concat(diagonal_abajo_izquierda(obj_tabla, fila, columna));
        arr_diagonales = arr_diagonales.concat(diagonal_arriba_derecha(obj_tabla, fila, columna));
        arr_diagonales = arr_diagonales.concat(diagonal_arriba_izquierda(obj_tabla, fila, columna));
        arr_diagonales = 
        arr_diagonales.filter(function(item){return typeof item === 'object'}, arr_diagonales);
        return arr_diagonales;
    }

    var existe = function(obj_tabla, fila, columna){
        if(obj_tabla.children[1].rows[fila-1] === undefined)
            return false;
        if(obj_tabla.children[1].rows[fila-1].children[columna - 1] === undefined)
            return false;
        if(obj_tabla.children[1].rows[fila-1].children[columna - 1].nodeName !== 'TD')
            return false;
        return true;
    }
     
    var celda = function(obj_tabla, fila, columna){
        if(existe(obj_tabla, fila, columna))
            return obj_tabla.children[1].rows[fila-1].children[columna - 1];
    }

    var vecinos = function(obj_tabla, i, j){
        arr_vecinos = [];
        if(!existe(obj_tabla, i, j))
            return [];
        //puede pushear undefined's
        arr_vecinos.push(celda(obj_tabla , i-1 , j-1 )  ) //a
        arr_vecinos.push(celda(obj_tabla , i-1 , j   )  ) //b
        arr_vecinos.push(celda(obj_tabla , i-1 , j+1 )  ) //c
        arr_vecinos.push(celda(obj_tabla , i   , j-1 )  ) //d
        arr_vecinos.push(celda(obj_tabla , i   , j+1 )  ) //e
        arr_vecinos.push(celda(obj_tabla , i+1 , j-1 )  ) //f
        arr_vecinos.push(celda(obj_tabla , i+1 , j   )  ) //g
        arr_vecinos.push(celda(obj_tabla , i+1 , j+1 )  ) //h
        //limpiar el final de undefined'insertados porque no encontré un patrón en
        //todo esto :(
        arr_vecinos = 
        arr_vecinos.filter(function(item){return typeof item === 'object'}, arr_vecinos);
        return arr_vecinos;
    }

    return {
        "fila": fila,
        "columna": columna,
        "diagonales": diagonales,
        "vecinos": vecinos,
        "celda": celda,
    }
})();
