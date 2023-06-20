function comprobarInstructor() {
    // Obtener los valores seleccionados por el usuario
    var nombreSeleccionado = document.getElementById("nombre").value;
    var apellidoSeleccionado = document.getElementById("apellido").value;
    var actividadSeleccionada = document.getElementById("actividad").value;

    // Definir las listas de nombres, apellidos y actividades
    var nombres = ["Jennifer", "Sandra", "Margarita", "Erick", "Cristian", "Julio", "Manuel"];
    var apellidos = ["Fajardo", "Rueda", "Guarín", "Granados", "Buitrago", "Buitrago", "Garavito"];
    var actividades = ["JavaScript", "Bases de Datos", "Prototipado", "Java", "Diseño de Proyecto", "Derechos Fundamentales para el Trabajo", "Python"];

    // Comprobar si la selección del usuario es correcta
    var indice = nombres.indexOf(nombreSeleccionado);
    if (indice !== -1 && apellidos[indice] === apellidoSeleccionado && actividades[indice] === actividadSeleccionada) {
        alert("La respuesta es correcta");
    } else {
        alert("La respuesta es incorrecta");
    }
}
