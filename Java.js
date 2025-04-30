    document.addEventListener('DOMContentLoaded', function() {
    const btnEnviar = document.getElementById('btnEnviar');
    const nombreJugador = document.getElementById('nombreJugador');
    const contenedorNivel = document.querySelector('.contenedor-nivel'); // Contenedor de niveles
  
    btnEnviar.addEventListener('click', function() {
      const nombre = nombreJugador.value.trim();
  
      if (nombre === "") {
        alert("Por favor, escribe tu nombre para continuar.");
      } else {
        alert(`¡Hola, ${nombre}! Tu nombre ha sido registrado. Ahora puedes escoger tu nivel para jugar.`);
  
        // Cuando le da aceptar a la alerta, hacemos scroll hasta el contenedor de niveles
        contenedorNivel.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  // Esperar a que todo el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
  
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío real del formulario
        alert('¡Tu correo ha sido registrado! Ahora puedes comenzar a jugar. 🎉');
        // Si quieres redirigir automáticamente después de la alerta, descomenta esta línea:
        // window.location.href = 'juego.html';
      });
    }
  });
  
  