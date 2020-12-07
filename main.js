let participantes = [];

function addParticipante(nombrePart, apellidoPart, edadPart, correoPart) {
    var participante = {
        nombre: nombrePart,
        apellido: apellidoPart,
        edad: edadPart,
        correo: correoPart,
    };

    participantes.push(participante);
    console.log(participantes);
}

function registrar() {
    const nombreInput = document.getElementById(`txtName`).value;
    const apellidoInput = document.getElementById(`txtApellido`).value;
    const edadInput = document.getElementById(`txtEdad`).value;
    const correoInput = document.getElementById(`txtMail`).value;

    addParticipante(nombreInput, apellidoInput, edadInput, correoInput);
    /* La funcion reset limpia el formulario */
    const formulario = document.getElementById("formulario").reset();

    mostrarLista(); /* Cuando se precione el boton de REGISTRAR se llama a la funcion */
    let mensajeNoPart = document.getElementById("mensajeNoPart");
    mensajeNoPart.style.display = "none";
}

 function mostrarLista() {
  const listaUL = document.getElementById("listaPart");
  var listaTexto = "";

  for (var i = 0; i < participantes.length; i++) {
    listaTexto = listaTexto + `<li>Nombre: ${participantes[i].nombre} ,
    Apellido: ${participantes[i].apellido}, Edad: ${participantes[i].edad} y Correo: ${participantes[i].correo} </li>`;
}
  listaUL.innerHTML = listaTexto;
} 

function sortear (){
    console.log("sorteo!!")

    const mensajeError = document.getElementById("mensajeError");

    if(participantes.length>=5){
        //Se procede al sorteo
        mensajeError.style.display = "none";
        const valorRandom = Math.random()*participantes.length;
        const indiceGanador = Math.floor(valorRandom);

        alert(participantes[indiceGanador].nombre + " " + participantes[indiceGanador].apellido + " Ha ganado el sorteo")

    } else{
        //No se procede al sorteo
        mensajeError.style.display = "inline-block";
    }
}


/*
addParticipante("Ever", "Ponce", 27, "ever@hotmail.com");
addParticipante("Ewever", "Powence", 37, "ever@hotwemail.com");
addParticipante("Evweer", "Poncwee", 17, "ever@howetmail.com");

console.log(participantes);


suma = 0;
for(var i=0; i<participantes.length; i++){
    suma = suma + participantes[i].edad;
}

console.log("Promedio " + suma/participantes.length);

suman = "";
for(var i=0; i<participantes.length; i++){
    console.log(`${participantes[i].nombre}`);
} */
