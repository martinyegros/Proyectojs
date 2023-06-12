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

//Escuchador de botones

const planesList = document.querySelector('.card-container')

let planSel = '';

const enviarPlan = (e) => {
    btnEnviarIns.addEventListener('click', (evento) => {
        evento.preventDefault();
        if (validarCamposVacios()) {
            registrarUsuario();
            limpiarFormulario(formRegistro);
            Swal.fire(
                'Bienvenido a MarGym',
                'Usted abonó el ' + (planSel),
                'success'
            )
            evento.stopPropagation();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Formulario Incompleto!',
                text: 'No pudo realizar la inscripción!',
                })
            evento.stopPropagation();
            
        }
    })
} 

btnEnviarIns.addEventListener('click', (evento) => {
    evento.preventDefault();
    Swal.fire({
        icon: 'error',
        title: 'Formulario Incompleto!',
        text: 'No pudo realizar la inscripción!',
        })
})


planesList.addEventListener('click', e => {
    if(e.target.classList.contains('btn-plan1')) {
        const planes = e.target.parentElement

        const infoPlanes = {
            id: planes.querySelector('.btn-plan1').dataset.id,
            titulo: planes.querySelector('.titplan').textContent,
            cuesta: planes.querySelector('.precio').textContent,
        }

        planSel = (infoPlanes.titulo);

        enviarPlan();

        e.stopPropagation();

        Toastify({
            text: "Plan Seleccionado",
            duration: 4000,
            close: false,
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #000, #000 )",
            },
            }).showToast();
    } else {
        if(e.target.classList.contains('btn-plan2')) {
            const planes = e.target.parentElement
    
            const infoPlanes = {
                id: planes.querySelector('.btn-plan2').dataset.id,
                titulo: planes.querySelector('.titplan').textContent,
                cuesta: planes.querySelector('.precio').textContent,
            }
    
            planSel = (infoPlanes.titulo);
    
            enviarPlan();

            e.stopPropagation();

            Toastify({
                text: "Plan Seleccionado",
                duration: 4000,
                close: false,
                gravity: "bottom",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #000, #000 )",
                },
                }).showToast();
        } else {
            if(e.target.classList.contains('btn-plan3')) {
                const planes = e.target.parentElement
        
                const infoPlanes = {
                    id: planes.querySelector('.btn-plan3').dataset.id,
                    titulo: planes.querySelector('.titplan').textContent,
                    cuesta: planes.querySelector('.precio').textContent,
                }
        
                planSel = (infoPlanes.titulo);
        
                enviarPlan();

                e.stopPropagation();

                Toastify({
                    text: "Plan Seleccionado",
                    duration: 4000,
                    close: false,
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "linear-gradient(to right, #000, #000 )",
                    },
                    }).showToast();
            } else {
                evento.stopPropagation();
            }
        }
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