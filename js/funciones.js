// Simulación de carrito de compras
let carrito = [];

// Agregar productos al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    alert(`${producto} se ha añadido al carrito.`);
    actualizarCarrito();
}

// Actualizar vista del carrito
function actualizarCarrito() {
    let carritoElement = document.getElementById("carritoItems");
    carritoElement.innerHTML = "";
    carrito.forEach((producto, index) => {
        carritoElement.innerHTML += `<li>${producto} <button onclick="eliminarDelCarrito(${index})">Eliminar</button></li>`;
    });
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Validación de formulario
function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        alert("Por favor ingresa tu nombre.");
        return false;
    }
    alert("Formulario enviado con éxito.");
    return true;
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        alert("Gracias por tu compra!");
        carrito = [];
        actualizarCarrito();
    }
}
