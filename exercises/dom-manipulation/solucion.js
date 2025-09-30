// ============================================
// 1. SELECCIÓN DE ELEMENTOS
// ============================================

// Usando getElementById()
const tituloPrincipal = document.getElementById('titulo-principal');
const subtitulo = document.getElementById('subtitulo');
const formulario = document.getElementById('formulario-tarea');
const listaTareas = document.getElementById('lista-tareas');
const estadisticas = document.getElementById('estadisticas');
const mensajeVacio = document.getElementById('mensaje-vacio');
const herramientas = document.getElementById('herramientas');
const totalTareasSpan = document.getElementById('total-tareas');
const tareasCompletadasSpan = document.getElementById('tareas-completadas');
const tareasPendientesSpan = document.getElementById('tareas-pendientes');

// Usando querySelector()
const inputTarea = document.querySelector('#input-tarea');
const selectPrioridad = document.querySelector('#prioridad-tarea');
const btnAgregar = document.querySelector('.btn-agregar');
const btnModoOscuro = document.querySelector('#btn-modo-oscuro');
const btnEliminarCompletadas = document.querySelector('#btn-eliminar-completadas');
const btnDuplicarPrimera = document.querySelector('#btn-duplicar-primera');
const btnMoverArriba = document.querySelector('#btn-mover-arriba');

// Usando querySelectorAll()
const botonesControl = document.querySelectorAll('.controles .btn');
const btnMostrarTodas = document.querySelector('#btn-mostrar-todas');
const btnMostrarCompletadas = document.querySelector('#btn-mostrar-completadas');
const btnMostrarPendientes = document.querySelector('#btn-mostrar-pendientes');

// Variable para contar IDs únicos
let contadorId = 0;

// ============================================
// 2. FUNCIONES AUXILIARES
// ============================================

/**
 * Actualiza las estadísticas de tareas
 * Usa: textContent, getElementsByClassName, classList.contains
 */
function actualizarEstadisticas() {
    // Usando getElementsByClassName() para obtener todas las tareas
    const todasLasTareas = document.getElementsByClassName('tarea-item');
    const total = todasLasTareas.length;
    
    let completadas = 0;
    // Iteramos y usamos classList.contains() para verificar si están completadas
    for (let tarea of todasLasTareas) {
        if (tarea.classList.contains('completada')) {
            completadas++;
        }
    }
    
    const pendientes = total - completadas;
    
    // Usando textContent para actualizar los valores
    totalTareasSpan.textContent = total;
    tareasCompletadasSpan.textContent = completadas;
    tareasPendientesSpan.textContent = pendientes;
    
    // Mostrar/ocultar secciones usando classList.toggle()
    if (total > 0) {
        estadisticas.classList.remove('oculto');
        herramientas.classList.remove('oculto');
        mensajeVacio.classList.add('oculto');
    } else {
        estadisticas.classList.add('oculto');
        herramientas.classList.add('oculto');
        mensajeVacio.classList.remove('oculto');
    }
}

/**
 * Crea una nueva tarea en el DOM
 * Usa: createElement, appendChild, setAttribute, classList.add
 */
function crearTarea(textoTarea, prioridad, insertarAlPrincipio = false) {
    // Usando createElement() para crear elementos
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const spanTexto = document.createElement('span');
    const spanPrioridad = document.createElement('span');
    const btnEliminar = document.createElement('button');
    
    // Usando setAttribute() para establecer atributos
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('class', 'tarea-checkbox');
    
    // Asignar un ID único usando setAttribute() y data-id
    contadorId++;
    li.setAttribute('data-id', contadorId);
    
    // Usando classList.add() para añadir clases
    li.classList.add('tarea-item');
    li.classList.add(`prioridad-${prioridad}`);
    
    spanTexto.classList.add('tarea-texto');
    spanPrioridad.classList.add('tarea-prioridad');
    btnEliminar.classList.add('btn-eliminar');
    
    // Usando textContent para establecer el contenido
    spanTexto.textContent = textoTarea;
    spanPrioridad.textContent = prioridad;
    btnEliminar.textContent = 'Eliminar';
    
    // Usando appendChild() para añadir elementos
    li.appendChild(checkbox);
    li.appendChild(spanTexto);
    li.appendChild(spanPrioridad);
    li.appendChild(btnEliminar);
    
    // Event listener para el checkbox (usa classList.toggle)
    checkbox.addEventListener('change', function(e) {
        // Usando event.stopPropagation() para evitar propagación
        e.stopPropagation();
        // Usando classList.toggle() para alternar la clase completada
        li.classList.toggle('completada');
        actualizarEstadisticas();
    });
    
    // Event listener para eliminar
    btnEliminar.addEventListener('click', function(e) {
        e.stopPropagation();
        eliminarTarea(li);
    });
    
    // Event listener para editar con dobleclick
    li.addEventListener('dblclick', function() {
        editarTarea(li, spanTexto);
    });
    
    // Usando insertBefore() si es prioridad alta o appendChild() si no
    if (insertarAlPrincipio && prioridad === 'alta') {
        // Usando firstElementChild para obtener el primer elemento
        const primeraTarea = listaTareas.firstElementChild;
        if (primeraTarea) {
            listaTareas.insertBefore(li, primeraTarea);
        } else {
            listaTareas.appendChild(li);
        }
    } else {
        listaTareas.appendChild(li);
    }
    
    actualizarEstadisticas();
}

/**
 * Elimina una tarea del DOM
 * Usa: removeChild, parentElement, innerText
 */
function eliminarTarea(tareaElemento) {
    // Usando innerText para mostrar en consola antes de eliminar
    const textoTarea = tareaElemento.querySelector('.tarea-texto').innerText;
    console.log(`Eliminando tarea: "${textoTarea}"`);
    
    // Usando parentElement y removeChild()
    const padre = tareaElemento.parentElement;
    padre.removeChild(tareaElemento);
    
    actualizarEstadisticas();
}

/**
 * Edita una tarea existente
 * Usa: textContent, getAttribute
 */
function editarTarea(tareaElemento, spanTexto) {
    const nuevoTexto = prompt('Editar tarea:', spanTexto.textContent);
    if (nuevoTexto && nuevoTexto.trim() !== '') {
        spanTexto.textContent = nuevoTexto.trim();
        
        // Usando getAttribute() para obtener el ID
        const tareaId = tareaElemento.getAttribute('data-id');
        console.log(`Tarea ${tareaId} editada`);
    }
}

/**
 * Filtra las tareas según su estado
 * Usa: getElementsByClassName, classList.contains, classList.add, classList.remove
 */
function filtrarTareas(filtro) {
    // Usando getElementsByClassName()
    const todasLasTareas = document.getElementsByClassName('tarea-item');
    
    for (let tarea of todasLasTareas) {
        // Usando classList.contains() para verificar el estado
        const estaCompletada = tarea.classList.contains('completada');
        
        switch(filtro) {
            case 'todas':
                // Usando classList.remove() para mostrar todas
                tarea.classList.remove('oculto');
                break;
            case 'completadas':
                if (estaCompletada) {
                    tarea.classList.remove('oculto');
                } else {
                    // Usando classList.add() para ocultar
                    tarea.classList.add('oculto');
                }
                break;
            case 'pendientes':
                if (!estaCompletada) {
                    tarea.classList.remove('oculto');
                } else {
                    tarea.classList.add('oculto');
                }
                break;
        }
    }
}

/**
 * Elimina todas las tareas completadas
 * Usa: getElementsByClassName, classList.contains, remove()
 */
function eliminarTodasCompletadas() {
    const todasLasTareas = document.getElementsByClassName('tarea-item');
    const tareasAEliminar = [];
    
    // Primero guardamos las tareas a eliminar en un array
    for (let tarea of todasLasTareas) {
        if (tarea.classList.contains('completada')) {
            tareasAEliminar.push(tarea);
        }
    }
    
    // Usando remove() para eliminar cada tarea
    tareasAEliminar.forEach(tarea => {
        console.log(`Eliminando: ${tarea.querySelector('.tarea-texto').innerText}`);
        tarea.remove();
    });
    
    actualizarEstadisticas();
}

/**
 * Duplica la primera tarea de la lista
 * Usa: firstElementChild, cloneNode, appendChild
 */
function duplicarPrimeraTarea() {
    // Usando firstElementChild para obtener la primera tarea
    const primeraTarea = listaTareas.firstElementChild;
    
    if (primeraTarea) {
        // Usando cloneNode(true) para clonar con todos sus hijos
        const tareaClonada = primeraTarea.cloneNode(true);
        
        // Asignar nuevo ID usando setAttribute()
        contadorId++;
        tareaClonada.setAttribute('data-id', contadorId);
        
        // Quitar la clase completada si la tenía
        tareaClonada.classList.remove('completada');
        const checkbox = tareaClonada.querySelector('.tarea-checkbox');
        checkbox.checked = false;
        
        // Re-asignar event listeners (los clones no copian listeners)
        const btnEliminar = tareaClonada.querySelector('.btn-eliminar');
        btnEliminar.addEventListener('click', function(e) {
            e.stopPropagation();
            eliminarTarea(tareaClonada);
        });
        
        checkbox.addEventListener('change', function(e) {
            e.stopPropagation();
            tareaClonada.classList.toggle('completada');
            actualizarEstadisticas();
        });
        
        const spanTexto = tareaClonada.querySelector('.tarea-texto');
        tareaClonada.addEventListener('dblclick', function() {
            editarTarea(tareaClonada, spanTexto);
        });
        
        // Usando appendChild() para añadir al final
        listaTareas.appendChild(tareaClonada);
        
        actualizarEstadisticas();
        console.log('Primera tarea duplicada');
    } else {
        alert('No hay tareas para duplicar');
    }
}

/**
 * Mueve la primera tarea al final
 * Usa: firstElementChild, appendChild
 */
function moverPrimeraAlFinal() {
    // Usando firstElementChild
    const primeraTarea = listaTareas.firstElementChild;
    
    if (primeraTarea) {
        // Usando appendChild() - si el elemento ya existe, lo mueve
        listaTareas.appendChild(primeraTarea);
        console.log('Primera tarea movida al final');
    } else {
        alert('No hay tareas para mover');
    }
}

/**
 * Muestra información sobre la navegación del DOM
 * Usa: children, childNodes, nextElementSibling, previousElementSibling, lastElementChild
 */
function mostrarInfoNavegacion() {
    console.log('=== INFORMACIÓN DE NAVEGACIÓN ===');
    
    // Usando children para contar elementos hijos
    console.log(`Total de tareas (children): ${listaTareas.children.length}`);
    
    // Usando childNodes para mostrar todos los nodos
    console.log(`Total de nodos (childNodes): ${listaTareas.childNodes.length}`);
    console.log('Nodos hijos:', listaTareas.childNodes);
    
    // Información sobre la primera tarea
    const primera = listaTareas.firstElementChild;
    if (primera) {
        console.log('Primera tarea:', primera.querySelector('.tarea-texto').textContent);
        
        // Usando nextElementSibling
        const siguiente = primera.nextElementSibling;
        if (siguiente) {
            console.log('Siguiente a la primera:', siguiente.querySelector('.tarea-texto').textContent);
        }
    }
    
    // Información sobre la última tarea usando lastElementChild
    const ultima = listaTareas.lastElementChild;
    if (ultima) {
        console.log('Última tarea:', ultima.querySelector('.tarea-texto').textContent);
        
        // Usando previousElementSibling
        const anterior = ultima.previousElementSibling;
        if (anterior) {
            console.log('Anterior a la última:', anterior.querySelector('.tarea-texto').textContent);
        }
    }
}

/**
 * Cambia la prioridad de una tarea aleatoria
 * Usa: classList.replace
 */
function cambiarPrioridadAleatoria() {
    const todasLasTareas = document.getElementsByClassName('tarea-item');
    if (todasLasTareas.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * todasLasTareas.length);
        const tareaAleatoria = todasLasTareas[indiceAleatorio];
        
        const prioridades = ['baja', 'media', 'alta'];
        let prioridadActual;
        
        // Detectar prioridad actual
        for (let p of prioridades) {
            if (tareaAleatoria.classList.contains(`prioridad-${p}`)) {
                prioridadActual = p;
                break;
            }
        }
        
        // Elegir nueva prioridad
        const nuevaPrioridad = prioridades[Math.floor(Math.random() * prioridades.length)];
        
        // Usando classList.replace() para cambiar la clase de prioridad
        tareaAleatoria.classList.replace(`prioridad-${prioridadActual}`, `prioridad-${nuevaPrioridad}`);
        
        // Actualizar el texto de prioridad
        const spanPrioridad = tareaAleatoria.querySelector('.tarea-prioridad');
        spanPrioridad.textContent = nuevaPrioridad;
        
        console.log(`Prioridad cambiada de ${prioridadActual} a ${nuevaPrioridad}`);
    }
}

// ============================================
// 3. EVENT LISTENERS
// ============================================

/**
 * Agregar nueva tarea al enviar el formulario
 * Usa: addEventListener('submit'), preventDefault, getAttribute, removeAttribute
 */
formulario.addEventListener('submit', function(e) {
    // Usando preventDefault() para evitar el envío del formulario
    e.preventDefault();
    
    const textoTarea = inputTarea.value.trim();
    
    if (textoTarea === '') {
        alert('Por favor escribe una tarea');
        return;
    }
    
    // Usando getAttribute() para obtener la prioridad seleccionada
    const prioridad = selectPrioridad.value;
    
    // Crear la tarea (insertar al principio si es alta prioridad)
    crearTarea(textoTarea, prioridad, prioridad === 'alta');
    
    // Limpiar el formulario
    inputTarea.value = '';
    
    // Ejemplo de uso de removeAttribute (aunque disabled no está puesto inicialmente)
    // Si el input estuviera deshabilitado, esto lo habilitaría
    if (inputTarea.hasAttribute('disabled')) {
        inputTarea.removeAttribute('disabled');
    }
    
    mostrarInfoNavegacion();
});

/**
 * Mostrar contador de caracteres mientras se escribe
 * Usa: addEventListener('input'), textContent
 */
inputTarea.addEventListener('input', function(e) {
    const longitudActual = e.target.value.length;
    const maxCaracteres = 100;
    
    // Mostrar en consola (en una aplicación real iría en un span visible)
    if (longitudActual > 0) {
        console.log(`Caracteres: ${longitudActual}/${maxCaracteres}`);
    }
    
    // Limitar caracteres
    if (longitudActual > maxCaracteres) {
        e.target.value = e.target.value.substring(0, maxCaracteres);
    }
});

/**
 * Permitir agregar tarea con Enter
 * Usa: addEventListener('keydown')
 */
inputTarea.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        // El formulario ya maneja el submit, pero podríamos hacer algo adicional
        console.log('Enter presionado - agregando tarea');
    }
});

/**
 * Cambiar el select de prioridad
 * Usa: addEventListener('change')
 */
selectPrioridad.addEventListener('change', function(e) {
    console.log(`Prioridad seleccionada: ${e.target.value}`);
});

/**
 * Botón de cambiar tema
 * Usa: addEventListener('click'), classList.toggle
 */
btnModoOscuro.addEventListener('click', function() {
    // Usando classList.toggle() en el body para cambiar el tema
    document.body.classList.toggle('modo-oscuro');
    
    // Verificar si está activo usando classList.contains()
    if (document.body.classList.contains('modo-oscuro')) {
        console.log('Modo oscuro activado');
        this.textContent = 'Tema Claro';
    } else {
        console.log('Modo claro activado');
        this.textContent = 'Tema Oscuro';
    }
});

/**
 * Botón eliminar todas las completadas
 * Usa: addEventListener('click')
 */
btnEliminarCompletadas.addEventListener('click', eliminarTodasCompletadas);

/**
 * Botones de filtros
 * Usa: addEventListener('click'), event.target
 */
btnMostrarTodas.addEventListener('click', function(e) {
    console.log('Mostrando todas las tareas');
    filtrarTareas('todas');
});

btnMostrarCompletadas.addEventListener('click', function(e) {
    console.log('Mostrando solo completadas');
    filtrarTareas('completadas');
});

btnMostrarPendientes.addEventListener('click', function(e) {
    console.log('Mostrando solo pendientes');
    filtrarTareas('pendientes');
});

/**
 * Botón duplicar primera tarea
 * Usa: addEventListener('click')
 */
btnDuplicarPrimera.addEventListener('click', duplicarPrimeraTarea);

/**
 * Botón mover primera al final
 * Usa: addEventListener('click')
 */
btnMoverArriba.addEventListener('click', moverPrimeraAlFinal);

// ============================================
// 4. INICIALIZACIÓN
// ============================================

/**
 * Configuración inicial al cargar la página
 * Usa: innerHTML, textContent
 */
function inicializar() {
    // Usando innerHTML para mostrar mensaje de bienvenida con formato HTML
    subtitulo.innerHTML = '¡Bienvenido! Organiza tus <strong>actividades</strong> diarias de forma <em>eficiente</em>';
    
    // Actualizar estadísticas iniciales
    actualizarEstadisticas();
    
    // Agregar algunas tareas de ejemplo para probar
    // crearTarea('Completar ejercicio de DOM', 'alta');
    // crearTarea('Revisar documentación de MDN', 'media');
    // crearTarea('Practicar JavaScript', 'baja');
    
    console.log('Aplicación de Gestor de Tareas iniciada');
    console.log('Todos los métodos del DOM han sido implementados');
}

// Ejecutar inicialización cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inicializar);
} else {
    inicializar();
}

// Advertencia antes de cerrar si hay tareas pendientes
window.addEventListener('beforeunload', function(e) {
    const todasLasTareas = document.getElementsByClassName('tarea-item');
    let hayPendientes = false;
    
    for (let tarea of todasLasTareas) {
        if (!tarea.classList.contains('completada')) {
            hayPendientes = true;
            break;
        }
    }
    
    if (hayPendientes && todasLasTareas.length > 0) {
        e.preventDefault();
        e.returnValue = '¿Seguro que quieres salir? Tienes tareas pendientes.';
        return e.returnValue;
    }
});

// ============================================
// FUNCIONES BONUS ADICIONALES
// ============================================

// Función para demostrar el uso de hasAttribute
function verificarAtributos() {
    const primeraTarea = listaTareas.firstElementChild;
    if (primeraTarea) {
        // Usando hasAttribute()
        if (primeraTarea.hasAttribute('data-id')) {
            console.log(`La primera tarea tiene ID: ${primeraTarea.getAttribute('data-id')}`);
        }
    }
}

// Llamar cada 10 segundos para demostrar navegación
setInterval(function() {
    const todasLasTareas = document.getElementsByClassName('tarea-item');
    if (todasLasTareas.length > 0) {
        verificarAtributos();
    }
}, 10000);

console.log('✅ Script cargado correctamente - Todos los métodos del DOM implementados');