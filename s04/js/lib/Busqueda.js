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
    return {
        "por_nombre": por_nombre,
        "por_apellido_paterno": por_apellido_paterno,
        "por_apellido_materno": por_apellido_materno
    };
})();
