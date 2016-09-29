var Busqueda = (function () {
    var por_nombre = function(arr_autores, buscar_nombre) {
        return Arreglo.filter(function(autor) {
            return (autor.nombre.includes(buscar_nombre));
            //atributo nombre del objeto autor, incluye el nombre a buscar?
        }, arr_autores)
    };
    var por_apellido_paterno = function(arr_autores, buscar_apellido_paterno) {
        return Arreglo.filter(function(autor) {
            return (autor.apellido_paterno.includes(buscar_apellido_paterno));
            //atributo nombre del objeto autor, incluye el nombre a buscar?
        }, arr_autores)
    };
    var por_apellido_materno = function(arr_autores, buscar_apellido_materno) {
        return Arreglo.filter(function(autor) {
            return (autor.apellido_materno.includes(buscar_apellido_materno));
            //atributo nombre del objeto autor, incluye el nombre a buscar?
        }, arr_autores)
    };
    return {
        "por_nombre": por_nombre,
        "por_apellido_paterno": por_apellido_paterno,
        "por_apellido_materno": por_apellido_materno
    };
})();
