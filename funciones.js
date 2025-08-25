function mostrarNombre() {
            const nombre = document.getElementById("nombre").value;
            const resultado = document.getElementById("resultado");
            if (nombre.trim() === "") {
                resultado.textContent = "Por favor, escribe tu nombre.";
            } else {
                resultado.textContent = "Hola, " + nombre + " 👋";
            }
        }
   var lista = [];

function InsertarLista() {
    var xd = Math.floor(Math.random() * 10);
    const nombre = document.getElementById("nombre").value; // por si quieres usarlo
    const resultado = document.getElementById("resultado");

    lista.push(xd);

    // Crear un nuevo botón
    const nuevoBoton = document.createElement("button");
    nuevoBoton.textContent = `${xd}`;
    nuevoBoton.classList.add("boton-lista");
    
    // Inicialmente oculto para la animación
    nuevoBoton.style.opacity = 0;
    nuevoBoton.style.transform = "translateY(20px)";
    
    // Agregar al contenedor
    resultado.appendChild(nuevoBoton);

    // Forzar reflow para activar la transición
    nuevoBoton.offsetHeight; 

    // Animar a visible
    nuevoBoton.style.opacity = 1;
    nuevoBoton.style.transform = "translateY(0)";
}
