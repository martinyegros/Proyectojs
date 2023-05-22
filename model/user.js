const clientes = [];

//DOM
const inputNombre = document.getElementById('nomb');
const inputDireccion = document.getElementById('dire');
const inputNumDocumento = document.getElementById('ndocu');
const inputNacimiento = document.getElementById('nacim');
const inputTelefono = document.getElementById('tele');
const inputCorreo = document.getElementById('corr');

const inputNombreTit = document.getElementById('nombtit');
const inputNacimTit = document.getElementById('nacimtit');
const inputNombreTar = document.getElementById('nombtar');
const inputNumeroTar = document.getElementById('numtar');
const inputSeguridad = document.getElementById('segutar');
const inputNumeroCuota = document.getElementById('numcuota');

const btnEnviarIns = document.getElementById('enviarins');
const formRegistro = document.getElementById('form-registrar');

const btnCompraUno = document.getElementById('comp1');
const btnCompraDos = document.getElementById('comp2');
const btnCompraTres = document.getElementById('comp3');

//Escuchador del boton
btnEnviarIns.addEventListener('click', (evento) => {
    evento.preventDefault();
    if (validarCamposVacios()) {
        registrarUsuario();
        alert('Inscripción Exitosa!, bienvenido a MarGym');
        limpiarFormulario(formRegistro);
    }else {
        alert('No pudo realizar la inscripción');
    }
})

function validarCamposVacios() {
    return inputNombre.value !== '' && inputDireccion.value !== '' && +inputNumDocumento.value !== '' 
    && inputNacimiento.value !== '' && +inputTelefono.value !== '' && inputCorreo.value !== '' 
    && inputNombreTit.value !== '' && inputNacimTit.value !== '' && inputNombreTar.value !== '' 
    && +inputNumeroTar.value !== '' && +inputSeguridad.value !== '' && +inputNumeroCuota.value !== '';
}

function registrarUsuario() {
    const nuevoCliente = new Cliente(inputNombre.value, inputDireccion.value, +inputNumDocumento.value, inputNacimiento.value, 
        +inputTelefono.value, inputCorreo.value, inputNombreTit.value, inputNacimTit.value, inputNombreTar.value, 
        +inputNumeroTar.value, +inputSeguridad.value, +inputNumeroCuota.value);
    clientes.push(nuevoCliente);
}

function limpiarFormulario(form) {
    form.reset();
}