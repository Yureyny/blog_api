$(document).ready(function () {
 

  cargar();
 
});
function cargar(){
    if(localStorage.getItem("datosuser")){
        var data = JSON.parse(localStorage.getItem("datosuser"));
        if(data.id > 0 && data.token !=''){
         $('#nombre_usuario_logueado').html(data.name);
         $('#email_logueado').html(data.email);
         $('#nombre_log').html(data.name);
         
         
        }
    }

    
}


