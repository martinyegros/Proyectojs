const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
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




/*
const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }


if (carrito.hasOwnProperty(producto.id)) {
    producto.cantidad = carrito[producto.id].cantidad + 1
}

    carrito[producto.id] = {...producto}
    pintarCarrito()
}
 */






//////////////////
const botonCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

botonCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});


const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
///////////
const productsList = document.querySelector('.row');
//////////
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

/////////
productsList.addEventListener('click', e => {
    if(e.target.classList.contains('btn-dark')) {
        const producto = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            nombre: producto.querySelector('h5').textContent,
            precio: producto.querySelector('span').textContent,
        };
        
        const exits = allProducts.some(producto => producto.nombre === infoProduct.nombre);

        if (exits) {
            const products = allProducts.map(producto => {
                if(producto.nombre === infoProduct.nombre){
                    producto.quantity++;
                    return producto;
                } else {
                    return producto;
                }
            });
            
            allProducts = [...products];
        } else {
            allProducts = [...allProducts, infoProduct];
        }

        showHTML();
    } 
});

rowProduct.addEventListener('click', e => {
    if(e.target.classList.contains('icon-close')){
        const producto = e.target.parentElement;
        const title = producto.querySelector('.btn-dark');

        allProducts = allProducts.filter( producto => producto.id !== title);

        showHTML();
    }
})

const showHTML = () => {

    if(allProducts.lenght){
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

    allProducts.forEach(producto => {
        const containerProduct = document.createElement('div');
        containerProduct.classList.add('cart-product');

        containerProduct.innerHTML = `
        <div class="info-cart-product">
            <span class="cantidad-producto-carrito">${producto.quantity}</span>
            <p class="titulo-producto-carrito">${producto.nombre}</p>
            <span class="precio-producto-carrito">${producto.precio}</span>
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-close">
                <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
            </svg>
        </div>
        `;

        rowProduct.append(containerProduct);

        total = total + parseInt(producto.quantity * producto.precio.slice(1));
        totalOfProducts = totalOfProducts + producto.quantity;
    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
}