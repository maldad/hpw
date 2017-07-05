var Biblioteca = (function () {
    var BD = {
        "autores": [
        {
            "id": 10,
            "nombre": "Antonio",
            "apellido": {
                "paterno": "Hernández",
                "materno": "Blas"
            },
            "libros": [100, 101]
        },
        {
            "id": 11,
            "nombre": "Gonzalo",
            "apellido": {
                "paterno": "Mendoza",
                "materno": "Garcia"
            },
            "libros": []
        },
        {
            "id": 12,
            "nombre": "Agustin",
            "apellido": {
                "paterno": "Vasquez",
                "materno": "Martinez"
            },
            "libros": [103, 104, 105]
        },
        {
            "id": 13,
            "nombre": "Cristopher",
            "apellido": {
                "paterno": "Gomez",
                "materno": "Oseguera"
            },
            "libros": [106, 108]
        },
        {
            "id": 14,
            "nombre": "Omar",
            "apellido": {
                "paterno": "Carrasco",
                "materno": "Lopez"
            },
            "libros": [109, 110, 111]
        },
        {
            "id": 15,
            "nombre": "Erick",
            "apellido": {
                "paterno": "Garcia",
                "materno": "Perez"
            },
            "libros": [109, 111]
        },
        {
            "id": 16,
            "nombre": "Jesus Alejandro",
            "apellido": {
                "paterno": "Pablo",
                "materno": "Ojeda"
            },
            "libros": [115, 116, 117]
        },
        {
            "id": 17,
            "nombre": "Arturo Vladimir",
            "apellido": {
                "paterno": "Vasquez",
                "materno": "Sierra"
            },
            "libros": [118, 119, 120]
        },
        {
            "id": 18,
            "nombre": "Adolfo Adan",
            "apellido": {
                "paterno": "Jarquin",
                "materno": "Lara"
            },
            "libros": [115, 110]
        },
        {
            "id": 19,
            "nombre": "Wilfrido",
            "apellido": {
                "paterno": "Santos",
                "materno": "Lopez"
            },
            "libros": [112, 125]
        },
        {
            "id": 20,
            "nombre": "Diego",
            "apellido": {
                "paterno": "Velasco",
                "materno": "Cruz"
            },
            "libros": [112, 125]
        },
        {
            "id": 21,
            "nombre": "Rogelio",
            "apellido": {
                "paterno": "Daniel",
                "materno": "Olivera"
            },
            "libros": [131, 132]
        }
        ],
        "libros": [
        {
            "id":100,
            "titulo":"Las batallas en el desierto",
            "isbn":"6074450552",
            "publicacion": "1998",
            "editorial":"ERA",
            "genero":"novela"
        },
        {
            "id":101,
            "titulo":"EL laberinto de la soledad",
            "isbn":"968-16-1643-X",
            "publicacion":"1950",
            "editorial":"Fondo de Cultura Económica",
            "genero":"didactico"
        },
        {
            "id":102,
            "titulo":"La llama doble",
            "isbn":"978-6070720451",
            "publicacion": "1993",
            "editorial":"SEIX BARRAL",
            "genero":"didactico"
        },
        {
            "id": 103,
            "titulo": "Moby-Dick",
            "isbn": "6073135386",
            "publicacion": "2015",
            "editorial": "Penguin Random House",
            "genero": "novela",
        },
        {
            "id": 104,
            "titulo": "El Señor de los Anillos: El retorno del rey",
            "isbn": "6070712749",
            "publicacion": "2012",
            "editorial": "Planeta Pub Corp",
            "genero": "novela",
        },
        {
            "id": 105,
            "titulo": "Choque de reyes",
            "isbn": "6073108400",
            "publicacion": "2015",
            "editorial": "Penguin Random House",
            "genero": "novela",
        },
        {
            "id":106,
            "titulo":"Don quijote de la mancha",
            "isbn":"60744501423",
            "publicacion":"1980",
            "editorial":"",
            "genero":"novela"
        },
        {
            "id":107,
            "titulo":"EL laberinto de la soledad",
            "isbn":"968-16-16431434",
            "publicacion":"2004",
            "editorial":"Trillas",
            "genero":"historia"
        },
        {
            "id":108,
            "titulo":"La Tierra Gira",
            "isbn":"978-6070720376",
            "publicacion":"2013",
            "editorial":"Trillas",
            "genero":"geografia"
        },        
        {
            "id": 109,
            "titulo": "EL ALQUIMISTA",
            "isbn": "9789707802971",
            "publicacion": "1988",
            "editorial": "GRIJALBO",
            "genero": "mision"
        },
        {
            "id": 110,
            "titulo": "LOS HORNOS DE HITLER",
            "isbn": "9786070721786",
            "publicacion": "1961",
            "editorial": "BOOKET",
            "genero": "EPICO"
        },
        {
            "id": 111,
            "titulo": "CABALLO DE TROYA 1",
            "isbn": "9788408064626",
            "publicacion": "2005",
            "editorial": "PLANETA",
            "genero": "novela"
        },
        {
            "id":112,
            "titulo":"Fundamentos de Administracion",
            "isbn":"978-968-24-7785-0",
            "publicacion":"2009",
            "editorial":"Trillas",
            "genero":"Academico"
        },
        {
            "id":113,
            "titulo":"Sistemas Operativos Modernos",
            "isbn":"968-880-323-5",
            "publicacion":"1992",
            "editorial":"Prentice-Hall Mexico",
            "genero":"academico"
        },
        {
            "id":114,
            "titulo":"El viejo y el mar",
            "isbn":"970-666-022-4",
            "publicacion":"2005",
            "editorial":"Tomo",
            "genero":"literario"
        },
        {
            "id": 115,
            "titulo": "La naranja mecanica",
            "isbn": "978-607-07-0156-6",
            "publicacion": 1962,
            "editorial": "Minotauro",
            "genero": "ficcion" 
        },
        {
            "id": 116,
            "titulo": "Cien años de soledad",
            "isbn": "978-842-047-183-9",
            "publicacion": 1967,
            "editorial": "Diana",
            "genero": "realismo" 
        },
        {
            "id": 117,
            "titulo": "Alexandros",
            "isbn": "978-970-810-355-8",
            "publicacion": 1998,
            "editorial": "Montena",
            "genero": "novela" 
        },
        {
            "id": 118,
            "titulo": "Caida libre",
            "isbn": "9788430615902",
            "publicacion": 2010,
            "editorial": "Taurus",
            "genero": "novela"
        },
        {
            "id": 119,
            "titulo": "Insurgente",
            "isbn": "9788427203181",
            "publicacion": 2012,
            "editorial": "Molino",
            "genero": "novela"
        },
        {
            "id": 120,
            "titulo": "Juego de Tronos",
            "isbn": "9788496208964",
            "publicacion": 2012,
            "editorial": "Gigamesh",
            "genero": "novela"
        },
        {
            "id": 121,
            "titulo": "independecia de mexico",
            "isbn": "123-456-789-987-7",
            "publicacion": "2000",
            "editorial": "independiente",
            "genero": "trama"
        },
        {
            "id": 122,
            "titulo": "Vida de Porfirio Diaz",
            "isbn": "987-789-456-546-1",
            "publicacion": 1995,
            "editorial": "Mexicano",
            "genero": "historia"
        },
        {
            "id": 123,
            "titulo": "los relatos de Andres",
            "isbn": "741-258-963-7",
            "publicacion": 1996,
            "editorial": "Roger's",
            "genero": "cuento"
        },
        {
            "id":124,
            "titulo":"La revolucion mesmerica",
            "isbn":"123-342-576-875-2",
            "publicacion":"2004",
            "editorial":"oaxacar",
            "genero":"misterio"
        },
        {
            "id":125,
            "titulo":"IT",
            "isbn":"999-445-357-246-3",
            "publicacion":"2002",
            "editorial":"Eso",
            "genero":"terror"
        },
        {
            "id":126,
            "titulo":"Misericordiae Voltus",
            "isbn":"978-607-714-145-7",
            "publicacion":"2015",
            "editorial":"San Pablo",
            "genero":"religion"
        },   
        {
            "id":127,
            "titulo":"Tokyo Blues",
            "isbn":"C287364",
            "publicacion": 2003,
            "editorial":"Jisho",
            "genero":"drama"
        },
        {
            "id":128,
            "titulo":"El principito",
            "isbn":"X193485",
            "publicacion": 1980,
            "editorial":"Jcrox",
            "genero":"drama"
        },
        {
            "id":129,
            "titulo":"El código de Da Vinci",
            "isbn":"A192736",
            "publicacion": 1987,
            "editorial":"Socrax",
            "genero":"drama"
        },
        {
            "id": 130,
            "titulo":"Fudación",
            "isbn":"9788499083209",
            "publicacion":"1952",
            "editorial":"De Bolsillo",
            "genero":"ficcion"
        },

        {
            "id": 131,
            "titulo":"El gran diseño",
            "isbn":"9788498921724",
            "publicacion":"2010",
            "editorial":"Bantam Books",
            "genero":"ciencia"
        },

        {
            "id": 132,
            "titulo":"Un pacto con el diablo",
            "isbn":"9789681660369",
            "publicacion":"1999",
            "editorial":"S.L. FONDO DE CULTURA ECONOMICA DE ESPAÑAs",
            "genero":"suspenso"
        },
        ],
        "autorlibros": 
        {
          //pendiente revisar esta parte, creo que ya no estaba hoy 30/sep/2016
            "10": [102, 105, 106],
            "20": [101],
            "30": [100],
            "70": [103],
            "80": [104]
        }
    };
return {
    "autores": BD.autores,
    "libros": BD.libros
}
})();
