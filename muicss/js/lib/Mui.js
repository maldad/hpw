var Mui = (function (){
    return {
        'Button': undefined,
        'Table': undefined,
        'Form': undefined
    };
})();

Mui.Form = (function (){

    var _input = function(placeholder){
        var div = HTML.new_element('div', { 'class': 'mui-textfield' });
        var input = HTML.new_element('input', { 'placeholder': placeholder });
        div.append_child(input.element());
        return div;
    };
    
    var _select = function(items, display_name){
        var div = HTML.new_element('div', {'class': 'mui-select'});

        var opt_display = HTML.new_element('option', { 'value': '' });
        opt_display.set_text(display_name);

        var nuevo_select = HTML.new_element('select', {});
        nuevo_select.append_child(opt_display.element());

        for(var i = 0; i < items.length; i++){
            var nuevo_option = HTML.new_element('option', { 'value': items[i] });
            nuevo_option.set_text(items[i]);
            //se usa el append_child porque es un objeto JS
            nuevo_select.append_child(nuevo_option.element());
        }
        div.append_child(nuevo_select.element());
        return div;
    };

    return {
        'select': _select,
        'input': _input
    };
})();

Mui.Table = (function(){
    var _table = function(_ths, _tds){
        var nueva_tabla = HTML.new_element('table', {'class': 'mui-table'});
        //alterar la tabla con los datos
        var nuevo_thead = HTML.new_element('thead', {});
        nueva_tabla.append_child(nuevo_thead.element());
        var nuevo_tr = HTML.new_element('tr', {});
        nuevo_thead.append_child(nuevo_tr.element());

        for (var i = 0; i < _ths.length; i++){
            var nuevo_td = HTML.new_element('th', {});
            nuevo_td.set_text(_ths[i]);
            nuevo_tr.append_child(nuevo_td.element());
        }

        nuevo_tbody = HTML.new_element('tbody', {});
        nueva_tabla.append_child(nuevo_tbody.element());

        for (var i = 0; i < _tds.length; i++){
            var nuevo_tr = HTML.new_element('tr', {});

            for(var j = 0; j < _tds[i].length; j++){
                var nuevo_td = HTML.new_element('td', {});
                nuevo_td.set_text(_tds[i][j]);
                nuevo_tr.append_child(nuevo_td.element());
            }
            nuevo_tbody.append_child(nuevo_tr.element());
        }
        return nueva_tabla; //ya está envuelta, mirar 1a linea de esta función
        // return HTML.new_table({'class': 'mui-table'}, _ths, _tds);
    };

    return {
        'table': _table
    }

})();

Mui.Button = (function(){
    var _raised = function(){
        return HTML.new_element('button', {
            'class': 'mui-btn mui-btn--raised'
        });
    };

    var _primary = function(){
        return HTML.new_element('button', {
            'class': 'mui-btn mui-btn--raised mui-btn--primary'
        });
    };

    var _danger = function(){ 
        return HTML.new_element('button', {
            'class': 'mui-btn mui-btn--raised mui-btn--danger'
        });
    };

    var _accent = function(){
        return HTML.new_element('button', {
            'class': 'mui-btn mui-btn--raised mui-btn--accent'
        });
    };

    return{
        'raised': _raised,
        'primary': _primary,
        'danger': _danger,
        'accent': _accent
    };
})();



