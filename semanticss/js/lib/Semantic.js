var Semantic = (function (){

    boton = function(tamaño, texto){
        var boton = HTML.button(texto);
        if(tamaño)
            boton.setAttribute('class', tamaño +' ui button');
        else
            boton.setAttribute('class', 'ui button');
        return boton;
    };

    boton_primario = function(texto, tamaño){
        var boton = HTML.button(texto);
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui primary button');
        else
            boton.setAttribute('class', 'ui primary button');
        return boton;
    };

    boton_secundario = function(texto, tamaño){
        var boton = HTML.button(texto);
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui secondary button');
        else
            boton.setAttribute('class', 'ui secondary button');
        return boton;
    }; 

    boton_positivo = function(texto, tamaño){
        var boton = HTML.button(texto);
        if(tamaño)
            boton.setAttribute('class', tamaño + ' positive ui button');
        else
            boton.setAttribute('class', 'ui positive ui button');
        return boton;
    };

    boton_negativo = function(texto, tamaño){
        var boton = HTML.button(texto);
        if(tamaño)
            boton.setAttribute('class', tamaño + ' negative ui button');
        else
            boton.setAttribute('class', 'ui negative ui button');
        return boton;
    }

    boton_led = function(texto, color, tamaño){
        var boton = HTML.button(texto);
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui ' + color  + ' basic button');
        else
            boton.setAttribute('class', 'ui ' + color  + ' basic button');
        return boton;
    };

    boton_led_negro = function(texto, color, tamaño){
        var boton = HTML.button(texto);
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui inverted ' + color  + ' button');
        else
            boton.setAttribute('class', 'ui inverted ' + color  + ' button');
        return boton;
    };

    boton_led_iluminar = function(texto, color, tamaño){
        var boton = HTML.button(texto);
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui inverted ' + color  + ' basic button');
        else
            boton.setAttribute('class', 'ui inverted ' + color  + ' basic button');
        return boton;
    };

    boton_coloreado = function(texto, color, tamaño){
        var boton = HTML.button(texto);
        if(tamaño)
            boton.setAttribute('class', tamaño + ' ui ' + color + ' button');
        else
            boton.setAttribute('class', ' ui ' + color + ' button');
        return boton;
    };

    tabla = function(cabecera, datos){
        var tabla = HTML.table(cabecera, datos);
        tabla.setAttribute('class', 'ui celled striped table');
        return tabla;
    };

    mensaje = function(texto){
        var div = HTML.div();
        var p = document.createElement('p');
        div.setAttribute('class', 'ui floating message');
        p.textContent = texto;
        div.appendChild(p);
        return div;
    };

    input = function(placeholder){
        var div = HTML.div();
        var input = HTML.input(placeholder);
        div.setAttribute('class', 'ui input');
        div.appendChild(input);
        return div;
    };

    select = function(label, items){
        var select = HTML.select(label, items);
        select.setAttribute('class', 'ui dropdown');
        return select;
    };

    return {
        "boton": boton,
        "boton_primario": boton_primario,
        "boton_secundario": boton_secundario,
        "boton_led": boton_led,
        "boton_led_negro": boton_led_negro,
        "boton_led_iluminar": boton_led_iluminar,
        "boton_coloreado": boton_coloreado,
        'boton_positivo': boton_positivo,
        'boton_negativo': boton_negativo,
        'tabla': tabla,
        'mensaje': mensaje,
        'input': input,
        'select': select
    };
})();
