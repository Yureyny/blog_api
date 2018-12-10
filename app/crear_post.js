$(document).ready(function () {
    validar_sesion();
    $('#btnguardar').click(function(e){
        savePost();
    });
    $('#btnnuevo').click(function(e){
      $('#titulo').val('');
      $('#texto').val('');
      $('#tags').val('');
    });

    //tags
    $(function () {
        $('#tags').tagsInput({
            width: 'auto',
            height: 'auto',
            'defaultText': 'Add a tag',
        });
    });
});

function savePost(){
    let token = JSON.parse(localStorage.getItem('datosuser')).token;
    let title = $('#titulo').val();
    let body = $('#texto').val();
    let tags = [$('#tags').val()];

    var data = {
        title:title,
        body:body,
        tags:tags
    };

    if(title!= ''){
        if(body!=''){
            fetch("http://68.183.27.173:8080/post", {
            method: 'POST', 
            body: JSON.stringify(data), 
            headers:{
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer '+token
            }
          }).then(function(response){
            $('#msg').html(mostrar_mensaje('success', 'Se ha creando el post correctamente.'))
          })
          .catch(error =>   $('#msg').html(mostrar_mensaje('danger', 'Error Creando el post')));
        }else{
            $('#msg').html(mostrar_mensaje('danger', 'Debe ingresar el contenido del post para continuar.'));
        }
    }else{
        $('#msg').html(mostrar_mensaje('danger', 'Debe ingresar el titulo del post para continuar.'))
    }
}