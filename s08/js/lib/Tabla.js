var Tabla = (function(){

    var autores = function(arr_autores) {
        var arr_salida = [];
        var arr_autor = [];
        for(var i = 0; i < arr_autores.length; i++){
            arr_autor.push(arr_autores[i].id);
            arr_autor.push(arr_autores[i].nombre);
            arr_autor.push(arr_autores[i].apellido.paterno);
            arr_autor.push(arr_autores[i].apellido.materno);

            arr_salida.push(arr_autor);
            arr_autor = [];
        }
        return arr_salida;
    };

    var libros = function(arr_libros){
        var arr_salida = [];
        var arr_libro = [];
        for(var i = 0; i < arr_libros.length; i++){
            arr_libro.push(arr_libros[i].isbn);
            arr_libro.push(arr_libros[i].id);
            arr_libro.push(arr_libros[i].titulo);
            arr_libro.push(arr_libros[i].publicacion)
            arr_libro.push(arr_libros[i].editorial)
            arr_libro.push(arr_libros[i].genero)

            arr_salida.push(arr_libro);
            arr_libro = [];
        }
        return arr_salida;
    };
    
    var busca_autor = function(arr_autores){
        var arr_salida = [];
        var arr_autor = [];
        for(var i = 0; i < arr_autores.length; i++){
            arr_autor.push(arr_autores[i].id);
            arr_autor.push(arr_autores[i].nombre);
            arr_autor.push(arr_autores[i].apellido.paterno);
            arr_autor.push(arr_autores[i].apellido.materno);

            arr_salida.push(arr_autor);
            arr_autor = [];
        }
        return arr_salida;
    };

    var busca_libro = function(arr_libros){
        var arr_salida = [];
        var arr_libro = [];
        for(var i = 0; i < arr_libros.length; i++){
            arr_libro.push(arr_libros[i].isbn);
            arr_libro.push(arr_libros[i].id);
            arr_libro.push(arr_libros[i].titulo);
            arr_libro.push(arr_libros[i].publicacion)
            arr_libro.push(arr_libros[i].editorial)
            arr_libro.push(arr_libros[i].genero)

            arr_salida.push(arr_libro);
            arr_libro = [];
        }
        return arr_salida;
    };

    return {
        "autores": autores,
        "libros": libros,
        "busca_autor": busca_autor,
        "busca_libro": busca_libro
    }
})();
