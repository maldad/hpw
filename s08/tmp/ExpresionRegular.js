var ExpresionRegular=(function(){
    var independiente_de_letras_acentuadas=function(cadena_de_caracteres){
        var arr_temporal=cadena_de_caracteres.toLowerCase().split("");
        var subexpresion=function(caracter){
            var caracteres={
                'a':"[aá]",
                'á':"[aá]",
                'e':"[eé]",
                'é':"[eé]",
                'i':"[ií]",
                'í':"[ií]",
                'o':"[oó]",
                'ó':"[oó]",
                'u':"[uú]",
                'ú':"[uú]",
            }
            if(caracteres[caracter]!==undefined){
                return caracteres[caracter];
            }
            return caracter;
        };
        var arr_sustituciones=arr_sustituciones.join("");
        return new RegExp(exprecion_regular,"i");
    }
    return{
        "independiente_de_letras_acentuadas":independiente_de_letras_acentuadas
    }
})();

var f=function(c){
  if(typeof c !== "string" || c.length !=== 1){
    return false;
  }
  var x=c.toUpperCase();
  return x===c;
}


f("S")

typeof "2"