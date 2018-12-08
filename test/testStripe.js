//var stripe = Stripe('pk_test_im4eLqtDCrJlVXzTg6qcTQZg');
var stripe = Stripe('pk_test_im4eLqtDCrJlVXzTg6qcTQZg', {betas: ['checkout_beta_3']});
function cargar(){
  // Create a Stripe client.
  var checkoutButton = document.getElementById('checkout-button');
  console.log("Pagar presionado");
  checkoutButton.addEventListener('click', pagar(1,1,1));
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


/*
// Create an instance of Elements.
var elements = stripe.elements();



function cargarTarjeta(){

  // Custom styling can be passed to options when creating an Element.
  // (Note that this demo uses a wider set of styles than the guide below.)
  var style = {
    base: {
      color: '#32325d',
      //lineHeight: '18px',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  };
  // Create an instance of the card Element.
  var card = elements.create('card', {style: style});

  // Add an instance of the card Element into the `card-element` <div>.
  card.mount('#card-element');
  // Handle real-time validation errors from the card Element.
  card.addEventListener('change', function(event) {
    var displayError = document.getElementById('card-errors');
    if (event.error) {
      displayError.textContent = event.error.message;
    } else {
      displayError.textContent = '';
    }
  });
  // Handle form submission.
  var form = document.getElementById('payment-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    stripe.createToken(card).then(function(result) {
      if (result.error) {
        // Inform the user if there was an error.
        var errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        // Send the token to your server.
        stripeTokenHandler(result.token);
      }
    });
  });

}



// Submit the form with the token ID.
function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}

function enviarCargo(){
  importClass("XMLHttpRequest");
  var http = new XMLHttpRequest();
  var url = "https://api.stripe.com/v1/charges",
      params = "amount=999&currency=eur&description=\"Prueba_pago\"&source=tok_visa",
      username = "",
      password = "";
  http.open('POST', url, true, username, password);
  http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  http.setRequestHeader("Content-Length", params.length)
  http.send(params);
  alert(http.responseText);
}
*/
