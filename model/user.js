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

const formRegistro = document.getElementById('form-registrar');

//Escuchador de botones

const planesList = document.querySelector('.card-container')

let planes = '';

planesList.addEventListener('click', e => {

    if(e.target.classList.contains('btn-plan')) {
        planSel(e.target.parentElement)
        if (validarCamposVacios()) {
            registrarUsuario();
            limpiarFormulario(formRegistro);
            Swal.fire(
                'Usted abonó ' + (planes),
                'Bienvenido a MarGym',
                'success'
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Formulario Incompleto!',
                text: 'No pudo realizar la inscripción!',
                })
                
        }
    }
})

const planSel = objeto => {
    const plan = {
        titulo: objeto.querySelector('.titplan').textContent,
        price: objeto.querySelector('.precio').textContent,
    }

    planes = plan.price
}

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