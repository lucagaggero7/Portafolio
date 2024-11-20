function validarFormulario() {
    const nombre = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('message').value.trim();

    if (!nombre || !email || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Por favor, introduce un correo válido.');
        return false;
    }
    return true;
}
