document.getElementById('registroForm').addEventListener('submit', function(event) {
    // Evita que la página se refresque al enviar el formulario
    event.preventDefault();

    // 1. Capturar los valores de los inputs
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const curso = document.getElementById('curso').value;

    // 2. Validación simple (que no estén vacíos)
    if (nombre === "" || correo === "" || telefono === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // 3. Hacer visible el contenedor de registros
    const cajaRegistros = document.getElementById('listaRegistros');
    cajaRegistros.style.display = 'block';

    // 4. Crear el elemento para mostrar el nuevo registro
    const contenedor = document.getElementById('contenedorTarjetas');
    const nuevaTarjeta = document.createElement('div');
    
    // Le asignamos una clase para que tu compañero le de estilos luego
    nuevaTarjeta.className = 'tarjeta-registro'; 

    // Insertamos el contenido dentro de la tarjeta
    nuevaTarjeta.innerHTML = `
        <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 5px;">
            <p><strong>Estudiante:</strong> ${nombre}</p>
            <p><strong>Email:</strong> ${correo}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Curso:</strong> ${curso}</p>
        </div>
    `;

    // 5. Agregar la tarjeta al inicio de la lista (prepend)
    contenedor.prepend(nuevaTarjeta);

    // 6. Limpiar el formulario para un nuevo ingreso
    this.reset();
    document.getElementById('nombre').focus();
});