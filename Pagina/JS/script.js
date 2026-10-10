const NUMERO_WHATSAPP = "51906642650";

const form = document.getElementById("formulario");
const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const servicio = document.getElementById("servicios").value;
    const mensaje = document.getElementById("mensaje").value;

    const texto = `Hola, soy ${nombre} (${correo}). Me interesa el servicio de ${servicio}. ${mensaje}`;
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;

    mostrarConfirmacion(nombre);
    window.open(url, "_blank");

    form.reset();
});

function mostrarConfirmacion(nombre) {
    mensajeConfirmacion.textContent = `Gracias, ${nombre}. Te estamos redirigiendo a WhatsApp...`;
    mensajeConfirmacion.classList.remove("d-none");
}

