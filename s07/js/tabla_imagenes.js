var ImagesTable = (function () {
    var crear_imagenes = function(){
        var imgs = [];
        for(var i = 0; i < 10; i++)
            imgs.push(document.createElement('img'));
        return imgs;
    };

    var alterar_imagenes = function(arr_imgs){
        var arr_salida = arr_imgs;
        for(var i = 0; i < arr_salida.length; i++){
            arr_salida[i].setAttribute('src', 'images/'+(i+1)+'.png');
        }
        return arr_salida;
    };
     var alterar_imagenes2 = function(arr_imgs){
         Arreglo.map(function(td){return td.setAttribute('src', 'images/1.png')}, arr_imgs);
     };

    var agregar_hijos_arriba = function(f1, hijos){
        for(var i = 0; i < f1.length; i++)
            f1[i].appendChild(hijos[i])
    };

    var agregar_hijos_abajo = function(f2, hijos){
        var j = 5;
        for(var i = 0; i < f2.length; i++){
            f2[i].appendChild(hijos[j]);
            j++;
        }
    };

    var agregar_hijos = function(fila, hijos){
        agregar_hijos_arriba(fila, hijos);
        agregar_hijos_abajo(fila, hijos);
    };

    return{
        "crear_imagenes": crear_imagenes,
        "alterar_imagenes": alterar_imagenes,
        "alterar_imagenes2": alterar_imagenes2,
        "agregar_hijos": agregar_hijos
    }
})();
