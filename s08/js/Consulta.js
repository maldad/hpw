var Consulta = (function (){
    autores = function(){
        var panel = document.getElementById('panel');
        var header = ['id', 'nombre', 'ap_paterno', 'ap_materno'];
        tabla = HTML.table(header, Tabla.autores(Biblioteca.autores));
        tabla.setAttribute('border', '1');
        panel.appendChild(tabla);
    };
    libros = function(){
        var panel = document.getElementById('panel');
        var header = ['isbn', 'id', 'titulo', 'publicacion', 'editorial', 'genero', 'imagen'];
        tabla = HTML.table(header, Tabla.libros(Biblioteca.libros));
        tabla.setAttribute('border', '1');
        //buscar una mejor forma de hacer esto
            filas = tabla.children[1].children.length;
            var imgs = [];
            for(var i = 0; i < filas; i++)
                imgs.push(document.createElement('img'));
            for(var i = 0; i < filas; i++)
                imgs[i].setAttribute('src', 'images/1.png');
            for(var i = 0; i < filas; i++)
                tabla.children[1].children[i].appendChild(imgs[i]);
        //buscar una mejor forma de hacer esto
        panel.appendChild(tabla);
    };
    autor = function(autor){
        var panel = document.getElementById('panel');
        var header = ['id', 'nombre', 'ap_paterno', 'ap_materno'];
        tabla = HTML.table(header, Tabla.busca_autor(Busqueda.por_autor(Biblioteca.autores, autor)));
        tabla.setAttribute('border', '1');
        panel.appendChild(tabla);
    };
    autor_nombre = function(autor){
        var panel = document.getElementById('panel');
        var header = ['id', 'nombre', 'ap_paterno', 'ap_materno'];
        tabla = HTML.table(header, Tabla.busca_autor(Busqueda.por_nombre(Biblioteca.autores, autor)));
        tabla.setAttribute('border', '1');
        panel.appendChild(tabla);
    };
    autor_paterno = function(autor){
        var panel = document.getElementById('panel');
        var header = ['id', 'nombre', 'ap_paterno', 'ap_materno'];
        tabla = HTML.table(header, Tabla.busca_autor(Busqueda.por_apellido_paterno(Biblioteca.autores, autor)));
        tabla.setAttribute('border', '1');
        panel.appendChild(tabla);
    };
    autor_materno = function(autor){
        var panel = document.getElementById('panel');
        var header = ['id', 'nombre', 'ap_paterno', 'ap_materno'];
        tabla = HTML.table(header, Tabla.busca_autor(Busqueda.por_apellido_materno(Biblioteca.autores, autor)));
        tabla.setAttribute('border', '1');
        panel.appendChild(tabla);
    };
    libro = function(libro){
        var panel = document.getElementById('panel');
        var header = ['isbn', 'id', 'titulo', 'publicacion', 'editorial', 'genero', 'imagen'];
        tabla = HTML.table(header, Tabla.busca_libro(Busqueda.por_libro(Biblioteca.libros, libro)));
        tabla.setAttribute('border', '1');
        //buscar una mejor forma de hacer esto
            filas = tabla.children[1].children.length;
            var imgs = [];
            for(var i = 0; i < filas; i++)
                imgs.push(document.createElement('img'));
            for(var i = 0; i < filas; i++)
                imgs[i].setAttribute('src', 'images/1.png');
            for(var i = 0; i < filas; i++)
                tabla.children[1].children[i].appendChild(imgs[i]);
        //buscar una mejor forma de hacer esto
        panel.appendChild(tabla);
    };
    return {
        "autores": autores,
        "libros": libros,
        "autor": autor,
        "libro": libro,
        "autor_nombre": autor_nombre,
        "autor_paterno": autor_paterno,
        "autor_materno": autor_materno
    };
})();

