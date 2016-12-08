var Procesar = (function() {

    var empresas = [];

    _crea_rellena_select = function(obj){
        var select = document.getElementById('entrada');
        var raw = obj.split('\r\n');
        var emp = {};
        for(var i = 0; i < raw.length; i++){
            var tmp = raw[i].split('|');
            emp.id = tmp[0];
            emp.nombre = tmp[1];
            empresas.push(emp);
            emp = {};
        }
        for(var i = 1; i < empresas.length; i++){
            var nuevo_option = document.createElement('option');
            nuevo_option.textContent = empresas[i].id + ' -> ' + empresas[i].nombre;
            nuevo_option.setAttribute('value', empresas[i].id);
            select.appendChild(nuevo_option);
        }
    };

    return {
        'creaRellenaSelect': _crea_rellena_select
    };
})();
