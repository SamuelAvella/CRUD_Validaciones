function validacion() {
    let correcto = true;

    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let dni = document.getElementById('DNI').value.trim();
    let edad = document.getElementById('edad').value;
    let email = document.getElementById('email').value.trim();
    let departamento = document.getElementById('departamento').value;
    let radioOptions = document.getElementsByName('radioOption');
    let infoCheckbox = document.getElementById('infoCheckbox');

    if(nombre === "" || nombre.length < 1){
        document.getElementById('nombreHelp').style.visibility = "visible";
        document.getElementById('nombre').style.borderColor="red"
        correcto = false;
    }
    
    if(apellido === "" || apellido.length < 5){
        document.getElementById('apellidoHelp').style.visibility = "visible";
        document.getElementById('apellido').style.borderColor = "red";
        correcto = false;
    }

    if(dni === "" || !/^\d{8}[a-zA-Z]$/.test(dni)){
        document.getElementById('DNIHelp').style.visibility = "visible";
        document.getElementById('DNI').style.borderColor = "red";
        correcto = false;
    }

    if (edad <= 18 || edad >= 50 || isNaN(edad)) {
        document.getElementById('edadHelp').style.visibility = "visible";
        document.getElementById('edad').style.borderColor = "red";
        correcto = false;
    }

    if(email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        document.getElementById('emailHelp').style.visibility = "visible";
        document.getElementById('email').style.borderColor = "red";
        correcto = false;
    }

    if (departamento == 0) {
        document.getElementById('selectOptionHelp').style.visibility = "visible";
        document.getElementById('selectOption').style.borderColor = "red";
        correcto = false;
    }

    let radioSelected = false;
    for (let i = 0; i < radioOptions.length; i++) {
        if (radioOptions[i].checked) {
            radioSelected = true;
            break;
        }
    }
    if (!radioSelected) {
        document.getElementById('radioOptionHelp').style.visibility = "visible";
        document.getElementById('radioOption').style.borderColor = "red";
        correcto = false;
    }

    if (!infoCheckbox.checked) {
        document.getElementById('infoCheckboxHelp').style.visibility= "visible";
        document.getElementById('infoCheckbox').style.borderColor = "red";
        correcto = false;
    }

    return correcto;
}

function deleteError(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderColor = "lightgray";
}