var GUI = (function () {
    ejemplo = function(){
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        var select = Mui.Form.select(meses, 'Mes').element();
        document.body.appendChild(select);

        var input = Mui.Form.input('').element();
        input.firstChild.setAttribute('type', 'password');
        document.body.appendChild(input);

        var boton = Mui.Button.danger().
            set_text('Cancelar').
            element();
        document.body.appendChild(boton);
    };
    return {
        'ejemplo': ejemplo
    }
})();
