var closure = function(inicio){
    var estado = inicio;
    return function(){
        console.log(estado);
        estado = estado + 10;
    }
}

var x = closure(10);
x();

var main = function(){
    console.log(iniciando);
    var a = function(inicio, incremento){
        var estado = inicio;
        return function(obj_evento){
            console.log(new Date());
            
            var contador = document.getElementById('contador');
            contador.value = estado;
            estado = estado + incremento;
        };
    };

    var incrementar = document.getElementById('incrementar');
    incrementar.addEventListener('click', a(10, 5), false);

    console.log('Terminando...');
};

main();
