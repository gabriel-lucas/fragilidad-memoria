// Variables

var nombre, apellidos, email, telefono, opcion;
var BI, BII, BII, BIV;
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;

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
  //console.log(window.location.pathname);
  if(window.location.pathname == "/inscripcion/"){
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
          console.log("enviando");
          $.ajax({
              type: "POST",
              dataType: "json",
              url: href,
              data: $(this).serialize(),
              success: function(response){
                  if(response.status == "success"){
                    var url = document.createElement('a');
                    url.href = response.returnUrl;
                    const urlParams = new URLSearchParams(url.search);
                    urlParams.delete('apellidos');
                    urlParams.delete('email');
                    urlParams.delete('telefono');
                    window.location.href = './inscripcion1.html'+'?'+urlParams.toString(); // change this.
                  }else{
                      alert("Ocurrió un error. Por favor vuelve a intentarlo o sino escríbenos a fragilidadmemoria@protonmail.com. Muchas gracias.");
                  }
              }
          });
      });
  }else if (window.location.pathname == "/inscripcion/inscripcion1.html") {
    //console.log("Pago");
    var urlParams = new URLSearchParams(window.location.search);
    nombre = urlParams.get('nombre');
    var salida = calcularPrecio(urlParams);
    var precio = salida[0];
    var opcion = salida[1];
    streaming = urlParams.has('streaming');
    document.getElementById('nombre-pago').innerHTML = nombre;
    document.getElementById('opcion').innerHTML = opcion;
    document.getElementById('precio').innerHTML = precio;
  }else if(window.location.pathname == "/test/testStripe.html"){
    // Create a Stripe client.
    var stripe = Stripe('pk_test_im4eLqtDCrJlVXzTg6qcTQZg', {betas: ['checkout_beta_3']});
    var checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', pagar(1,1,1));
  }
});

function calcularPrecio(urlParams){
    var precio = 0;
    var salidaOpcion="";
    opcion = urlParams.get('opcion');
    switch(opcion){
      case "todo": precio = 300; salidaOpcion="Curso completo"; break;
      case "bloques":
        salidaOpcion="Bloque"
        if(urlParams.has('BI')==true){
           precio = precio+100;
           salidaOpcion=salidaOpcion+" I";
        }
        if(urlParams.has('BII')==true){
          precio = precio+100;
          salidaOpcion=salidaOpcion+" II";
        }
        if(urlParams.has('BIII')==true){
          precio = precio+100;
          salidaOpcion=salidaOpcion+" III";
        }
        if(urlParams.has('BIV')==true){
          precio = precio+100;
          salidaOpcion=salidaOpcion+" IV";
        }
        if(precio>300){
          precio=300;
          salidaOpcion="Curso completo";
        }
        break;
      case "sesiones":
        salidaOpcion="Sesiones"
        if(urlParams.has('s1')==true) precio = precio+40;
        if(urlParams.has('s2')==true) precio = precio+40;
        if(urlParams.has('s3')==true) precio = precio+40;
        if(urlParams.has('s4')==true) precio = precio+40;
        if(urlParams.has('s5')==true) precio = precio+40;
        if(urlParams.has('s6')==true) precio = precio+40;
        if(urlParams.has('s7')==true) precio = precio+40;
        if(urlParams.has('s8')==true) precio = precio+40;
        if(urlParams.has('s9')==true) precio = precio+40;
        if(urlParams.has('s10')==true) precio = precio+40;
        if(urlParams.has('s11')==true) precio = precio+40;
        if(urlParams.has('s12')==true) precio = precio+40;
        if(urlParams.has('s1')==true && urlParams.has('s3')==true && urlParams.has('s3')==true ) precio = precio-20;
        if(urlParams.has('s4')==true && urlParams.has('s5')==true && urlParams.has('s6')==true ) precio = precio-20;
        if(urlParams.has('s7')==true && urlParams.has('s8')==true && urlParams.has('s9')==true ) precio = precio-20;
        if(urlParams.has('s10')==true && urlParams.has('s11')==true && urlParams.has('s12')==true ) precio = precio-20;
        if(precio>300) precio=300;
        break;
    }
    return [precio,salidaOpcion];
}




function pagar (curso, bloques, sesiones){
    stripe.redirectToCheckout({
    items: [
        {sku: 'sku_E7JTP3BxBmKj2O', quantity: curso},
        {sku: 'sku_E7JkyG5CRuecVv', quantity: bloques},
        {sku: 'sku_E7Jk6idgE2weH2', quantity: sesiones}
    ],
    successUrl: 'https://fragilidadmemoria.es/inscripcion/inscripcion-completada.html',
    cancelUrl: 'https://fragilidadmemoria.es/inscripcion/inscripcion-cancelada.html',
  }).then(function (result) {
    // Display result.error.message to your customer
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
}
