class Artista {
    nombre;
    edad;
    genero;
    nacionalidad;
    modo;
    
    constructor(nombre, edad, genero, nacionalidad, modo){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
        this.nacionalidad = nacionalidad;
        this.modo = modo;
    };
    
    cantar = function(modoCantar) {
        this.modo = modoCantar;
        console.log(this.nombre + ` cantará en un ${modoCantar}`);
    };
    
    }