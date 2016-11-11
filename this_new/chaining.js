var Contador = function(inicio){
    var _estado = inicio;
    var obj = {
        'incrementar': function(){
            _estado = _estado + 1;
            return obj;
        },
        'incrementarEnDos': function(){
            _estado = _estado + 2;
            return obj;
        },
        'incrementarEnTres': function(){
            _estado = _estado + 3;
            return obj;
        },
        'valor': function(){
            return _estado;
        }
    };
    return obj;
};

Contador(10).
incrementar().
incrementar().
incrementar().
incrementar().
incrementar().
valor();

Contador(10).
incrementarEnDos().
incrementar().
incrementarEnDos().
incrementar().
incrementarEnTres().
valor();
