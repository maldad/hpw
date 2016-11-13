var Mui = (function (){
    return {
        'Button': undefined,
        'Table': undefined,
        'Form': undefined
    };
})();

Mui.Form = (function (){

    var _input = function(placeholder){
        var div = HTML.new_element('div', {
            'class': 'mui-textfield'
        });
        var input = HTML.new_element('input', {
            'placeholder': placeholder
        });
        div.appendChild(input);
        return div.element();
    };
    
    select = function(label, items){
        var div = HTML.div();
        var select = HTML.select(label, items);
        div.setAttribute('class', 'mui-select');
        div.appendChild(select);
        return div;
    };
})();

Mui.Table = (function(){
    var _table = function(){
        // var tabla = HTML.table(cabecera, datos);
        // tabla.setAttribute('class', 'mui-table');
        // return tabla;
    };

    // se puede setear el bordeo desde el .add_class de HTML
    // var tabla_bordes = function(cabecera, datos){
    //     var tabla = HTML.table(cabecera, datos);
    //     tabla.setAttribute('class', 'mui-table mui-table--bordered');
    //     return tabla;
    // };
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



