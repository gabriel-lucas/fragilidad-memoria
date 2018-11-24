// Activa el menu
window.onload = function() {
  // Mostrar hamburguesa
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');
  navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
  });

  // Pasafotos
  var clickable = document.getElementById('click-programa');
  clickable.style.cursor = 'pointer';
  clickable.onclick = function() {
    window.location.href = '/programa';
    //document.location.href = "https"
    //console.log("topdiv clicked!");
  }

  $(function() {
    //$( '.cycle-slideshow' ).on( 'cycle-before', function( event, opts ) {
      //$('.cycle-slideshow').cycle('next');
      // your event handler code here
      // argument opts is the slideshow's option hash
    //});
  });

  // shader
  var canvas = document.getElementById("glslCanvas");
  var sandbox = new GlslCanvas(canvas);
  canvas.style.width = '100%';
  canvas.style.height = '100%';

  //var slide = document.getElementsByClassName("cycle-slideshow");
  //  $( '.cycle-slideshow' ).cycle('pause');
  $('#slideshow').cycle('pause');

  setTimeout(showSlide, 25000);//25000);

  function showSlide(){
    canvas.style.display="none";
    //console.log("hola");
    $('#slideshow').css("display", "block"); //.style.display="block";
    //$('#slideshow').cycle('resume');
    $('#slideshow img:first').fadeIn(5000, function() {
  	      $('#slideshow').cycle({speed:3500});
      });
    //slide[0].style.display="block";
    //$( '.cycle-slideshow' ).cycle('resume');
    //$('.cycle-slideshow img:first').fadeOut(3000, function() {
    //    $('.cycle-slideshow').cycle('resume');
    //});
  }
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
// Al pulsar el botón de inscribirse lleva al formulario y cambia las opciones
  function cargarBoton(seleccion){
    location.href='#formulario'; // Enlace al anchor del formulario
    var nombre = document.getElementsByName("nombre");
    nombre[0].focus();
    var lista = document.getElementsByName("opcion");
    lista[0].selectedIndex=seleccion; // selecciona la opción del botón que se pulsa.
    updateCheckBox(lista[0]); // muestra los checkboxes adecuados
  }
  function cambiarCheckbox(checkbox) {
      if(checkbox.checked == true){
          if(checkbox.name == "BI"){
            console.log("B1 pulsado");
            var c = document.getElementsByName("s1");
            console.log(c);
            c.checked=true;
          }

      }else{
     }
  };


// Formulario.
$(document).ready(function() {

  // Cerrar los acordeones (details) cuando se pulsa para abrir otro
  const details = Array.from(document.querySelectorAll("details"));

  // Add the onclick listeners.
  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      // Close all the details that are not targetDetail.
      details.forEach((detail) => {
        if (detail !== targetDetail) {
          detail.removeAttribute("open");
        }
      });
    });
  });

  var acordeon = document.querySelectorAll("details")
  acordeon[0].addEventListener("toggle", function() {
      window.scrollTo(0, 0);
  })
  acordeon[1].addEventListener("toggle", function() {
      window.scrollTo(0, 240);
  })
  acordeon[2].addEventListener("toggle", function() {
      window.scrollTo(0, 370);
  })


  // Processamiento del formulario
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
