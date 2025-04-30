document.addEventListener('DOMContentLoaded', () => {
    const preguntas = document.querySelectorAll('.pregunta');
    let preguntaActual = 0;
    let puntaje = 0;
  
    function mostrarPregunta(index) {
      preguntas.forEach((pregunta, i) => {
        pregunta.style.display = i === index ? 'block' : 'none';
      });
    }
  
    function manejarRespuesta(event) {
      const botonSeleccionado = event.target;
      const esCorrecto = botonSeleccionado.dataset.correcto === 'true';
      const contenedorPregunta = botonSeleccionado.closest('.pregunta');
      const mensaje = contenedorPregunta.querySelector('.mensaje');
      const botones = contenedorPregunta.querySelectorAll('.opcion');
      const botonSiguiente = contenedorPregunta.querySelector('.btn-siguiente');
  
      botones.forEach(boton => boton.disabled = true);
  
      if (esCorrecto) {
        puntaje++;
        mensaje.textContent = '¡Correcto!';
        mensaje.classList.remove('incorrecto');
        mensaje.classList.add('correcto');
      } else {
        const respuestaCorrecta = Array.from(botones).find(boton => boton.dataset.correcto === 'true');
        mensaje.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta.textContent}`;
        mensaje.classList.remove('correcto');
        mensaje.classList.add('incorrecto');
      }
  
      botonSiguiente.style.display = 'block';
    }
  
    function manejarSiguiente(event) {
      preguntaActual++;
      if (preguntaActual < preguntas.length) {
        mostrarPregunta(preguntaActual);
      } else {
        alert(`¡Has completado el cuestionario!\nTu puntaje fue: ${puntaje} de ${preguntas.length} preguntas correctas.`);
        window.location.href = 'index.html';
      }
    }
  
    preguntas.forEach(pregunta => {
      const botones = pregunta.querySelectorAll('.opcion');
      const botonSiguiente = pregunta.querySelector('.btn-siguiente');
  
      botones.forEach(boton => {
        boton.addEventListener('click', manejarRespuesta);
      });
  
      botonSiguiente.addEventListener('click', manejarSiguiente);
    });
  
    mostrarPregunta(preguntaActual);
  });
  