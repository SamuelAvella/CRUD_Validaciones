function validacion() {
    let correcto = true;
    let user = document.getElementById('user').value.trim();
    let password = document.getElementById('password').value.trim();
    
    let userField = document.getElementById('user');
    let passwordField = document.getElementById('password');

    if (user == "" || user.length < 8 || user.length > 12) {
        document.getElementById('userHelp').style.visibility = "visible";
        userField.style.borderBottomColor = "red";
        correcto = false;
    } else {
        userField.style.borderBottomColor = "";
    }

    if (password == "" || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/.test(password)) {
        document.getElementById('passwordHelp').style.visibility = "visible";
        passwordField.style.borderBottomColor = "red";
        correcto = false;
    } else {
        passwordField.style.borderBottomColor = "";
    }

    return correcto;
}

function deleteError(id) {
    document.getElementById(id + 'Help').style.visibility = "hidden";
    document.getElementById(id).style.borderBottomColor = "";
}


