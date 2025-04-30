document.addEventListener('DOMContentLoaded', function() {
    let preguntas = document.querySelectorAll('.pregunta');
    let botonesSiguiente = document.querySelectorAll('.btn-siguiente');
    let opciones = document.querySelectorAll('.opcion');
    let btnFinalizar = document.querySelector('.btn-finalizar');
    let puntaje = 0;
    let preguntaActual = 0;
  
    function mostrarPregunta(index) {
      preguntas.forEach((pregunta, i) => {
        pregunta.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function deshabilitarOpciones(preguntaDiv) {
      const botones = preguntaDiv.querySelectorAll('.opcion');
      botones.forEach(boton => {
        boton.disabled = true;
      });
    }
  
    opciones.forEach(opcion => {
      opcion.addEventListener('click', function() {
        const esCorrecto = this.getAttribute('data-correcto') === 'true';
        const preguntaDiv = this.closest('.pregunta');
        const mensaje = preguntaDiv.querySelector('.mensaje');
        const btnSiguiente = preguntaDiv.querySelector('.btn-siguiente');
  
        if (esCorrecto) {
          mensaje.textContent = '¡Respuesta correcta!';
          mensaje.style.color = 'green';
          puntaje++;
        } else {
          mensaje.textContent = 'Respuesta incorrecta';
          mensaje.style.color = 'red';
        }
  
        deshabilitarOpciones(preguntaDiv);
        if (btnSiguiente) {
          btnSiguiente.style.display = 'block';
        }
      });
    });
  
    botonesSiguiente.forEach(boton => {
      boton.addEventListener('click', function() {
        preguntaActual++;
        if (preguntaActual < preguntas.length) {
          mostrarPregunta(preguntaActual);
        }
      });
    });
  
    if (btnFinalizar) {
      btnFinalizar.addEventListener('click', function() {
        alert('¡Trivia finalizada! Tu puntaje fue: ' + puntaje + ' de ' + preguntas.length);
        window.location.href = 'index.html'; // Vuelve al inicio
      });
    }
  
    mostrarPregunta(preguntaActual);
  });
  