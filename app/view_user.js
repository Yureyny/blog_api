$(document).ready(function () {
    validar_sesion();
    var id = localStorage.getItem('user_sel');

    cargardatos_user(id);
    cargar_posts(id,"","");


});

function cargardatos_user(user_id) {
    let token = JSON.parse(localStorage.getItem('datosuser')).token;
    url = "http://68.183.27.173:8080/users/" + user_id;

    fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+token
            }
        }).then(res => res.json())
        .then(response => {
            if (response.error && response.message == 'Not found') {

            } else {


                //Fecha
                var fecha = new Date(response.createdAt);
                fecha = fecha.toLocaleDateString();

                $('#txtnombre').val(response.name);
                $('#txtemail').val(response.email);
                $('#txtcantidad').val(response.posts);
                $('#txtfechaini').val(fecha);







            }

        })
        .catch(error => console.log(error));


}