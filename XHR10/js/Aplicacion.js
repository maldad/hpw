var Aplicacion  = (function(){

    var _no_procesar_recurso_descargado = function(){
        console.log('algo pasó');
    }

    var _procesar_recurso_descargado = function(_recurso_descargado){
        console.log('Procesando recurso descargado...');
        var lineas = _recurso_descargado.split('\n');
        for(var i = 0; i < lineas.length; i++){
            console.log(lineas[i].toUpperCase());
        }
    };

    var _main = function(){
        console.log(new Date());
        console.info('Iniciando aplicación...');
        XHR.get({
            'url': 'http://127.0.0.1:8080/txt/passwd.txt',
            'en_caso_de_exito': _procesar_recurso_descargado,
            'en_caso_de_error': _no_procesar_recurso_descargado
        });
        console.info('Aplicación inicializada');
    };
    return {
        'main': _main
    };
})();
