var Biblioteca = (function () {
    var BD = {
        "autores": [
        {
            "id": 10,
            "nombre": "Agus Vama"
        },
        {
            "id": 20,
            "nombre": "R2D2"
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
