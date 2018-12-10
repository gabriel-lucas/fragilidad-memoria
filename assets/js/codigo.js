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
                    //urlParams.delete('apellidos');
                    //urlParams.delete('email');
                    //urlParams.delete('telefono');
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
    var curso = salida[1];
    var bloques = salida[2];
    var sesiones = salida[3];

    apellidos = urlParams.get('apellidos');
    email = urlParams.get('email');
    telefono = urlParams.get('telefono');
    opcion = urlParams.get('opcion');
    streaming = urlParams.has('streaming');
    BI = urlParams.has('BI');
    BII = urlParams.has('BII');
    BIII = urlParams.has('BIII');
    BIV = urlParams.has('BIV');
    s1 = urlParams.get('s1');
    s2 = urlParams.get('s2');
    s3 = urlParams.get('s3');
    s4 = urlParams.get('s4');
    s5 = urlParams.get('s5');
    s6 = urlParams.get('s6');
    s7 = urlParams.get('s7');
    s8 = urlParams.get('s8');
    s9 = urlParams.get('s9');
    s10 = urlParams.get('s10');
    s11 = urlParams.get('s11');
    s12 = urlParams.get('s12');


    document.getElementById('nombre-pago').innerHTML = nombre;
    document.getElementById('apellidos').innerHTML = apellidos;

    var textoOpcion="";
    if(!opcion.localeCompare("todo")){
      textoOpcion="Curso completo";
    }else if(!opcion.localeCompare("bloques")){
      textoOpcion="";
    }else if(!opcion.localeCompare("sesiones")){
      textoOpcion="";
    }

    if(BI){
      document.getElementById('BI').innerHTML = "Bloque I - LA HISTORIA COMO MAGISTER VITAE";
    }else{
      if(s1){document.getElementById('s1').innerHTML = "Sesión 1. Memoria e ingenuidad.";}
      if(s2){document.getElementById('s2').innerHTML = "Sesión 2. Guerra y sociedad patriarcal.";}
      if(s3){document.getElementById('s3').innerHTML = "Sesión 3. La democracia velada.";}
    }
    if(BII){
      document.getElementById('BII').innerHTML = "Bloque II - LENGUAJE E IGUALDAD";
    }else{
      if(s4){document.getElementById('s4').innerHTML = "Sesión 4. La lengua como reflejo de la realidad.";}
      if(s5){document.getElementById('s5').innerHTML = "Sesión 5. ¿Un matriarcado oculto?";}
      if(s6){document.getElementById('s6').innerHTML = "Sesión 6. Una igualdad que perpetúa el modelo patriarcal.";}
    }
    if(BIII){
      document.getElementById('BIII').innerHTML = "Bloque III - LA INCALCULABLE HERENCIA DE GRECIA Y ROMA";
    }else{
      if(s7){document.getElementById('s7').innerHTML = "Sesión 7. Una deuda impagable.";}
      if(s8){document.getElementById('s8').innerHTML = "Sesión 8. Humanismo y educación.";}
      if(s9){document.getElementById('s9').innerHTML = "Sesión 9. Un lado oscuro: el destierro social de la mujer.";}
    }
    if(BIV){
      document.getElementById('BIV').innerHTML = "Bloque IV - LA GLOBALIZACIÓN DE LAS IDEAS";
    }else{
      if(s10){document.getElementById('s10').innerHTML = "Sesión 10. La mentalidad de la ciudad-estado.";}
      if(s11){document.getElementById('s11').innerHTML = "Sesión 11. La fragilidad de la memoria y el principio del fin.";}
      if(s12){document.getElementById('s12').innerHTML = "Sesión 12. Hacia la edad media.";}
    }
    if(BI & BII & BII & BIV){
      document.getElementById('opcion').innerHTML = "Curso completo";
      document.getElementById('BI').innerHTML = "";
      document.getElementById('BII').innerHTML = "";
      document.getElementById('BIII').innerHTML = "";
      document.getElementById('BIV').innerHTML = "";
    }else{
      document.getElementById('opcion').innerHTML = textoOpcion;
    }
    document.getElementById('precio').innerHTML = precio;

    //console.log("Variables:", curso, bloques, sesiones);

    // Create a Stripe client.
    var stripe = Stripe('pk_live_R8jVDlvC152FBs3dj7JlNasM', {betas: ['checkout_beta_3']});
    var checkoutButton = document.getElementById('checkout-button');
    var elementos;
    if(curso==1){
      elementos={};
      elementos.items = [{sku: 'sku_E7JTP3BxBmKj2O', quantity: 1}];
    }else{
      if(bloques > 0 & sesiones == 0){
        elementos={};
        elementos.items = [{sku: 'sku_E7RsDROdydhh9I', quantity: bloques}];
      }
      if(bloques == 0 & sesiones > 0){
        elementos={};
        elementos.items = [{sku: 'sku_E7RtW31ubL2uBz', quantity: sesiones}];
      }
      if(bloques > 0 & sesiones > 0){
        elementos={};
        elementos.items= [{sku: 'sku_E7RtW31ubL2uBz', quantity: sesiones},{sku: 'sku_E7RsDROdydhh9I', quantity: bloques}];
      }
    }
    checkoutButton.addEventListener('click', function (){
      stripe.redirectToCheckout({
            items: elementos.items,
            successUrl: 'https://fragilidadmemoria.es/inscripcion/inscripcion-completada.html',
            cancelUrl: 'https://fragilidadmemoria.es/inscripcion/inscripcion-cancelada.html',
          })
          .then(function (result) {
            if (result.error) {
              var displayError = document.getElementById('error-message');
              displayError.textContent = result.error.message;
            }
          });
    });
  }
});

function calcularPrecio(urlParams){
    var precio = 0;
    var curso=0;
    var bloques=0;
    var sesiones=0;

    opcion = urlParams.get('opcion');
    if(!opcion.localeCompare("todo")){
      precio = 300;
      curso=1;
    }else{
        if(urlParams.has('BI')==true){
          precio = precio+100;bloques=bloques+1;
        }else{
          if(urlParams.has('s1')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s2')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s3')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s1')==true && urlParams.has('s2')==true && urlParams.has('s3')==true){precio = precio-20;sesiones=sesiones-3;bloques=bloques+1;}
        }
        if(urlParams.has('BII')==true){
          precio = precio+100;bloques=bloques+1;
        }else{
          if(urlParams.has('s4')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s5')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s6')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s4')==true && urlParams.has('s5')==true && urlParams.has('s6')==true){precio = precio-20;sesiones=sesiones-3;bloques=bloques+1;}
        }

        if(urlParams.has('BIII')==true){
          precio = precio+100;bloques=bloques+1;
        }else{
          if(urlParams.has('s7')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s8')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s9')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s7')==true && urlParams.has('s8')==true && urlParams.has('s9')==true){precio = precio-20;sesiones=sesiones-3;bloques=bloques+1;}
        }
        if(urlParams.has('BIV')==true){
          precio = precio+100;bloques=bloques+1;
        }else{
          if(urlParams.has('s10')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s11')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s12')==true) {precio = precio+40;sesiones=sesiones+1;}
          if(urlParams.has('s10')==true && urlParams.has('s11')==true && urlParams.has('s12')==true){precio = precio-20;sesiones=sesiones-3;bloques=bloques+1;}
        }
        if(bloques==4){precio=300;curso=1;bloques=0;sesiones=0;}
    }
    return [precio,curso, bloques, sesiones];
}
