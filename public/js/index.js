/* INIT SMOOTHSCROLL */
$(function() {
	'use strict';
	var scroll = new SmoothScroll('a[href*="#"]');

	window.addEventListener(
		'load',
		function() {
			// Fetch all the forms we want to apply custom Bootstrap validation styles to
			var forms = document.getElementsByClassName('needs-validation');
			// Loop over them and prevent submission
			var validation = Array.prototype.filter.call(forms, function(form) {
				form.addEventListener(
					'submit',
					function(event) {
						if (form.checkValidity() === false) {
							event.preventDefault();
							event.stopPropagation();
						}
						form.classList.add('was-validated');
					},
					false
				);
			});
		},
		false
	);

	/* BOTON ENVIAR */
	$('#btnEnviar').on('click', function(e) {
        e.preventDefault();
		
		var nombre = $('#txtNombre').val();
		var email = $('#txtEmail').val();
		var mensaje = $('#txtMensaje').val();

		var datos = {
			nombre: nombre,
			email: email,
			mensaje: mensaje
		};

		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "http://localhost:3000/sendEmail",
			"method": "POST",
			"headers": {
				"Content-Type": "application/json"
			},
			"processData": false,
			"data": JSON.stringify(datos)
		}

		$.ajax(settings).done(function(response){
			if(response.respuesta) {
				location.reload();
			} else {
				location.reload();
			}
		});
    });
});
