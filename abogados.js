function mostrarDescripcion(id) {
  var descripcion = document.getElementById(id);
  if (descripcion.style.display === "none") {
    descripcion.style.display = "block";
  } else {
    descripcion.style.display = "none";
  }
}

