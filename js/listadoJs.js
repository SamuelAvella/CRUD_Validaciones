function myFunction() {
    let text;
    if (confirm("¿Está seguro de querer eliminar este empleado?") == true) {
      text = "You pressed OK!";
    } else {
      text = "You canceled!";
    }
    document.getElementById("demo").innerHTML = text;
  }

  function editFunction() {
    alert("Función de edición activada");
}