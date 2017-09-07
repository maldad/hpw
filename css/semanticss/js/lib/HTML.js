var HTML = (function (){
    var _new = function(){
    };

    _table = function(_ths, _tds){
        var nueva_tabla = document.createElement('table');
        var nuevo_thead = document.createElement('thead');
        nueva_tabla.appendChild(nuevo_thead);
        var nuevo_tr = document.createElement('tr');
        nuevo_thead.appendChild(nuevo_tr);

        for (var i = 0; i < _ths.length; i++){
            var nuevo_td = document.createElement('th');
            nuevo_td.textContent = _ths[i];
            nuevo_tr.appendChild(nuevo_td);
        }

        nuevo_tbody = document.createElement('tbody');
        nueva_tabla.appendChild(nuevo_tbody);

        for (var i = 0; i < _tds.length; i++){
            var nuevo_tr = document.createElement('tr');

            for(var j = 0; j < _tds[i].length; j++){
                var nuevo_td = document.createElement('td');
                nuevo_td.textContent = _tds[i][j];
                nuevo_tr.appendChild(nuevo_td);
            }
            nuevo_tbody.appendChild(nuevo_tr);
        }
        return nueva_tabla;
    };

    _select = function(label, items){
        var nuevo_select = document.createElement('select');
        var label_option = document.createElement('option');
        label_option.setAttribute('value', '');
        label_option.textContent = label;
        nuevo_select.appendChild(label_option);
        for(var i = 0; i < items.length; i++){
            var nuevo_option = document.createElement('option');
            nuevo_option.setAttribute('value', items[i]);
            nuevo_option.textContent = items[i];
            nuevo_select.appendChild(nuevo_option);
        }
        return nuevo_select;
    };

    _button = function(texto){
        var nuevo_button = document.createElement('button');
        nuevo_button.textContent = texto;
        return nuevo_button;
    };

    _div = function(){
        var nuevo_div = document.createElement('div');
        return nuevo_div;
    };

    _input = function(placeholder){
        var nuevo_input = document.createElement('input');
        nuevo_input.setAttribute('placeholder', placeholder);
        return nuevo_input;
    };

    return {
        "table": _table,
        'select': _select,
        'button': _button,
        'div': _div,
        'input': _input
    };
})();
