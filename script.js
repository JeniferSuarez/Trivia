const preguntas = [
    {
        pregunta: "¿Cuál es el lenguaje que hace que una página web sea interactiva?",
        opciones: ["HTML", "CSS", "JavaScript", "Python"],
        respuesta: "JavaScript"
    }
];

let preguntaActual = 0;
const preguntaTexto = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");
const mensaje = document.getElementById("mensaje");

function cargarPregunta() {
    const pregunta = preguntas[preguntaActual];
    preguntaTexto.textContent = pregunta.pregunta;
    opcionesDiv.innerHTML = "";
    mensaje.textContent = "";

    pregunta.opciones.forEach((opcion) => {
        const button = document.createElement("button");
        button.textContent = opcion;
        button.onclick = () => verificarRespuesta(button, opcion, pregunta.respuesta);
        opcionesDiv.appendChild(button);
    });
}

function verificarRespuesta(boton, seleccion, respuestaCorrecta) {
    if (seleccion === respuestaCorrecta) {
        boton.classList.add("correcto");
        mensaje.textContent = "✅ ¡Respuesta correcta!";
        mensaje.style.color = "green";
    } else {
        boton.classList.add("incorrecto");
        mensaje.textContent = "❌ Respuesta incorrecta. Inténtalo de nuevo.";
        mensaje.style.color = "red";
    }
}

cargarPregunta();
