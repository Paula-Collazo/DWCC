Debes crear el archivo `script.js` que implemente **todas** las siguientes funcionalidades. Cada funcionalidad debe usar los métodos específicos indicados de los apuntes:

### 1. Selección de elementos
- [ ] Usar `getElementById()` para obtener: el título principal, el formulario, la lista de tareas, y las estadísticas
- [ ] Usar `querySelector()` para obtener: el input de tarea, el select de prioridad, y el botón de agregar
- [ ] Usar `querySelectorAll()` para obtener: todos los botones de la sección de controles
- [ ] Usar `getElementsByClassName()` para obtener todos los elementos con clase 'tarea-item'

### 2. Modificación de contenido
- [ ] Usar `textContent` para actualizar los contadores de estadísticas (total, completadas, pendientes)
- [ ] Usar `innerHTML` para mostrar un mensaje de bienvenida personalizado en el subtítulo cuando se carga la página (debe incluir etiquetas HTML como `<strong>`)
- [ ] Usar `innerText` para leer el texto de una tarea antes de eliminarla (mostrar en consola)

### 3. Manipulación de atributos
- [ ] Usar `getAttribute()` para obtener el valor de prioridad del select al crear una tarea
- [ ] Usar `setAttribute()` para añadir un atributo `data-id` único a cada tarea creada
- [ ] Usar `hasAttribute()` para verificar si un checkbox está marcado antes de cambiar el estado
- [ ] Usar `removeAttribute()` para quitar el atributo `disabled` del input después de agregar una tarea

### 4. Manipulación de clases CSS
- [ ] Usar `classList.add()` para añadir la clase 'completada' cuando se marca una tarea
- [ ] Usar `classList.remove()` para quitar la clase 'completada' cuando se desmarca una tarea
- [ ] Usar `classList.toggle()` para el botón de cambiar tema (clase 'modo-oscuro' en el body)
- [ ] Usar `classList.contains()` para verificar si una tarea está completada antes de filtrar
- [ ] Usar `classList.replace()` para cambiar entre clases de prioridad (alta, media, baja)
- [ ] Usar `classList.toggle()` para mostrar/ocultar las secciones de estadísticas y herramientas cuando hay tareas

### 5. Creación y eliminación de elementos
- [ ] Usar `createElement()` para crear elementos `<li>` para cada nueva tarea
- [ ] Usar `appendChild()` para añadir la nueva tarea a la lista
- [ ] Usar `insertBefore()` para insertar una tarea urgente (prioridad alta) al principio de la lista
- [ ] Usar `removeChild()` para eliminar una tarea específica cuando se hace click en su botón de eliminar
- [ ] Usar `remove()` para eliminar todas las tareas completadas
- [ ] Usar `cloneNode()` para duplicar la primera tarea (botón "Duplicar Primera Tarea")

### 6. Navegación por el DOM
- [ ] Usar `parentElement` para acceder al elemento padre de un botón de eliminar y obtener la tarea completa
- [ ] Usar `children` para contar cuántos elementos tiene la lista de tareas
- [ ] Usar `childNodes` para mostrar en consola todos los nodos hijos (incluyendo texto) de un elemento
- [ ] Usar `firstElementChild` para obtener la primera tarea de la lista
- [ ] Usar `lastElementChild` para obtener la última tarea de la lista
- [ ] Usar `nextElementSibling` para navegar entre tareas
- [ ] Usar `previousElementSibling` para navegar hacia atrás entre tareas

### 7. Eventos
- [ ] Usar `addEventListener('submit')` en el formulario para agregar nuevas tareas
- [ ] Usar `addEventListener('click')` en los checkboxes para marcar/desmarcar tareas
- [ ] Usar `addEventListener('click')` en los botones de eliminar tareas individuales
- [ ] Usar `addEventListener('click')` en el botón de eliminar completadas
- [ ] Usar `addEventListener('change')` en el select de prioridad para actualizar la prioridad en tiempo real
- [ ] Usar `addEventListener('input')` en el input de texto para mostrar el conteo de caracteres
- [ ] Usar `addEventListener('dblclick')` en una tarea para editarla
- [ ] Usar `addEventListener('keydown')` para permitir agregar tareas con Enter
- [ ] Usar `event.preventDefault()` para evitar el envío del formulario
- [ ] Usar `event.target` para identificar qué elemento disparó el evento
- [ ] Usar `event.stopPropagation()` para evitar que el click en el checkbox dispare otros eventos

### 8. Funcionalidades adicionales
- [ ] Implementar filtros (mostrar todas, completadas, pendientes) usando los métodos de manipulación de clases
- [ ] Implementar el botón "Mover Primera al Final" usando métodos de navegación y manipulación del DOM
- [ ] Actualizar las estadísticas en tiempo real cada vez que cambia la lista
- [ ] Implementar persistencia básica: guardar mensaje de advertencia si el usuario intenta cerrar con tareas pendientes usando eventos

### 9. Estructura del código
- [ ] Código limpio y bien comentado explicando qué métodos del DOM se usan
- [ ] Funciones reutilizables para operaciones comunes
- [ ] Manejo adecuado de casos edge (lista vacía, prioridades, etc.)