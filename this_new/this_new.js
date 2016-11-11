var Alumno = function(_numero_control, _nombre){ //funcion constructura
    this.numeroControl = _numero_control;
    this.nombre = _nombre;
    this.getNumeroControl = function(){
        return this.numeroControl;
    };
    this.getNombre = function(){
        return this.nombre;
    };
    this.setNombre = function(_nombre){
        this.nombre = _nombre;
    };
    this.setNumeroControl = function(_numero_control){
        this.numeroControl = _numero_control;
    };
};

var obja = new Alumno("Agustin");
var objb = new Alumno("Oscar");

obja.getNumeroControl();
obja.setNumeroControl('12161436');
