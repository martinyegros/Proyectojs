class Cliente {
    nombre;
    direccion;
    dni;
    nacimiento;
    telefono;
    correo;
    nombretitular;
    nacimientotitular;
    nombretarjeta;
    numerotarjeta;
    seguridad;
    numerocuota;
    
    constructor(nombre,direccion,dni,nacimiento,telefono,correo,nombretitular,nacimientotitular,nombretarjeta,numerotarjeta,seguridad,numerocuota) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.dni = dni;
        this.nacimiento = nacimiento;
        this.telefono = telefono;
        this.correo = correo;
        this.nombretitular = nombretitular;
        this.nacimientotitular = nacimientotitular;
        this.nombretarjeta = nombretarjeta;
        this.numerotarjeta = numerotarjeta;
        this.seguridad = seguridad;
        this.numerocuota = numerocuota;
    }
}