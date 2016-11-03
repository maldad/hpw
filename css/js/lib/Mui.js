var Mui = (function () {
    var create = function(elemento){
        return document.createElement(elemento);
    };

    boton = function(texto){
        var boton = create('button');
        boton.setAttribute('class', 'mui-btn mui-btn--raised');
        boton.textContent = texto;
        return boton;
    };

    boton_primario = function(texto){
        var boton = create('button');
        boton.setAttribute('class', 'mui-btn mui-btn--raised mui-btn--primary');
        boton.textContent = texto;
        return boton;
    };

    boton_peligro = function(texto){
        var boton = create('button');
        boton.setAttribute('class', 'mui-btn mui-btn--raised mui-btn--danger');
        boton.textContent = texto;
        return boton;
    };

    boton_acento = function(texto){
        var boton = create('button');
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
        var div = create('div');
        var input = create('input');
        div.setAttribute('class', 'mui-textfield');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', placeholder);
        div.appendChild(input);
        return div;
    };

    return {
        "boton": boton,
        "boton_primario": boton_primario,
        "boton_peligro": boton_peligro,
        "boton_acento": boton_acento,
        'tabla': tabla,
        'tabla_bordes': tabla_bordes,
        'input': input
    };
})();
