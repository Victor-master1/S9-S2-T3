document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Limpiar errores previos
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');

    const datos = {
        nombre: document.getElementById('nombre').value.trim(),
        correo: document.getElementById('correo').value.trim(),
        telefono: document.getElementById('telefono').value.trim(),
        curso: document.getElementById('curso').value
    };

    let esValido = true;

    // Validación de Nombre
    if (datos.nombre.length < 3) {
        document.getElementById('error-nombre').textContent = "El nombre es muy corto.";
        esValido = false;
    }

    // Validación de Correo (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(datos.correo)) {
        document.getElementById('error-correo').textContent = "Ingresa un correo válido.";
        esValido = false;
    }

    // Validación de Teléfono (mínimo 9 dígitos para Perú)
    if (datos.telefono.length < 9) {
        document.getElementById('error-telefono').textContent = "Número de teléfono inválido.";
        esValido = false;
    }

    if (esValido) {
        console.log("¡Éxito!", datos);
        alert(`¡Registro exitoso!\nBienvenido al curso de ${datos.curso}, ${datos.nombre}.`);
        this.reset();
    }
});