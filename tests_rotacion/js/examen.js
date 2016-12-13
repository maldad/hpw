var Examen = (function() {
    var _alfabeto_siguientes = {
        "A":"B",
        "B":"C",
        "C":"D",
        "D":"E",
        "E":"F",
        "F":"G",
        "G":"H",
        "H":"I",
        "I":"J",
        "J":"K",
        "K":"L",
        "L":"M",
        "M":"N",
        "N":"Ñ",
        "Ñ":"O",
        "O":"P",
        "P":"Q",
        "Q":"R",
        "R":"S",
        "S":"T",
        "T":"U",
        "U":"V",
        "V":"W",
        "W":"X",
        "X":"Y",
        "Y":"Z",
        "Z":"A"
    };

    var _alfabeto_previos = {
        "A":"Z",
        "B":"A",
        "C":"B",
        "D":"C",
        "E":"D",
        "F":"E",
        "G":"F",
        "H":"G",
        "I":"H",
        "J":"I",
        "K":"J",
        "L":"K",
        "M":"L",
        "N":"M",
        "Ñ":"N",
        "O":"Ñ",
        "P":"O",
        "Q":"P",
        "R":"Q",
        "S":"R",
        "T":"S",
        "U":"T",
        "V":"U",
        "W":"V",
        "X":"W",
        "Y":"X",
        "Z":"Y"
    };

    var fa = function(caracter, entero) {
        if (typeof caracter !== "string") {
            return caracter;
        }

        if (typeof entero !== "number" ) {
            return caracter;
        }

        if (caracter.length !== 1) {
            return caracter;
        }
        if (entero < 0) {
            return caracter;
        }

        var sustituto = _alfabeto_siguientes[caracter.toUpperCase()];
        
        if (sustituto === undefined || entero === 0) {
            return caracter;
        }

        for (var i = 0; i < (entero - 1); i++) {
            sustituto = _alfabeto_siguientes[sustituto];
        }

        if (caracter === caracter.toUpperCase()) {
            return sustituto.toUpperCase();
        }
        return sustituto.toLowerCase();
    };

    var fb = function(caracter, entero) {
        if (typeof caracter !== "string") {
            return caracter;
        }

        if (typeof entero !== "number" ) {
            return caracter;
        }

        if (caracter.length !== 1) {
            return caracter;
        }
        if (entero > 0) {
            return caracter;
        }

        var sustituto = _alfabeto_previos[caracter.toUpperCase()];
        
        if (sustituto === undefined || entero === 0) {
            return caracter;
        }

        for (var i = 0; i < ((entero * -1) - 1); i++) {
            sustituto = _alfabeto_previos[sustituto];
        }

        if (caracter === caracter.toUpperCase()) {
            return sustituto.toUpperCase();
        }
        return sustituto.toLowerCase();
    };

    var fc = function(caracteres) {
        if (typeof caracteres === "string" && caracteres.length === 0) {
            return caracteres;
        }
        var salida = "";
        for (var i = 0; i < caracteres.length; i++) {
            salida += fa(caracteres[i], i);
        }
        return salida;
    };

    var fd = function(caracteres) {
        if (typeof caracteres === "string" && caracteres.length === 0) {
            return caracteres;
        }
        var salida = "";
        for (var i = 0; i < caracteres.length; i++) {
            salida += fb(caracteres[i], (i * -1));
        }
        return salida;
    };

    return {
        "fa": fa,
        "fb": fb,
        "fc": fc,
        "fd": fd
    }
})();