var Imprimir = (function() {
    var autores = function(arr_autores) {
        for(var i = 0; i < arr_autores.length; i++){
            console.log("ID: " + arr_autores[i].id);
            console.log("Nombre: " + arr_autores[i].nombre);
        }
    }
    var libros = function(arr_libros){
        for(var i = 0; i < arr_libros.length; i++){
            console.log("ID: " + arr_libros[i].id);
            console.log("Nombre: " + arr_libros[i].titulo);
        }
    }
    return {
        "autores": autores,
        "libros": libros
    };
})();
