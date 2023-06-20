function convertirTemperatura() {
  var temperatura = parseFloat(document.getElementById("temperatura").value);
  var convertirDe = document.getElementById("convertirDe").value;
  var convertirA = document.getElementById("convertirA").value;

  var resultado;

  if (convertirDe === "Celsius") {
    if (convertirA === "Fahrenheit") {
      resultado = (temperatura * 9 / 5) + 32;
    } else if (convertirA === "Kelvin") {
      resultado = temperatura + 273.15;
    }
  } else if (convertirDe === "Fahrenheit") {
    if (convertirA === "Celsius") {
      resultado = (temperatura - 32) * 5 / 9;
    } else if (convertirA === "Kelvin") {
      resultado = (temperatura + 459.67) * 5 / 9;
    }
  } else if (convertirDe === "Kelvin") {
    if (convertirA === "Celsius") {
      resultado = temperatura - 273.15;
    } else if (convertirA === "Fahrenheit") {
      resultado = (temperatura * 9 / 5) - 459.67;
    }
  }

  resultado = resultado.toFixed(2);

  alert("El resultado de la conversión es: " + resultado);
}
