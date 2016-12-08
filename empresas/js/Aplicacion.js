var Aplicacion = (function (){

    var _selecciona_empresa = function(){
        var entrada = document.getElementById('entrada').value;
        console.log('empresa: ' + entrada);
    };

    var _main = function(){
        XHR.get('csv/empresas.csv');
        // XHR.get('csv/sucursales.csv');

        var botonAceptar = document.getElementById('aceptar');
        botonAceptar.addEventListener('click', _selecciona_empresa, false);
    };

    return {
        'main': _main
    }
})();
