var Busqueda = (function () {
    var por_nombre = function(arr_autores, buscar_nombre) {
        return Arreglo.filter(function(autor) {
            return (autor.nombre.includes(buscar_nombre));
            //atributo nombre del objeto autor, incluye el nombre a buscar?
        }, arr_autores)
    };
    return {
        "por_nombre": por_nombre
    };
})();
