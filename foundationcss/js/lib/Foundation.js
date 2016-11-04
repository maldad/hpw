var Foundation = (function () {
    /*
     <a class="expanded button" href="#">Such Expand</a>
     <a class="alert button" href="#">Alert Color</a>
     tipo de boton: secondary, success, alert, warning, disabled
     tamaños: tiny, small, large, expanded
     */

    boton = function(texto, tipo, tamaño){
        var boton = HTML.button(texto);
        boton.setAttribute('type', 'button');
        boton.setAttribute('class', tamaño  +' '+tipo + ' button');
        return boton;
    };

    boton_hollow = function(texto, tipo, tamaño){
        var boton = HTML.button(texto);
        boton.setAttribute('type', 'button');
        boton.setAttribute('class', tamaño  +' '+tipo + ' hollow button');
        return boton;
    };

    select = function(label, items){
        var select = HTML.select(label, items);
        return select;
    };

    input = function(placeholder){
        var input = HTML.input(placeholder);
        return input;
    };

    tabla = function(cabecera, datos){
        var tabla = HTML.table(cabecera, datos);
        tabla.setAttribute('class', 'hover');
        return tabla;
    };

    return {
        'select': select,
        'input': input,
        'boton': boton,
        'boton_hollow': boton_hollow,
        'tabla': tabla
    };

})();
