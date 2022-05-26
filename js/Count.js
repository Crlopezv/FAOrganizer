//Chequear caracteres restantes

function textareaLengthCheck(el) {
    var textArea = el.value.length;
    var charactersLeft = 250 - textArea;
    var count = document.getElementById('lblRemainingCount');
    count.innerHTML = "Carácteres restantes: " + charactersLeft;
  }

//Enviar formulario

function enviar() {
  document.getElementById("formulariocontact").submit();
  alert ("Muchas gracias por su comentario!")
}

//Resetear formulario (WIP)

function reset() {
  document.getElementById("formulariocontact").reset();
}


