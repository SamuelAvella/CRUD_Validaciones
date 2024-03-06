document.getElementById("form").addEventListener("submit", function(event){
    var nombreInput = document.getElementById("nombre");
    var nombreHelp = document.getElementById("nombreHelp");
    var nombre = nombreInput.value.trim();
    
    if(nombre == "" || nombre.length < 1){
        nombreHelp.style.visibility = "visible";
        document.getElementById('nombre').style.borderColor="red";
        event.preventDefault();
    } else {
        nombreHelp.style.visibility = "hidden";
        document.getElementById('nombre').style.borderColor="ligthgray";
    }
})

document.getElementById("form").addEventListener("submit", function(event){
    var apellidoInput = document.getElementById("apellido");
    var apellidoHelp = document.getElementById("apellidoHelp");
    var apellido = apellidoInput.value.trim();

    if(apellido == "" || apellido.length < 5){
        apellidoHelp.style.visibility = "visible";
        document.getElementById('apellido').style.borderColor = "red";
        event.preventDefault();
    } else {
        apellidoHelp.style.visibility = "hidden";
        document.getElementById('apellido').style.borderColor = "lightgray";
    }
});

document.getElementById("form").addEventListener("submit", function(event){
    var dniInput = document.getElementById("DNI");
    var dniHelp = document.getElementById("DNIHelp");
    var dni = dniInput.value.trim();
    
    if(dni == "" || !/^\d{8}[a-zA-Z]$/.test(dni)){
        dniHelp.style.visibility = "visible";
        document.getElementById('DNI').style.borderColor = "red";
        event.preventDefault();
    } else {
        dniHelp.style.visibility = "hidden";
        document.getElementById('DNI').style.borderColor = "lightgray";
    }
});

document.getElementById("form").addEventListener("submit", function(event){
    var edadInput = document.getElementById("edad");
    var edadHelp = document.getElementById("edadHelp");
    var edad = edadInput.value.trim();

    if(edad <= 18 || edad >= 50 || isNaN(edad)){
        edadHelp.style.visibility = "visible";
        document.getElementById('edad').style.borderColor = "red";
        event.preventDefault();
    } else {
        edadHelp.style.visibility = "hidden";
        document.getElementById('edad').style.borderColor = "lightgray";
    }
});

document.getElementById("form").addEventListener("submit", function(event){
    var emailInput = document.getElementById("email");
    var emailHelp = document.getElementById("emailHelp");
    var email = emailInput.value.trim();

    if(email == "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        emailHelp.style.visibility = "visible";
        document.getElementById('email').style.borderColor = "red";
        event.preventDefault();
    } else {
        emailHelp.style.visibility = "hidden";
        document.getElementById('email').style.borderColor = "lightgray";
    }
});

document.getElementById("form").addEventListener("submit", function(event){
    var departamentoInput = document.getElementById("departamento");
    var departamentoHelp = document.getElementById("departamentoHelp");
    var departamento = departamentoInput.value.trim();

    if(departamento == 0){
        departamentoHelp.style.visibility = "visible";
        document.getElementById('departamento').style.borderColor = "red";
        event.preventDefault();
    } else {
        departamentoHelp.style.visibility = "hidden";
        document.getElementById('departamento').style.borderColor = "lightgray";
    }
});

document.getElementById("form").addEventListener("submit", function(event){
    var radioOptions = document.getElementsByName("radioOption");
    var radioOptionHelp = document.getElementById("radioOptionHelp");
    var radioSelected = false;

    for (let i = 0; i < radioOptions.length; i++) {
        if (radioOptions[i].checked) {
            radioSelected = true;
            break;
        }
    }

    if (!radioSelected) {
        radioOptionHelp.style.visibility = "visible";
        document.getElementById('radioOption').style.borderColor = "red";
        event.preventDefault();
    } else {
        radioOptionHelp.style.visibility = "hidden";
        document.getElementById('radioOption').style.borderColor = "lightgray";
    }
});

document.getElementById("form").addEventListener("submit", function(event){
    var infoCheckbox = document.getElementById("infoCheckbox");
    var infoCheckboxHelp = document.getElementById("infoCheckboxHelp");

    if (!infoCheckbox.checked) {
        infoCheckboxHelp.style.visibility = "visible";
        document.getElementById('infoCheckbox').style.borderColor = "red";
        event.preventDefault();
    } else {
        infoCheckboxHelp.style.visibility = "hidden";
        document.getElementById('infoCheckbox').style.borderColor = "lightgray";
    }
});

function checkField(inputId, helpId){
    var input = document.getElementById(inputId);
    var help = document.getElementById(helpId);

    if(input.value == ""){
        help.style.visibility = "visible";
        input.style.borderColor = "red";
    } else{
        help.style.visibility = "hidden";
        input.style.borderColor = "lightgray";
    }
}
