function mostrarResultado() {
  var palabra = document.getElementById("word").value;
  var opcion = parseInt(document.getElementById("option").value);

  switch (opcion) {
    case 1:
      alert("La longitud de la palabra es: " + palabra.length);
      break;
    case 2:
      alert("La palabra en mayúsculas es: " + palabra.toUpperCase());
      break;
    case 3:
      alert("La palabra en minúsculas es: " + palabra.toLowerCase());
      break;
    case 4:
      alert("El primer carácter de la palabra es: " + palabra.charAt(0));
      break;
    default:
      alert("Opción inválida");
  }
}
