function validarFormulario() {
    var email = document.getElementById("email").value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false; // Evita que el formulario se envíe
    }

    return true; // Permite que el formulario se envíe
}