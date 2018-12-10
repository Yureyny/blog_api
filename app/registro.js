
$(document).ready(function () {

    $("#btn_registrar").click(function () {

        registrarse();
    });

    $("#txt_clave2").keyup(function () {
        var password = $("#txt_clave1").val();
        var repassword = $(this).val();
        if (password === repassword) {
            $('#mensaje').html(mostrar_mensaje('success', 'Contraseñas coinciden'));
        } else {
            $('#mensaje').html(mostrar_mensaje('danger', 'Contraseñas no coinciden'));
        }
    });


});
function registrarse() {
    var name = $('#txt_nombre').val();
    var email = $('#txt_email').val();
    var password = $('#txt_clave1').val();
    var repassword = $('#txt_clave2').val();
    if (name != '' && email != '' && password != '' && repassword != '') {
        if (password === repassword) {
            var url = 'http://68.183.27.173:8080/register';
            var data = {
                "name": name,
                "email": email,
                "password": password
            };
            fetch("http://68.183.27.173:8080/register", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .then(response => {
                    if (response.error) {
                        $('#mensaje').html(mostrar_mensaje('danger', response.message));
                    } else {
                        $('#mensaje').html(mostrar_mensaje('success', 'Usuario registrado con exito'));
                        window.location.href = 'login.html';
                    }
                }
                )
                .catch(error => $('#mensaje').html(mostrar_mensaje('danger', error)));


        } else {
            $('#mensaje').html(mostrar_mensaje('danger', 'Contraseñas no coinciden'));
        }
    } else {
        $('#mensaje').html(mostrar_mensaje('danger', 'Debe completar todos los campos del formulario.'));

    }
}