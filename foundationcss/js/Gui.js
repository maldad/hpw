var GUI = (function () {
    ejemplo = function(){
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        var select = Foundation.select('Mes', meses);
        document.body.appendChild(select);

        var input = Foundation.input('');
        input.setAttribute('type', 'password');
        document.body.appendChild(input);

        var boton = Foundation.boton('Cancelar', 'alert', 'large');
        document.body.appendChild(boton);
    };
    return {
        'ejemplo': ejemplo
    }
})();
