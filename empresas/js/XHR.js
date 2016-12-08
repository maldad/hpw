var XHR = (function (){

    var _get = function(url){
      var xhr = new XMLHttpRequest;
      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
          Procesar.creaRellenaSelect(xhr.responseText);
        }
      };
      xhr.open('GET', url);
      xhr.send();
    };

    return {
      'get': _get
    };

})();
