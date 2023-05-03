
/* let nombre;
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

alert(`Las personas que ingresan por lista free son: \n ${pases}`); */


const artistas = [];

artistas.push(new Artista('Britney Spears', 41, 'Pop', 'Estados Unidos'));
artistas.push(new Artista('Years&Years', 32, 'Pop', 'Londres'));
artistas.push(new Artista('Lali', 31, 'Pop', 'Argentina'));
artistas.push(new Artista('Ataque 77', 58, 'Rock', 'Argentina'));
artistas.push(new Artista('Los Piojos', 55, 'Rock', 'Argentina'));
artistas.push(new Artista('Tini', 26, 'Pop', 'Argentina'));
artistas.push(new Artista('Miranda', 48, 'Pop', 'Argentina'));
artistas.push(new Artista('Abel Pintos', 38, 'Pop', 'Argentina'));
artistas.push(new Artista('Daddy Yankee', 46, 'Regueton', 'Puerto Rico'));
artistas.push(new Artista('Linkin Park', 46, 'Rock', 'Estados Unidos'));
artistas.push(new Artista('Don Omar', 45, 'Regueton', 'Puerto Rico'));
artistas.push(new Artista('Lady Gaga', 37, 'Pop', 'Estados Unidos'));
artistas.push(new Artista('Evanescense', 41, 'Rock', 'Estados Unidos'));
artistas.push(new Artista('Madonna', 64, 'Pop', 'Estados Unidos'));
artistas.push(new Artista('Anitta', 30, 'Regueton', 'Brasil'));


let opcion;
alert('Bienvenidos a MusicaMY');

do{
    const eleccion = prompt('1 - Mostrar los artistas del género musical ingresado por el usuario\n' + 
                        '2 - Buscar un artista musical por su nombre\n' +
                        '3 - Ver el modo en el que se presentará el artista\n' +
                        '4 - Mostar a los artistas Argentinos\n' +
                        '5 - Visualizar las edades de los artistas'
                        )

    switch(eleccion) {
        case '1': mostrarArtistas();
        break;
        case '2': buscarPorNombre();
        break;
        case '3': tipoDeCanto();
        break;
        case '4': mostrarNacionalidad();
        break;
        case '5':mostrarEdad();  
    }

    //1
    function mostrarArtistas(){
        const eleccionUsuario = prompt('Ingrese algún género musical\n' +
                                    'Pop\n' +
                                    'Rock\n' +
                                    'Regueton');
    
        if (eleccionUsuario == 'Pop'){
        console.log(artistas.filter((item) => {return item.genero == 'Pop'}));
        } else {
            if (eleccionUsuario == 'Rock'){
                console.log(artistas.filter((item) => {return item.genero == 'Rock'}));
            } else {
                if (eleccionUsuario == 'Regueton'){
                    console.log(artistas.filter((item) => {return item.genero == 'Regueton'}));
                } else {
                    alert('No seleccionaste alguna opción de los géneros');
                }
            }
        };
    }

    //2
    function buscarPorNombre(){
        const eleccionUsuario = prompt('Ingrese nombre de algun artista musical');
        const artistaEncontrado = artistas.find((item) => { return item.nombre == eleccionUsuario})

        if (artistaEncontrado) {
            console.log(artistaEncontrado);
        } else {
            alert('No ingresaste nombre de algún artista musical archivado');
        }
    }

    //3
    function tipoDeCanto() {
        const eleccionUsuario = prompt('Ingrese nombre de algun artista musical');
        const artistaEncontrado = artistas.find((item) => { return item.nombre == eleccionUsuario})
        const modo = prompt('Ingrese el modo en el que se presentará el artista:\n' +
                            'Vivo\n' +
                            'Videoclip\n' +
                            'Podcast\n' +
                            'Stream');
        if (artistaEncontrado) {
            artistaEncontrado.cantar(modo);
        } else {
            alert('No seleccionaste alguna opción correcta');
        }
    }

    //4
    function mostrarNacionalidad(){
        const artistasArgentinos = artistas.slice(2,8);
        console.log(artistasArgentinos);
    }

    //5
    function mostrarEdad(){
        const edadArtistas = artistas.map((item) => {return{nombre: item.nombre, edad: item.edad}});
        console.log(edadArtistas);
    }

    opcion = prompt('¿Desea volver al menú?');
} while (opcion == 'si');



