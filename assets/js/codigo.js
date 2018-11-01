// Activa el menu
window.onload = function() {
  // Mostrar hamburguesa
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
  });

  // Pasafotos
  $(function() {
    $( '.cycle-slideshow' ).on( 'cycle-before', function( event, opts ) {
      //$('.cycle-slideshow').cycle('next');
      // your event handler code here
      // argument opts is the slideshow's option hash
    });
  });
}

// Opciones inscripción

function updateCheckBox(opts) {
      var blocks = document.getElementsByName("bloque");
      var sessions = document.getElementsByName("sesion");

      if (opts.value == 'bloques') {
          for (var i = 0; i <= blocks.length - 1; i++) {
              blocks[i].classList.remove('div-invisible');
              blocks[i].classList.add('div-visible');
              //document.getElementById('div').innerHTML = 'Checkboxes enabled';
          }
      }
      else {
        for (var i = 0; i <= blocks.length - 1; i++) {
            blocks[i].classList.remove('div-visible');
            blocks[i].classList.add('div-invisible');
        }
      }

      if (opts.value == 'sesiones') {
          for (var i = 0; i <= sessions.length - 1; i++) {
              sessions[i].classList.remove('div-invisible');
              sessions[i].classList.add('div-visible');
              //document.getElementById('div').innerHTML = 'Checkboxes enabled';
          }
      }
      else {
        for (var i = 0; i <= sessions.length - 1; i++) {
            sessions[i].classList.remove('div-visible');
            sessions[i].classList.add('div-invisible');
        }
      }
  };


// Formulario.
$(document).ready(function() {

  // process the form
  $('form').submit(function(event) {
        event.preventDefault();
        var href = $(this).attr("action");

        $.ajax({
            type: "POST",
            dataType: "json",
            url: href,
            data: $(this).serialize(),
            success: function(response){
                if(response.status == "success"){
                    window.location.href = 'https://fragilidadmemoria.es/inscripcion/inscripcion1.html'; // change this.
                }else{
                    alert("Ocurrió un error. Por favor vuelve a intentarlo o sino escríbenos a fragilidadmemoria@protonmail.com. Muchas gracias.");
                }
            }
        });
    });
});
