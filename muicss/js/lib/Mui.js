var Mui = (function () {

    boton = function(texto){
        var boton = HTML.button(texto);
        boton.setAttribute('class', 'mui-btn mui-btn--raised');
        boton.textContent = texto;
        return boton;
    };

    boton_primario = function(texto){
        var boton = HTML.button(texto);
        boton.setAttribute('class', 'mui-btn mui-btn--raised mui-btn--primary');
        boton.textContent = texto;
        return boton;
    };

    boton_peligro = function(texto){
        var boton = HTML.button(texto);
        boton.setAttribute('class', 'mui-btn mui-btn--raised mui-btn--danger');
        boton.textContent = texto;
        return boton;
    };

    boton_acento = function(texto){
        var boton = HTMl.button(texto);
        boton.setAttribute('class', 'mui-btn mui-btn--raised mui-btn--accent');
        boton.textContent = texto;
        return boton;
    };

    tabla = function(cabecera, datos){
        var tabla = HTML.table(cabecera, datos);
        tabla.setAttribute('class', 'mui-table');
        return tabla;
    };

    tabla_bordes = function(cabecera, datos){
        var tabla = HTML.table(cabecera, datos);
        tabla.setAttribute('class', 'mui-table mui-table--bordered');
        return tabla;
    };

    input = function(placeholder){
        var div = HTML.div();
        var input = HTML.input(placeholder);
        div.setAttribute('class', 'mui-textfield');
        div.appendChild(input);
        return div;
    };

    select = function(label, items){
        var div = HTML.div();
        var select = HTML.select(label, items);
        div.setAttribute('class', 'mui-select');
        div.appendChild(select);
        return div;
    };

    return {
        "boton": boton,
        "boton_primario": boton_primario,
        "boton_peligro": boton_peligro,
        "boton_acento": boton_acento,
        'tabla': tabla,
        'tabla_bordes': tabla_bordes,
        'input': input,
        'select': select
    };
})();
