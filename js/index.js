


const fechaEntera = () => {
    var date = new Date();
    var d = date.getDate();
    var day = (d < 10) ? '0' + d : d;
    var m = date.getMonth() + 1;
    var month = (m < 10) ? '0' + m : m;
    var yy = date.getYear();
    var year = (yy < 1000) ? yy + 1900 : yy;
    let contenedorFecha = document.getElementById("fecha-hoy");
    contenedorFecha.innerHTML = `<p>Fecha: ${day} / ${month} / ${year}</p>`
}

// fechaEntera();

const mueveReloj =() => {
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()
    horaImprimible = hora + " : " + minuto + " : " + segundo;
    let inputHora = document.getElementById("input-hora");
    inputHora.value = horaImprimible
    setTimeout("mueveReloj()", 1000)   
}
// mueveReloj();


document.addEventListener("DOMContentLoaded", function(event) { 
    mueveReloj();
    fechaEntera();
});


const gracias = () => {
    let nombreForm = document.getElementById("inputNombre").value
    let apellidoForm = document.getElementById("inputApellido").value
    let mailForm = document.getElementById("inputMail").value


    alert(`${nombreForm+ " "+ apellidoForm} HORA MEDICA !
te enviaremos la información a ${mailForm}
    `)}


$('.toast').toast(option)