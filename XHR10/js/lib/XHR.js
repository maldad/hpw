var XHR = (function() {
    var _detectar_cambios_de_estado = function(xhr, _obj_parametros){
        return function(){
            if(xhr.readyState === 4){
                console.log(xhr.status);
                if(xhr.status >= 200 && xhr.status <= 299){
                    _obj_parametros.en_caso_de_exito(xhr.responseText);
                }else{
                    _obj_parametros.en_caso_de_error(xhr.responseText);
                }
            }
        };
    };
    var _get = function(_obj_parametros){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = _detectar_cambios_de_estado(xhr, _obj_parametros);
        var url = _obj_parametros.url + '?r=' + Math.random();
        xhr.open('GET', url);
        xhr.send();
    };
    return {
        'get': _get
    }
})();
