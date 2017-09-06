var PintaTabla = (function () {
    click_en_celda = function(){
        var tar = document.getElementById('tablaArriba');
        var tab = document.getElementById('tablaAbajo');

        var f = function(oe){
            console.log(new Date());

            var td = oe.originalTarget;
            //fila y columna
            var fila = td.parentNode.rowIndex;
            var columna = td.cellIndex;

            td.style.backgroundColor = 'red';

            //cambiar a la otra tabla.
            var td2 = tab.children[1].children[fila].children[columna];
            td2.style.backgroundColor = 'red';
            console.log(new Date());
        };

        var g = function(oe){
            console.log(new Date());

            var td = oe.originalTarget;
            //fila y columna
            var fila = td.parentNode.rowIndex;
            var columna = td.cellIndex;

            td.style.backgroundColor = 'red';

            //cambiar a la otra tabla.
            var td2 = tar.children[1].children[fila].children[columna];
            td2.style.backgroundColor = 'red';
            console.log(new Date());
        }

        tar.addEventListener('click', f, false);
        tab.addEventListener('click', g, false);
    };

    wasd = function(){
        var tar = document.getElementById('tablaArriba');
        var tdinicio = tar.children[1].children[9].children[0];
        tdinicio.style.backgroundColor = 'red';

        var a  = function(oe){
            var elemento = oe.originalTarget;
            var tecla = oe.key;
            if(tecla === 'w'){
                tdinicio.parentNode.previousElementSibling.children[tdinicio.cellIndex].
                    style.backgroundColor = 'red';

                tdinicio = tdinicio.parentNode.previousElementSibling.
                  children[tdinicio.cellIndex]
            }
            if(tecla === 's'){
                tdinicio.parentNode.nextElementSibling.children[tdinicio.cellIndex].
                    style.backgroundColor = 'red';

                tdinicio = tdinicio.parentNode.nextElementSibling.children[tdinicio.cellIndex];
            }
            if(tecla === 'a'){
                tdinicio.previousElementSibling.style.backgroundColor = 'red';
                tdinicio = tdinicio.previousElementSibling;
            }
            if(tecla === 'd'){
                tdinicio.nextElementSibling.style.backgroundColor = 'red';
                tdinicio = tdinicio.nextElementSibling;
            }
        };

        var pestaña = window;
        window.addEventListener('keypress', a, false);
    };

    main = function(){
      click_en_celda();
      wasd();
    }

    return {
        "conClicArribaYAbajo": click_en_celda,
        "conWASD": wasd,
        "main" : main
    }
})();
// var a  = function(oe){
//   var elemento = oe.originalTarget;
//   var tecla = oe.key;
//   if(tecla === 'ArrowUp'){
//     console.log('Arriba');
//   }
//   if(tecla === 'ArrowDown'){
//     console.log('Abajo');
//   }
//   if(tecla === 'ArrowLeft'){
//     console.log('Izquierda');
//   }
//   if(tecla === 'ArrowRight'){
//     console.log('Derecha');
//   }
// }
//
// var pestaña = window;
// pestaña.addEventListener('keypress', a, false);
