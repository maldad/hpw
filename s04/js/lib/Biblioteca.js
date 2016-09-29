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
        }
        ],
        "autorlibros": 
        {
            "10": [102],
            "20": [101],
            "30": [100]
        }
    };
    return {
        "autores": BD.autores,
        "libros": BD.libros
    }
})();
