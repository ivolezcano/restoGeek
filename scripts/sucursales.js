document.addEventListener("DOMContentLoaded", function () {
  var filterSelect = document.getElementById("filter");
  var sucursales = document.querySelectorAll("#list li");

  filterSelect.addEventListener("change", function () {
    var filtro = filterSelect.value;

    sucursales.forEach(function (sucursal) {
      var mostrar = false;

      if (filtro === "todos") {
        mostrar = true;
      } else if (
        filtro === "capital" &&
        sucursal.classList.contains("capital")
      ) {
        mostrar = true;
      } else if (filtro === "gba" && sucursal.classList.contains("gba")) {
        mostrar = true;
      }

      if (mostrar) {
        sucursal.style.display = "block";
      } else {
        sucursal.style.display = "none";
      }
    });
  });
});
