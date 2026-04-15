document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const curso = document.getElementById('curso').value;

    // Validación simple
    if (nombre && correo && telefono) {
        console.log("Datos registrados:");
        console.log("Nombre:", nombre);
        console.log("Correo:", correo);
        console.log("Teléfono:", telefono);
        console.log("Curso:", curso);

        alert("¡Registro exitoso para " + nombre + "!");
        
        // Limpiar el formulario
        this.reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});