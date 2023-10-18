//alert("Hola este es mi Javascript");
//let nombre="adriana";
//var nombre1="gabriel"

//console.log(nombre);
//onsole.log(nombre1);

let contenidoTitulo = "acerca-de";

let titulo = document.querySelector(".titulo_acerca");
titulo.innerHTML = "name";
//console.log(contenidoTitulo.innerText);

let textoTitulo = titulo.innerText;
console.log(textoTitulo);


// if(textoTitulo == "acerca" ){
//     titulo.innerHTML = "Name";  
// }else {
//     console.log("equivocación");
    

// }*/

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});