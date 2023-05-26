function mostrarDescripcion(descripcion) {
    var descripcionElemento = document.getElementById(descripcion);
    if (descripcionElemento.style.display === "none") {
      descripcionElemento.style.display = "block";
    } else {
      descripcionElemento.style.display = "none";
    }
  }

