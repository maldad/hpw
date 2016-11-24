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

    intercambiar = function(){
        var tabla = document.getElementById('tabla');
        var f = function(oe){
            console.log(oe.originalTarget.tagName);
            if(oe.originalTarget.tagName !== 'TD')
                return;
            var td = oe.originalTarget;
            var vecinosArriba = [];
            var vecinosAbajo = [];
            //arriba
            if(td.parentNode.previousElementSibling !== null){
                vecinosArriba.push(td.parentNode.previousElementSibling.children[td.cellIndex - 1]);
                vecinosArriba.push(td.parentNode.previousElementSibling.children[td.cellIndex]);
                vecinosArriba.push(td.parentNode.previousElementSibling.children[td.cellIndex + 1]);
            }
            //abajo
            if(td.parentNode.nextElementSibling !== null){
                vecinosAbajo.push(td.parentNode.nextElementSibling.children[td.cellIndex - 1]);
                vecinosAbajo.push(td.parentNode.nextElementSibling.children[td.cellIndex]);
                vecinosAbajo.push(td.parentNode.nextElementSibling.children[td.cellIndex + 1]);
            }
            //intercambiar...
            var aux = vecinosArriba;
            console.log(aux);
            console.log(vecinosArriba);
            console.log(vecinosAbajo);
            vecinosArriba[0].textContent = vecinosAbajo[0].textContent;
            vecinosArriba[1].textContent = vecinosAbajo[1].textContent;
            vecinosArriba[2].textContent = vecinosAbajo[2].textContent;
            vecinosAbajo[0].textContent = aux[0].textContent;
            vecinosAbajo[1].textContent = aux[1].textContent;
            vecinosAbajo[2].textContent = aux[2].textContent;
        }
        tabla.addEventListener('click', f, false);
    };


    quitaFila = function(){
        var tabla = document.getElementById('tabla');
        var f = function(oe){
            var elemento = oe.originalTarget;
            console.log(elemento);
            if(elemento.tagName === 'TD'){
                var tr = elemento.parentNode;
                var tbody = elemento.parentNode.parentNode;
                var trs = (tbody.children);
                for(var i = 0; i < trs.length; i++){
                    trs[i] = trs[i + 1];
                }
                tbody.removeChild(tr);
            }
        };
        tabla.addEventListener('click', f, false);
    };

    return{
        "masUno": masUno,
        "masUnoHorario": masUnoHorario,
        "intercambiar": intercambiar,
        "quitafila": quitaFila
    };
})();


var tabla = document.getElementById('tabla');
        var f = function(oe){
          var elemento = oe.originalTarget;
          console.log(elemento);
          if(elemento.tagName === 'TD'){
            if(elemento.style.backgroundColor === '')
              elemento.style.backgroundColor = 'red';
            else
            if(elemento.style.backgroundColor === 'red')
              elemento.style.backgroundColor = 'green';
          }
        };

var tds = tabla.getElementsByTagName('td');
for(var i = 0; i < tds.length; i++)
  tds[i].addEventListener('mouseenter', f, false);
