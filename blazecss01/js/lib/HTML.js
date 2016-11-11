var HTML = (function (){
    var _envolver = function(obj){
        var _estado = obj;
        var _envoltura = {
            'set_id': function(_id){
                _estado.setAttribute('id', _id);
                return _envoltura;
            },
            'set_text': function(_text){
                _estado.textContent = _text;
                return _envoltura;
            },
            'element': function(){
                return _estado;
            }
        };
        return _envoltura;
    };

    var _new_element = function(_etiqueta, _obj_atributos){
        var nuevo_elemento = document.createElement(_etiqueta);
        for(var atributo in  _obj_atributos)
            nuevo_elemento.setAttribute(atributo, _obj_atributos[atributo]);
        return _envolver(nuevo_elemento);
    };

    return {
        'new_element': _new_element
    };
})();
