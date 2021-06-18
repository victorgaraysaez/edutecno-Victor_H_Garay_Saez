let form = document.getElementById( "formulario" );

form.addEventListener( "submit",  ( event ) => {
    event.preventDefault();
    TextRevision();
    let nombre = document.getElementById( "nombre" ).value;
    let asunto = document.getElementById( "asunto" ).value;
    let mensaje = document.getElementById( "mensaje" ).value;
    let resultado = Endorse(nombre,asunto,mensaje);
    if(resultado == true) {
    SendTo();
    };
});

const TextRevision= () => {
document.querySelector(".resultado").innerHTML = "";
document.querySelector(".errorNombre").innerHTML = "";
document.querySelector(".errorAsunto").innerHTML = "";
document.querySelector(".errorMensaje").innerHTML = "";
};

const SendTo = () => {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!";
};

const Endorse = (nombre,asunto,mensaje) => {
    let TextToPrint = true;
    let EndorsementNombre = /[a-zA-Z]/gim;

    if (EndorsementNombre.test(nombre) == false) {
    document.querySelector(".errorNombre").innerHTML = "El nombre es requerido."
    TextToPrint = false;
    };

    let EndorsementAsunto = /[a-zA-Z]/gim;

    if (EndorsementAsunto.test(asunto) == false) {
    document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido."
    TextToPrint = false;
    };

    let EndorsementMensaje = /[a-zA-Z]/gim;

    if (EndorsementNombre.test(mensaje) == false) {
    document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido."
    TextToPrint = false;
    };
    
    return TextToPrint;
};
    