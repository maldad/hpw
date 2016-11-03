var Semantic = (function (){
    var create = function(elemento){
        return document.createElement(elemento);
    };

    boton = function(tamaño, texto){
        var boton = create('button');
        if(tamaño)
            boton.setAttribute('class', tamaño +' ui button');
        else
            boton.setAttribute('class', 'ui button');
        boton.textContent = texto;
        return boton;
    };

    boton_primario = function(texto, tamaño){
        var boton = create('button');
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui primary button');
        else
            boton.setAttribute('class', 'ui primary button');
        boton.textContent = texto;
        return boton;
    };

    boton_secundario = function(texto, tamaño){
        var boton = create('button');
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui secondary button');
        else
            boton.setAttribute('class', 'ui secondary button');
        boton.textContent = texto;
        return boton;
    }; 

    boton_led = function(texto, color, tamaño){
        var boton = create('button');
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui ' + color  + ' basic button');
        else
            boton.setAttribute('class', 'ui ' + color  + ' basic button');
        boton.textContent = texto;
        return boton;
    };

    boton_led_negro = function(texto, color, tamaño){
        var boton = create('button');
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui inverted ' + color  + ' button');
        else
            boton.setAttribute('class', 'ui inverted ' + color  + ' button');
        boton.textContent = texto;
        return boton;
    };

    boton_led_iluminar = function(texto, color, tamaño){
        var boton = create('button');
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui inverted ' + color  + ' basic button');
        else
            boton.setAttribute('class', 'ui inverted ' + color  + ' basic button');
        boton.textContent = texto;
        return boton;
    };

    boton_coloreado = function(texto, color, tamaño){
        var boton = create('button');
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui ' + color + ' button');
        else
            boton.setAttribute('class', ' ui ' + color + ' button');
        boton.textContent = texto;
        return boton;
    };

    tabla = function(cabecera, datos){
        var tabla = HTML.table(cabecera, datos);
        tabla.setAttribute('class', 'ui celled striped table');
        return tabla;
    };

    mensaje = function(texto){
        var div = create('div');
        var p = create('p');
        div.setAttribute('class', 'ui floating message');
        p.textContent = texto;
        div.appendChild(p);
        return div;
    };

    input = function(placeholder){
        var div = create('div');
        var input = create('input');
        div.setAttribute('class', 'ui input');
        input.setAttribute('placeholder', placeholder);
        input.setAttribute('type', 'text');
        div.appendChild(input);
        return div;
    };

    return {
        "boton": boton,
        "boton_primario": boton_primario,
        "boton_secundario": boton_secundario,
        "boton_led": boton_led,
        "boton_led_negro": boton_led_negro,
        "boton_led_iluminar": boton_led_iluminar,
        "boton_coloreado": boton_coloreado,
        'tabla': tabla,
        'mensaje': mensaje,
        'input': input
    };
})();
