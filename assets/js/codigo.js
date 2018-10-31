// Activa el menu
window.onready = function() {
  // Mostrar hamburguesa
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
  });

  // Pasafotos
  $(function() {
    $( '.cycle-slideshow' ).on( 'cycle-before', function( event, opts ) {
      console.log( "on after!" );
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
