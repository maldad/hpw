dom02a.consola().log("¡Hola mundo!");
dom02a.consola().info("¡Esto es un mensaje de información!");
dom02a.consola().error("¡Esto es un mensaje de error!");
dom02a.consola().warn("¡Esto es un mensaje de advertencia!");


dom02a.consola().group();
dom02a.consola().log("Estos");
dom02a.consola().log("son varios");
dom02a.consola().log("mensajes agrupados");
dom02a.consola().groupEnd();


dom02a.consola().group();
dom02a.consola().warn("Y estos");
dom02a.consola().warn("son varios");
dom02a.consola().warn("mensajes de advertencia agrupados");
dom02a.consola().groupEnd();


dom02a.consola().group();
  dom02a.consola().info("Es posible agrupar y anidar los mensajes.");
    dom02a.consola().group();
      dom02a.consola().warn("Por ejemplo, este es un mensaje de advertencia");
      dom02a.consola().warn("dentro de unos mensajes de información");
    dom02a.consola().groupEnd();
  dom02a.consola().info("los cuales terminan aquí.");
dom02a.consola().groupEnd();


var obj1 = {"x": 10, "y": 20, "z": 30};
dom02a.consola().table(obj1);
var obj2 = {"x": 10, "y": [15, 20, 25], "z": 30};
dom02a.consola().table(obj2);
var obj3 = {"x": 10, "y": {"a": 15, "b": 20, "c": 25}, "z": 30};
dom02a.consola().table(obj3);


var arr1 = [10, 20, 30];
dom02a.consola().table(arr1);
var arr2 = [10, {"a": 15, "b": 20, "c": 25}, 30];
dom02a.consola().table(arr2);


dom02a.consola().time("tiempo-de-ciclo-for");
for (var i = 0, total = 0; i <= 999999; i++ ) {
  total = total + i;
}
dom02a.consola().timeEnd("tiempo-de-ciclo-for");
dom02a.consola().info("Resultado total: " + total);
