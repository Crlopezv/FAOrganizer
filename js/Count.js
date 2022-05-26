function textareaLengthCheck(el) {
    var textArea = el.value.length;
    var charactersLeft = 250 - textArea;
    var count = document.getElementById('lblRemainingCount');
    count.innerHTML = "Carácteres restantes: " + charactersLeft;
  }