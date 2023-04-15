
let nombre;
let edad = 0;
let numDni;
let pases = '';
let opcion;

alert('Bienvenidos a Club Maryeg!');
alert('Ingrese los datos de la persona que desea anotar en la lista free')

do {
    nombre = prompt("Ingrese Nombre");
    while (nombre == '') {
        nombre = prompt("No ingresó algún Nombre, ingrese un Nombre"); 
    }
    edad = Number(prompt("Ingrese edad"));
    if (edad < 18 || edad > 35) {
        alert("Edad no permitida para ingresar al establecimiento");
    } else {
        numDni = Number(prompt("Ingrese número de DNI"));
        while (numDni == '') {
            numDni = Number(prompt("Ingrese nuevamente número de DNI")) 
        }
        pases = pases + `${nombre} Edad: ${edad} DNI: ${numDni} \n`;
    }
    opcion = prompt('¿Desea ingresar a otra persona?');

} while (opcion == 'si');

alert(`Las personas que ingresan por lista free son: \n ${pases}`);






