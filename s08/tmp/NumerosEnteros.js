var NumerosEnteros=(function(){

  var _desde_hasta=function(desde,hasta){
    return _desde_hasta_de(desde,hasta,1);
  }

  var _hasta =function(hasta){
    var arr_salida=[];
    if(hasta>0){
      return _desde_hasta(0,hasta);
    }
    return _desde_hasta(hasta,0)
  }

  var _desde_hasta_de=function(desde,hasta,salto){
    var arr_salida=[];
    if(typeof desde !== "number"){
      desde=0;
    }
    if(typeof hasta !== "number"){
      hasta=0;
    }
    if(typeof salto !== "number"){
      desde=0;
    }
    if(salto<=0){
      //salto=Infinity;
      return [desde];
    }
      if(desde<=hasta){
        for(var i=desde;i<=hasta;i+=salto){
          arr_salida.push(i);
        }
      }
      else{
        for(var i=desde;i>=hasta;i-=salto){
          arr_salida.push(i);
        }
      }
    return arr_salida;
  }

  return {
    "desde_hasta_de":_desde_hasta_de,
    "desde_hasta":_desde_hasta,
    "hasta":_hasta
  };
})();
