////Productos
const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment();
const botonCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
const containerPagarProducts = document.querySelector('.container-pago');
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
////Carrito
const productsList = document.querySelector('.row');
const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');
let carrito = {};
///Pagar
const pagar = document.querySelector('.cart-pagar');
const formPago = document.getElementById('form-pagar');
const botonPagar = document.querySelector('.close-pago');
const compradoresList = document.querySelector('.container-pago');
const divProd = document.querySelector('.total-pagar1');
const parProd = document.querySelector('.tt2');
const inputNombreTits = document.getElementById('nombtits');
const inputNacimTits = document.getElementById('nacimtits');
const inputNombreTars = document.getElementById('nombtars');
const inputNumeroTars = document.getElementById('numtars');
const inputSeguridads = document.getElementById('segutars');
const inputNumeroCuotas = document.getElementById('numcuotas');
const compradores = [];

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        showHTML()
    }
})

////Eventos

items.addEventListener('click', e => {
    addCarrito(e)
})

rowProduct.addEventListener('click', e => {
    btnAccion(e)
})

rowProduct.addEventListener('click', e => {
    btnEliminar(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()

        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

////Creación de las cards

const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.nombre
        templateCard.querySelector('span').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.img)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}

botonCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

////Agregar producto al carrito

const addCarrito = e => {
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
        Toastify({
            text: "Producto Seleccionado",
            duration: 4000,
            close: false,
            gravity: "top",
            position: "left",
            style: {
                background: "linear-gradient(to right, #000, #000 )",
            },
            }).showToast();
    }
    e.stopPropagation()
}

pagar.addEventListener('click', e => {
    btnPagar(e)
})

const setCarrito = objeto => {
    const producto = {
        cantidad: 1,
        id: objeto.querySelector('.btn-dark').dataset.id,
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('span').textContent,
    }

    if(carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}

    showHTML();
}

////Creación del carrito en HTML

const showHTML = () => {
    
    if(carrito.lenght){
        cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
    } else {
        cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
    };

    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    Object.values(carrito).forEach(producto => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
        <div class="info-cart-product">
            <div class="d-titc">
                <p class="titulo-producto-carrito">${producto.nombre}</p>
            </div>
            <div class="d-cant">
                <span class="cantidad-producto-carrito" >${producto.cantidad}</span>
            </div>
            <div class="d-botones">
                <button class="btn btn-info btn-sm" id="${producto.id}">+</button>
                <button class="btn btn-danger btn-sm" id="${producto.id}">-</button>
            </div>
            <div class="d-prec">
                <span class="precio-producto-carrito">${producto.precio}</span>
            </div>
            <div class="d-elim">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-close" id="${producto.id}">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </div>
        </div>
        `;
        rowProduct.append(containerProduct);

        total = total + parseInt(producto.cantidad * producto.precio.slice(1));
        totalOfProducts = totalOfProducts + producto.cantidad;

    });


    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;

    localStorage.setItem('carrito', JSON.stringify(carrito))
}

////Botones

const btnAccion = e => {
    if(e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.id]
        producto.cantidad++
        carrito[e.target.id] = {...producto}
        showHTML();
    }

    if(e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.id]
        producto.cantidad--
        if(producto.cantidad === 0) {
            delete carrito[e.target.id];
        } 
        showHTML();
    }

    e.stopPropagation()
}

const btnEliminar = e => {
    if(e.target.classList.contains('icon-close')) {
        Swal.fire({
            title: '¿Desea eliminar la fila?', 
            icon: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.isConfirmed) {
                delete carrito[e.target.id];
                showHTML();
                Swal.fire(
                'Eliminado!',
                'La fila ha sido eliminada',
                'success'
                )
            }
        })
    }

    e.stopPropagation()
}

////Boton pagar producto

const btnPagar = e => {
    if (e.target.classList.contains('btn-pagar')) {
        if(valorTotal.innerText != '$0') {
            containerPagarProducts.classList.toggle('hidden-pago');
            delete containerCartProducts.classList.toggle('hidden-cart');
            const containerPagar = document.createElement('p');
            containerPagar.classList.add('total-pagar1');
            containerPagar.innerHTML = `
                <p class="tt2">${valorTotal.innerText}</p>
                `;
            parProd.append(containerPagar);
            carrito = {};
            showHTML();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'No hay produto!',
                text: 'Carrito vacío!',
                })
            }
        }
        e.stopPropagation()
    }

////Formulario pago de productos

function validarCamposVacioss() {
    return inputNombreTits.value !== '' && inputNacimTits.value !== '' && inputNombreTars.value !== '' 
    && +inputNumeroTars.value !== '' && +inputSeguridads.value !== '' && +inputNumeroCuotas.value !== '';
}

function registrarUsuarios() {
    const nuevoComprador = new Comprador(inputNombreTits.value, inputNacimTits.value, inputNombreTars.value, 
        +inputNumeroTars.value, +inputSeguridads.value, +inputNumeroCuotas.value);
    compradores.push(nuevoComprador);
}

function limpiarFormularios(form) {
    form.reset();
}

//Escuchador de botones

compradoresList.addEventListener('click', e => {

    if(e.target.classList.contains('btn-pagar2')) {
        if (validarCamposVacioss()) {
            registrarUsuarios();
            limpiarFormularios(formPago);
            Swal.fire(
                'Pago Exitoso!',
                'Gracias por su compra',
                'success'
            )
            delete containerPagarProducts.classList.toggle('hidden-pago');
            parProd.innerHTML = '';
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Formulario Incompleto!',
                text: 'No pudo realizar la compra!',
                })
        }
    }
})

botonPagar.addEventListener('click', () => {
    delete containerPagarProducts.classList.toggle('hidden-pago');
    limpiarFormularios(formPago);
    parProd.innerHTML = '';
});
