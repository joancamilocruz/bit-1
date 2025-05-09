'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const enviarBtn = document.querySelector('#enviarDatos');
    const nombreInput = document.querySelector('#floatingInputNombre');
    const edadInput = document.querySelector('#floatingInputEdad');
    const numeroTelefonoInput = document.querySelector('#floatingInputNumero');
    const linkInstaInput = document.querySelector('#floatingInputInstagram');
    const correoInput = document.querySelector('#floatingInputGrid');
    const hinchaSelect = document.querySelector('#floatingSelectGrid');
    const tuMensajeTextarea = document.querySelector('#floatingTextarea');

    enviarBtn.addEventListener('click', function() {
        const nombreValue = nombreInput.value;
        const edadValue = edadInput.value;
        const numeroTelefonoValue = numeroTelefonoInput.value;
        const linkInstaValue = linkInstaInput.value;
        const correoValue = correoInput.value;
        const hinchaValue = hinchaSelect.value;
        const tuMensajeValue = tuMensajeTextarea.value;

        const datosRegistro = {
            nombre: nombreValue,
            edad: edadValue,
            numeroTelefono: numeroTelefonoValue,
            linkInsta: linkInstaValue,
            correo: correoValue,
            hincha: hinchaValue,
            tuMensaje: tuMensajeValue
        };
    });
});