
var tar = document.getElementById
('tablaArriba');
tar

var tab = document.getElementById
('tablaAbajo');
tab

var f = function(oe){
  console.log(new Date());
  
  var td = oe.originalTarget;
  //fila y columna
  var fila = td.parentNode.rowIndex;
  var columna = td.cellIndex;
  
  td.style.backgroundColor = 'red';
  
  //cambiar a la otra tabla.
  var td2 = 
  tab.children[1].children[fila].children[columna];
  td2.style.backgroundColor = 'red';
  console.log(new Date());
}

tar.addEventListener('click', f, false);
tab.addEventListener('click', f, false);



var a  = function(oe){
  var elemento = oe.originalTarget;
  var tecla = oe.key;
  if(tecla === 'ArrowUp'){
    console.log('Arriba');
  }
  if(tecla === 'ArrowDown'){
    console.log('Abajo');
  }
  if(tecla === 'ArrowLeft'){
    console.log('Izquierda');
  }
  if(tecla === 'ArrowRight'){
    console.log('Derecha');
  }
}

var pestaña = window;
pestaña.addEventListener('keypress', a, false);



