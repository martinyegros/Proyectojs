let carrito = []
let stock = []

//DOM
const tabla = document.getElementById('items');
const selectProductos = document.getElementById('productos');
const botonAgregar = document.getElementById('agregar');
const botonComprar = document.getElementById('comprar');
const total = document.getElementById('total');

stock.push(new Producto('Mancuerna 10kg', 5000));
stock.push(new Producto('Pesa Rusa 5kg', 4000));
stock.push(new Producto('Disco 20kg', 9000));
stock.push(new Producto('Colchoneta',2000));
stock.push(new Producto('Soga', 4000));
stock.push(new Producto('Tobillera', 2500));
stock.push(new Producto('Whey Protein 1kg', 9000));
stock.push(new Producto('Whey Protein 453gr', 6000));
stock.push(new Producto('Oxido 400gr', 3500));

localStorage.setItem('stock',JSON.stringify(stock));

allEventListeners();

function allEventListeners() {
    window.addEventListener('DOMContentLoaded', traerCompras);

    botonAgregar.addEventListener('submit', (e) => {
        e.preventDefault();
        const productoSeleccionado = stock[+selectProductos.value];
        console.log(productoSeleccionado);
        const indiceCarrito = carrito.findIndex((item) => { return item.producto.nombre == productoSeleccionado.nombre});
        console.log(indiceCarrito);
        if (indiceCarrito != -1) {
            carrito[indiceCarrito].cantidad++;
        } else {
            const item = new Item(productoSeleccionado,1);
            carrito.push(item);
        }
        actualizarCarrito();
        localStorage.setItem('carrito', JSON.stringify(carrito));
    })
}

function traerCompras() {
    stock = JSON.parse(localStorage.getItem('stock')) || [];
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    dropDown();
    actualizarCarrito();
}

function dropDown() {
    stock.forEach((producto,index) => {
        const option = document.createElement('option');
        option.textContent = `${producto.nombre}: ${producto.precio}`;
        option.value = index;
        selectProductos.appendChild(option);
    })
}

function actualizarCarrito() {
    tabla.innerHTML = '';
    total.innerText = 0;
    carrito.forEach((item) => {
        nuevoProducto(item);
    });
}

function nuevoProducto() {
    const tabla = document.getElementById('items');
    tabla.innerHTML = ``;
    let counter = 1;

    carrito.forEach((item) => {
        tabla.innerHTML = tabla.innerHTML +
                        `
                        <tr>
                            <td> ${item.producto.nombre} </td>
                            <td> ${item.cantidad} </td>
                            <td> ${item.producto.precio} </td>
                        `;
        counter++;
    })
    total.innerText = carrito.reduce((acumulador,item) => acumulador + item.producto.precio * item.cantidad,0);
}

botonComprar.onclick = (() => {
    const realizarCompra = prompt ('¿Desea realizar la compra? si / no');
    if(realizarCompra == 'si') {
        carrito = [];
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
        alert('Gracias por su compra!');
    } else {
        alert('Continue comprando');
    }
})