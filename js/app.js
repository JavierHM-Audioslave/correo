const elemInputEmail = document.querySelector("#email");
const elemInputAsunto = document.querySelector("#asunto");
const elemTextarea = document.querySelector("textarea");
const elemBotonEnviar = document.querySelector("#enviar");
const elemBotonResetear = document.querySelector("#resetear");
// const elemForm = document.querySelector("form");
const elemEnviar = document.querySelector("#enviar");
let mailOK = false;
let asuntoOK = false;
let mensajeOK = false;

registrarEventos();

function registrarEventos() {
    elemInputEmail.addEventListener('change', chequearContenidoDeEmail);
    document.addEventListener("DOMContentLoaded", limpiarContenidos);
    elemInputAsunto.addEventListener('change', chequearContenidoDeAsunto);
    elemTextarea.addEventListener('change', chequearContenidoDeMensaje);
    elemBotonResetear.addEventListener("click", limpiarContenidos);
    // elemForm.addEventListener("submit", enviarMail); // Lo eliminé porque tengo dos submit en el form. //
    elemEnviar.addEventListener("click", enviarMail);
}


/***************************************************************************/
// FEATURE: función que permite chequear el contenido del mail. //
function chequearContenidoDeEmail(e) {
    const parrafoAdvertenciaCorreo = document.querySelector("#envolvedorDeCorreo p");

    if( e.target.value.indexOf("@") < 0 ) {
        parrafoAdvertenciaCorreo.style.display = "block";
        mailOK = false;
        deshabilitarSubmit();            
    } else {
        if( e.target.value.indexOf("@") >= 0 ) {
            parrafoAdvertenciaCorreo.style.display = "none";
            mailOK = true;
            chequearHabilitacionDeSubmit();
        }
    }
}
/***************************************************************************/





/***************************************************************************/
// FEATURE: función que permite limpiar el contenido de los input y textarea al iniciar o reiniciar la página. //
function limpiarContenidos(e) {
    e.preventDefault();     // Sólo sirve en el caso de que se active el evento click por haber presionado el botón "RESETEAR FORM". En el caso de ejecutarse esta función a través del método DOMContentLoaded, esta línea se pasa de largo sin generarse error ni acción.  //
    document.querySelector("#email").value = "";
    document.querySelector("#asunto").value = "";
    document.querySelector("#mensaje").value = "";
}


/***************************************************************************/



/***************************************************************************/
// FEATURE: función que permite chequear el contenido del asunto. //
function chequearContenidoDeAsunto(e) {    
    if( e.target.value.search("[0-9a-zA-Z]") >= 0 ) {
        asuntoOK = true;
        chequearHabilitacionDeSubmit();
    } else {
        asuntoOK = false;
        deshabilitarSubmit();
    }
}

/***************************************************************************/



/***************************************************************************/
// FEATURE: función que permite chequear el contenido del cuerpo del mensaje. //
function chequearContenidoDeMensaje(e) {
    if( e.target.value.search("[0-9a-zA-Z]") >= 0 ) {
        mensajeOK = true;
        chequearHabilitacionDeSubmit();
    } else {
        mensajeOK = false;
        deshabilitarSubmit();
    }
}

/***************************************************************************/



/***************************************************************************/
// FEATURE: función que permite habilitar el botón "ENVIAR". //
function chequearHabilitacionDeSubmit() {
    if( mailOK === true && asuntoOK === true && mensajeOK === true ) {
        elemBotonEnviar.disabled = false;
        elemBotonEnviar.style.transition = "background-color 4s";
        elemBotonEnviar.style.backgroundColor = "rgba(49,130,206,1)";
        document.querySelector("#enviar").style.cursor = "default";
    }
}
/***************************************************************************/




/***************************************************************************/
// FEATURE: función que permite deshabilitar el botón "ENVIAR"- //
function deshabilitarSubmit() {
    elemBotonEnviar.disabled = true;
    elemBotonEnviar.style.backgroundColor = "rgba(49,130,206,0.3)";
    document.querySelector("#enviar").style.cursor = "not-allowed";
}
/***************************************************************************/




/***************************************************************************/
// FEATURE: función que permite mostrar el spinner de carga al submitear el formulario para dar apariencia de estar enviando el correo. //
function enviarMail(e) {
    e.preventDefault;
    const elemSpinner = document.querySelector("#spinner");
    elemSpinner.style.display = "block";
    setTimeout( e => elemSpinner.style.display = "none", 4000);
}
/***************************************************************************/