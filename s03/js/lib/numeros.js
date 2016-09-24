var NumerosEnteros = (function () {

    var hasta = function(num_entrada){
        var arr_temporal = [];
        if (num_entrada > 0)
            return desde_hasta(0, num_entrada);
        else
            return desde_hasta(num_entrada, 0);
    }

    var desde_hasta = function(ini, fin){
        return desde_hasta_de(ini, fin, 1);
        var arr_temporal = [];
    }

    var desde_hasta_de = function(ini, fin, de){
        var arr_temporal = [];
        if(de <= 0)
            //return arr_temporal;
            return [ini]
        if (typeof ini !== "number")
            ini = 0;
        if (typeof fin !== "number")
            fin = 0;
        if (typeof de !== "number")
            de = 0;
        if(ini <= fin)
            for (var i = ini; i <= fin; i+=de)
                arr_temporal.push(i);
        else
            for (var i = ini; i >= fin; i-=de)
                arr_temporal.push(i);
        return arr_temporal;
    }

    return {
        "desde_hasta_de": desde_hasta_de,
        "desde_hasta": desde_hasta,
        "hasta": hasta
    };
})();
