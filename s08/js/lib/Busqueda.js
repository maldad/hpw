var Busqueda = (function () {
    var por_nombre = function(arr_autores, buscar_nombre) {
        return Arreglo.filter(function(autor) {
            return (autor.nombre.toLowerCase() === buscar_nombre.toLowerCase());
        }, arr_autores)
    };
    var por_apellido_paterno = function(arr_autores, buscar_apellido_paterno) {
        return Arreglo.filter(function(autor) {
            return (autor.apellido.paterno.toLowerCase() === buscar_apellido_paterno.toLowerCase());
        }, arr_autores)
    };
    var por_apellido_materno = function(arr_autores, buscar_apellido_materno) {
        return Arreglo.filter(function(autor) {
            return (autor.apellido.materno.toLowerCase() === buscar_apellido_materno.toLowerCase());
        }, arr_autores)
    };
    var por_autor = function(arr_autores, buscar_autor){
        return Arreglo.filter(function(autor) {
            return (autor.nombre.toLowerCase() === buscar_autor.toLowerCase().trim() || 
                    autor.apellido.paterno.toLowerCase() === buscar_autor.toLowerCase().trim() ||
                    autor.apellido.materno.toLowerCase() === buscar_autor.toLowerCase().trim())
        }, arr_autores)
    };
    var por_autor_regex = function(arr_autores, buscar_autor){
        return Arreglo.filter(function(autor) {
            //first trim...
            buscar_autor = buscar_autor.trim();
            //turn buscar_autor into a regex...
            regex = new RegExp(buscar_autor, 'i')
            return (regex.test(autor.nombre) || regex.test(autor.apellido.paterno) ||
                    regex.test(autor.apellido.materno)) }, arr_autores)
    };
    var por_libro = function(arr_libros, buscar_libro) {
        return Arreglo.filter(function(libro) {
            //return (libro.titulo.toLowerCase() === buscar_libro.toLowerCase())
            return (libro.titulo.toLowerCase().includes(buscar_libro.toLowerCase()))
        }, arr_libros)
    };
    var por_isbn = function(arr_libros, buscar_isbn) {
        return Arreglo.filter(function(libro) {
            //return (libro.titulo.toLowerCase() === buscar_libro.toLowerCase())
            return (libro.isbn.toLowerCase().includes(buscar_isbn.toLowerCase()))
        }, arr_libros)
    };
    var por_genero = function(arr_libros, buscar_genero) {
        return Arreglo.filter(function(libro) {
            return (libro.genero.toLowerCase() === buscar_genero.toLowerCase())
            //return (libro.genero.toLowerCase().includes(buscar_genero.toLowerCase()))
        }, arr_libros)
    };
    var por_publicacion = function(arr_libros, buscar_publicacion) {
        return Arreglo.filter(function(libro) {
            return (libro.publicacion === buscar_publicacion);
            //libro.publicacion.toLowerCase() is not a function, what the hell?
            //return (libro.publicacion.toLowerCase() === buscar_publicacion.toLowerCase())
        }, arr_libros)
    };
    return {
        "por_nombre": por_nombre,
        "por_apellido_paterno": por_apellido_paterno,
        "por_apellido_materno": por_apellido_materno,
        "por_libro": por_libro,
        "por_isbn": por_isbn,
        "por_genero": por_genero,
        "por_publicacion": por_publicacion,
        "por_autor": por_autor,
    };
})();
