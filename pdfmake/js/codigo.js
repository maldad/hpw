var Codigo = (function () {
    var pdf = function () {
        var docDefinition = { content: "una linea \n dos lineas" }
        var pdf = pdfMake.createPdf(docDefinition);
        pdf.open();
    };
    return {
        pdf: pdf
    };
})();
