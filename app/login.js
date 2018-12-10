$(document).ready(function () {
   
    $("#btn_login").click(function () {
        login();
    });
});
function login() {
    var username = $('#txt_user').val();
    var password = $('#txt_pass').val();
    if (username != '' && password != '') {

        var data = {
            "email": username,
            "password": password
        };
        fetch("http://68.183.27.173:8080/login", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => {
                if (response.estatus && response.estatus == 'error') {
                    $('#mensaje').html(mostrar_mensaje('danger', 'Usuario o clave incorrectas'));
                } else {
                    $('#mensaje').html(mostrar_mensaje('success', 'Usuario encontrado'));

                    var datos_usuario = {
                        "id": response.id,
                        "name": response.name,
                        "email": response.email,
                        "token": response.token
                    };
                    localStorage.setItem("datosuser", JSON.stringify(datos_usuario));
                    window.location.href = 'home.html';
                }
                
            }
            )
            .catch(error => $('#mensaje').html(mostrar_mensaje('danger', error)));
    } else {
        $('#mensaje').html(mostrar_mensaje('danger', 'Debe completar los campos'));

    }
}
