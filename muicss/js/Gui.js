var GUI = (function () {
    ejemplo = function(){
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        var select = Mui.select('Mes', meses);
        document.body.appendChild(select);

        var input = Mui.input('');
        input.firstChild.setAttribute('type', 'password');
        document.body.appendChild(input);

        var boton = Mui.boton_peligro('Cancelar');
        document.body.appendChild(boton);
    };
    return {
        'ejemplo': ejemplo
    }
})();
