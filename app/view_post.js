$(document).ready(function () {
    validar_sesion();
    var id = localStorage.getItem('post_id');
    cargar_posts("", id,"");
    cargar_comentarios(id);
  


   

    $('#btncomentar').click(function(e){
        var body=$('#comment').val();
        var data = {         
           'body':body,
        };
        let token = JSON.parse(localStorage.getItem('datosuser')).token;
        var post_id = localStorage.getItem('post_id');

        url = "http://68.183.27.173:8080/post/" + post_id + "/comment";
        fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
                'Authorization' : 'Bearer '+token
            }
          }).then(function(response){
            $('#msg').html(mostrar_mensaje('success', 'Se ha publicado el comentario correctamente.'));
            cargar_comentarios(post_id);$('#comment').val('');

          })
          .catch(error =>   $('#msg').html(mostrar_mensaje('danger', 'Error Creando el comentario')));
    });


});



