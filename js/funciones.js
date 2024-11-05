let cart = []; // Inicializa el carrito como un array vacío

function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Busca si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        // Si ya existe, solo incrementa la cantidad
        existingProduct.quantity += 1;
    } else {
        // Si no existe, añade el nuevo producto al carrito
        cart.push(product);
    }

    // Actualiza el carrito en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} ha sido añadido al carrito.`);
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

let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Oculta todos los slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Reinicia el índice si excede el número de slides
    slides[slideIndex - 1].style.display = "block"; // Muestra el slide actual
    setTimeout(showSlides, 3000); // Cambia de slide cada 3 segundos
}

function plusSlides(n) {
    slideIndex += n; // Cambia el índice según la dirección
    const slides = document.getElementsByClassName("slide");
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Oculta todos los slides
    }
    slides[slideIndex - 1].style.display = "block"; // Muestra el slide actual
}

// Aquí puedes añadir la lógica para manejar el envío del formulario si es necesario
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío por defecto para manejarlo con JavaScript
    // Puedes obtener los valores de los campos y enviar los datos a tu servidor aquí
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    console.log(`Nombre: ${name}, Correo: ${email}, Servicio: ${service}, Mensaje: ${message}`);
    alert('Formulario enviado con éxito!'); // Mensaje de éxito
});