var Biblioteca = (function () {
    var BD = {
        "autores": [
        {
            "id": 10,
            "nombre": "Agus",
            "apellido_paterno": "Vasquez",
            "apellido_materno": "Martinez"
        },
        {
            "id": 20,
            "nombre": "Agustin",
            "apellido_paterno": "",
            "apellido_materno": ""
        },
        {
            "id": 30,
            "nombre": "Agustin",
            "apellido_paterno": "",
            "apellido_materno": ""
        }
        ],
        "libros": [
        {
            "id": 100,
            "titulo": "...",
            "isbn": "...",
            "publicacion": "...",
            "editorial": "...",
            "genero": "...",
        },
        {
            "id": 101,
            "titulo": "...",
            "isbn": "...",
            "publicacion": "...",
            "editorial": "...",
            "genero": "...",
        },
        {
            "id": 102,
            "titulo": "...",
            "isbn": "...",
            "publicacion": "...",
            "editorial": "...",
            "genero": "...",
        }
        ],
        "autorlibros": 
        {
            "10": [],
            "20": [],
            "30": []
        }
    };
    return {
        "autores": BD.autores,
        "libros": BD.libros
    }
})();
