var Vecinos = (function(){

    masUno = function() {
        var tabla = document.getElementById('tabla');
        var f = function(oe){
            console.log(new Date());
            console.log(oe.originalTarget.tagName);
            if(oe.originalTarget.tagName !== 'TD')
                return;
            var td = oe.originalTarget;
            var vecinos = [];
            //lados
            if(td.nextElementSibling !== null)
                vecinos.push(td.nextElementSibling);
            if(td.previousElementSibling !== null)
                vecinos.push(td.previousElementSibling);
            //arriba
            if(td.parentNode.previousElementSibling !== null){
                vecinos.push(td.parentNode.previousElementSibling.children[td.cellIndex - 1]);
                vecinos.push(td.parentNode.previousElementSibling.children[td.cellIndex]);
                vecinos.push(td.parentNode.previousElementSibling.children[td.cellIndex + 1]);
            }
            //abajo
            if(td.parentNode.nextElementSibling !== null){
                vecinos.push(td.parentNode.nextElementSibling.children[td.cellIndex - 1]);
                vecinos.push(td.parentNode.nextElementSibling.children[td.cellIndex]);
                vecinos.push(td.parentNode.nextElementSibling.children[td.cellIndex + 1]);
            }

            console.log(vecinos);
            for(var i = 0; i < vecinos.length; i++){
                if(vecinos[i] === null || vecinos[i] === undefined)
                    continue;
                vecinos[i].textContent = Number(vecinos[i].textContent) + 1;
            }

            console.log(new Date());
        };

        tabla.addEventListener('click', f, false)
    };

    masUnoHorario = function() {
        var tabla = document.getElementById('tabla');
        var f = function(oe){
            console.log(new Date());
            console.log(oe.originalTarget.tagName);
            if(oe.originalTarget.tagName !== 'TD')
                return;
            var td = oe.originalTarget;
            var vecinos = [];
            //agregarlos en una forma diferente
            //arriba
            if(td.parentNode.previousElementSibling !== null){
                vecinos.push(td.parentNode.previousElementSibling.children[td.cellIndex]);
                vecinos.push(td.parentNode.previousElementSibling.children[td.cellIndex + 1]);
            }else
                vecinos.push(undefined);
            //lados
            if(td.nextElementSibling !== null)
                vecinos.push(td.nextElementSibling);
            else
                vecinos.push(undefined);
            //abajo
            if(td.parentNode.nextElementSibling !== null){
                vecinos.push(td.parentNode.nextElementSibling.children[td.cellIndex + 1]);
                vecinos.push(td.parentNode.nextElementSibling.children[td.cellIndex]);
                vecinos.push(td.parentNode.nextElementSibling.children[td.cellIndex - 1]);
            }else
                vecinos.push(undefined);
            //lados
            if(td.previousElementSibling !== null)
                vecinos.push(td.previousElementSibling);
            else
                vecinos.push(undefined);
            //arriba
            if(td.parentNode.previousElementSibling !== null)
                vecinos.push(td.parentNode.previousElementSibling.children[td.cellIndex - 1]);
            else
                vecinos.push(undefined);

            console.log(vecinos);
            for(var i = 0; i < vecinos.length; i++){
                if(vecinos[i] === null || vecinos[i] === undefined)
                    continue;
                vecinos[i].textContent = Number(vecinos[i].textContent) + (i + 1);
            }

            console.log(new Date());
        };

        tabla.addEventListener('dblclick', f, false)
    };

    return{
        "masUno": masUno,
        "masUnoHorario": masUnoHorario
    };
})();


