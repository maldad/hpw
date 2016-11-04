var GUI = (function () {
    ejemplo = function(){
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        var select = Semantic.select('Mes', meses);
        document.body.appendChild(select);

        var input = Semantic.input('');
        input.firstChild.setAttribute('type', 'password');
        document.body.appendChild(input);

        var boton = Semantic.boton_negativo('Cancelar');
        document.body.appendChild(boton);
    };
    return {
        'ejemplo': ejemplo
    }
})();
