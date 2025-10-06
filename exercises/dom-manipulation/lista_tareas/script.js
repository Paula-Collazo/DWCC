// 1. SELECCIÓN DE ELEMENTOS
// Usa getElementById, querySelector, querySelectorAll, getElementsByClassName

const tituloPrincipal = document.getElementById("titulo-principal");
const formulario = document.getElementById("formulario-section");
const tareas = document.getElementById("lista-section");
const estadísticas = document.getElementById("estadisticas");

const inputTarea = document.querySelector("#input-tarea");
const select = document.querySelector("#prioridad-tarea");
const botonAgregar = document.querySelector(".btn-agregar");


const botones = document.querySelectorAll(".boton");



// 2. FUNCIONES AUXILIARES
// Función para crear una nueva tarea (usa createElement, appendChild, setAttribute)


// Función para actualizar estadísticas (usa textContent)


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