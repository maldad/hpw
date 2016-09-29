var Biblioteca = (function () {
    var BD = {
        "autores": [
        {
            "id": 10,
            "nombre": "AA"
        },
        {
            "id": 20,
            "nombre": "AB"
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
        }
        ],
        "autorlibros": 
        {
            "10": [100, 101],
            "20": [101]
        }
    };
    return {
        "autores": BD.autores,
        "libros": BD.libros
    }
})();
