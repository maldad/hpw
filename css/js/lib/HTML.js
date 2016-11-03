var HTML = (function (){
    var _new = function(){
    };

    _table = function(_ths, _tds){
        var nueva_tabla = document.createElement('table');
       var nuevo_thead = document.createElement('thead');
       nueva_tabla.appendChild(nuevo_thead);
       var nuevo_tr = document.createElement('tr');
       nuevo_thead.appendChild(nuevo_tr);

       for (var i = 0; i < _ths.length; i++){
           var nuevo_td = document.createElement('th');
           nuevo_td.textContent = _ths[i];
           nuevo_tr.appendChild(nuevo_td);
       }

       nuevo_tbody = document.createElement('tbody');
       nueva_tabla.appendChild(nuevo_tbody);

       for (var i = 0; i < _tds.length; i++){
           var nuevo_tr = document.createElement('tr');

           for(var j = 0; j < _tds[i].length; j++){
               var nuevo_td = document.createElement('td');
               nuevo_td.textContent = _tds[i][j];
               nuevo_tr.appendChild(nuevo_td);
           }
           nuevo_tbody.appendChild(nuevo_tr);
       }
       return nueva_tabla;
    };

    return {
        "table": _table
    };
})();
