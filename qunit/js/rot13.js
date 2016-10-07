var Rot13 = (function () {
    var cifrar = function(texto){
        var abc = ["A", "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K", "L", "M",
        "N", "O", "P", "Q", "R", "S", "T",
        "U", "V", "W", "X", "Y", "Z"];
        //no poner dobles letras porque estamos buscando por indice, entonces encuentra 2 indices iguales :/
        var result = "";
        for(var i = 0; i < texto.length; i++)
            result = result + abc[abc.indexOf(texto[i]) + 13]; 
            return result;
        /*
        if(texto === "A")
            return "N";
        if(texto === "B")
            return "O";
        if(texto === "C")
            return "P";
        if(texto === "D")
            return "Q";
        if(texto === "E")
            return "R";
        if(texto === "F")
            return "S";
        if(texto === "G")
            return "T";
        if(texto === "H")
            return "U";
        if(texto === "I")
            return "V";
        if(texto === "J")
            return "W";
        if(texto === "K")
            return "X";
        if(texto === "L")
            return "Y";
        if(texto === "M")
            return "Z";
            */
    };
    return {
        cifrar: cifrar
    };
})();
