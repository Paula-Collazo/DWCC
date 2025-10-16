// 1. SELECCIÓN DE ELEMENTOS
// Usa getElementById, querySelector, querySelectorAll, getElementsByClassName

const tituloPrincipal = document.getElementById("titulo-principal");
const formulario = document.getElementById("formulario-tarea");
const listaTareas = document.getElementById("lista-tareas");
const estadisticas = document.getElementById("estadisticas");

const bntMostrarTodas = document.getElementById("btn-mostrar-todas");
const bntMostrarCompletadas = document.getElementById("btn-mostrar-completadas");
const bntMostrarPendientes = document.getElementById("btn-mostrar-pendientes");

const inputTarea = document.querySelector("#input-tarea");
const select = document.querySelector("#prioridad-tarea");
const botonAgregar = document.querySelector(".btn-agregar");

const botones = document.querySelectorAll(".boton");
const tarea = document.getElementsByClassName("tarea-item");

// 2. FUNCIONES AUXILIARES
// Función para crear una nueva tarea (usa createElement, appendChild, setAttribute)

function crearNuevaTarea(textoTarea, prioridad) {
  const liTarea = document.createElement("li");
  const checkbox = document.createElement("input");
  const spanTexto = document.createElement("span");
  const spanPrioridad = document.createElement("span");
  const btnEliminar = document.createElement("button");

  checkbox.setAttribute("type", "checkbox");

  liTarea.classList.add("tarea-item");
  checkbox.classList.add("tarea-checkbox");
  spanTexto.classList.add("tarea-texto");
  spanPrioridad.classList.add("tarea-prioridad");
  btnEliminar.classList.add("btn-eliminar");

  spanTexto.textContent = textoTarea;
  spanPrioridad.textContent = prioridad;
  btnEliminar.textContent = "eliminar";

  liTarea.appendChild(checkbox);
  liTarea.appendChild(spanTexto);
  liTarea.appendChild(spanPrioridad);
  liTarea.appendChild(btnEliminar);

  listaTareas.appendChild(liTarea);

  checkbox.addEventListener("change", (e) => {
    e.stopPropagation();
    liTarea.classList.toggle("completada");
    actualizarEstadisticas()
  });

  btnEliminar.addEventListener("click", (e) => {
    e.stopPropagation();
    liTarea.remove();
    actualizarEstadisticas()
  });
}

function filtrarTareas(filtro) {
  estadisticas.classList.remove("oculto");

  const todasLasTareas = document.getElementsByClassName("tarea-item");

  for (let tarea of todasLasTareas) {
    const estaCompletada = tarea.classList.contains("completada");
    switch (filtro) {
      case "todas":
        tarea.classList.remove("oculto");
        break;
      case "completadas":
        if (estaCompletada) {
          tarea.classList.remove("oculto");
        } else {
          tarea.classList.add("oculto");
        }
        break;
      case "pendientes":
        if (!estaCompletada) {
          tarea.classList.remove("oculto");
        } else {
          tarea.classList.add("oculto");
        }
        break;
    }
  };
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const textoTarea = inputTarea.value.trim();
  const prioridad = select.value;
  crearNuevaTarea(textoTarea, prioridad);
  actualizarEstadisticas();

});

bntMostrarTodas.addEventListener("click", (e) => {
  e.preventDefault();
  filtrarTareas("todas");
});

bntMostrarCompletadas.addEventListener("click", (e) => {
  e.preventDefault();
  filtrarTareas("completadas");
});

bntMostrarPendientes.addEventListener("click", (e) => {
  e.preventDefault();
  filtrarTareas("pendientes");
});
// Función para actualizar estadísticas (usa textContent)

function actualizarEstadisticas() {
  const containerTotal = document.getElementById("total-tareas");
  const containerCompletadas = document.getElementById("tareas-completadas");
  const containerPendientes = document.getElementById("tareas-pendientes");

  containerTotal.textContent = document.getElementsByClassName("tarea-item").length;
  containerCompletadas.textContent = document.getElementsByClassName("completada").length
  containerPendientes.textContent = containerTotal.textContent - containerCompletadas.textContent
}

// Función para eliminar tarea (usa removeChild o remove, parentElement)

// Función para marcar/desmarcar tarea (usa classList.add, classList.remove, classList.contains)

// Función para filtrar tareas (usa classList)

// Función para duplicar tarea (usa cloneNode)

// Función para mover tarea (usa appendChild, firstElementChild, lastElementChild)

// 3. EVENT LISTENERS
// Agregar tarea - submit (usa preventDefault)

// Marcar completada - change en checkbox

// Eliminar tarea individual - click

// Eliminar completadas - click

// Cambiar tema - click (usa classList.toggle)

// Filtros - click

// Duplicar primera - click (usa cloneNode)

// Mover primera al final - click

// 4. INICIALIZACIÓN
// Actualizar estadísticas al cargar
// Mostrar mensaje de bienvenida con innerHTML
