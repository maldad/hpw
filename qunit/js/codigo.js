var Codigo = (function () {
    var _sumatoria_hasta_el = function(final) {
        //return 21;
        var suma = 0;
        if(final % 1 !== 0)
            return 0;
        if(typeof(final) !== "number")
            return 0;

        for(var i = 0; i <= final; i++){
            suma = suma + i;
        }
        return suma;
    };
    return {
        "sumatoria_hasta_el": _sumatoria_hasta_el
    };
})();
