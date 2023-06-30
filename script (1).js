// Obtener la fecha actual
var fecha = new Date();
var año = fecha.getFullYear();

// Actualizar el año en el footer
var footer = document.querySelector('footer');
footer.innerHTML = '&copy; ' + año + ' Hamburguesería deliciosas. Todos los derechos reservados.';

// Manejar el evento de clic en los enlaces de navegación
var enlaces = document.querySelectorAll('nav a');
enlaces.forEach(function(enlace) {
  enlace.addEventListener('click', function(event) {
    event.preventDefault();
    var seccionId = enlace.getAttribute('href').substring(1);
    var seccion = document.getElementById(seccionId);
    seccion.scrollIntoView({ behavior: 'smooth' });
  });
});
