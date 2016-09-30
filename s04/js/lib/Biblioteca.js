var Biblioteca = (function () {
    var BD = {
        "autores": [
        {
            "id": 10,
            "nombre": "George Raymond Richard",
            "apellido_paterno": "Martin",
            "apellido_materno": ""
        },
        {
            "id": 20,
            "nombre": "John Ronald Reuel",
            "apellido_paterno": "Tolkien",
            "apellido_materno": ""
        },
        {
            "id": 30,
            "nombre": "Herman",
            "apellido_paterno": "Melville",
            "apellido_materno": ""
        },
        {
            "id": 40,
            "nombre": "Miguel",
            "apellido_paterno": "de Cervantes",
            "apellido_materno": "Saavedra"
        },
        {
            "id": 50,
            "nombre": "Gabriel",
            "apellido_paterno": "Garcia",
            "apellido_materno": "Marquez"
        },
        {
            "id": 60,
            "nombre": "Howard Phillips",
            "apellido_paterno": "Lovecraft",
            "apellido_materno": ""
        },
        {
            "id": 70,
            "nombre": "Antoine",
            "apellido_paterno": "de Saint-Exupery",
            "apellido_materno": ""
        },
        {
            "id": 80,
            "nombre": "Nicolas",
            "apellido_paterno": "Maquiavelo",
            "apellido_materno": ""
        }
        ],
        "libros": [
        {
            "id": 100,
            "titulo": "Moby-Dick",
            "isbn": "",
            "publicacion": "1851",
            "editorial": "Richard Bentley",
            "genero": "Novela",
        },
        {
            "id": 101,
            "titulo": "El Señor de los Anillos",
            "isbn": "",
            "publicacion": "1954",
            "editorial": "George Allen & Unwim",
            "genero": "Novela",
        },
        {
            "id": 102,
            "titulo": "Choque de reyes",
            "isbn": "",
            "publicacion": "1998",
            "editorial": "Bantam Spectra",
            "genero": "Novela",
        },
        {
            "id": 105,
            "titulo": "Juego de tronos",
            "isbn": "",
            "publicacion": "1996",
            "editorial": "Bantam Spectra",
            "genero": "Novela",
        },
        {
            "id": 106,
            "titulo": "Tormenta de espadas",
            "isbn": "",
            "publicacion": "2000",
            "editorial": "Bantam Spectra",
            "genero": "Novela",
        },
        {
            "id": 103,
            "titulo": "El principito",
            "isbn": "",
            "publicacion": "1943",
            "editorial": "Reynal & Hitchcock",
            "genero": "Novela",
        },
        {
            "id": 104,
            "titulo": "El principe",
            "isbn": "",
            "publicacion": "1532",
            "editorial": "",
            "genero": "Tratado",
        }
        ],
        "autorlibros": 
        {
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
