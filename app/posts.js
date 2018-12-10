$(document).ready(function () {
  validar_sesion();
  cargar_posts("", "");

  $(document).on('click', '#link_tag', function (e) {

    $('#table_tag tbody').prepend("<tr><td id='_tag'>" + $(this).attr("alt") + "</td><td><span id='delete_tag' style='cursor:pointer;'><ion-icon name='trash'></ion-icon>Borrar</span></td></tr>");

  });

  $(document).on('click', '#delete_tag', function (e) {
    var r = $(e.target).closest('tr');
    r.remove();

  });

  $('#filtrar').click(function (e) {
    var tag=[];

    $( "#table_tag tbody tr" ).each(function() {
      var r= $(this).find('#_tag');
        tag.push(r.text());
       
      
        
    });


    cargar_posts("", "",tag);

    
  });




});