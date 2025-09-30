### Parte 1: Selección de elementos
- [ ] Usa `getElementById()` para seleccionar: nombre, profesión, descripción, email, teléfono, ciudad, info-extra, y mensaje-footer
- [ ] Usa `querySelector()` para seleccionar al menos 3 botones
- [ ] Usa `querySelectorAll()` para seleccionar todas las habilidades

### Parte 2: Cambiar textos
- [ ] Botón "Cambiar Nombre": usa `prompt()` para pedir un nombre y actualízalo con `textContent`
- [ ] Botón "Cambiar Profesión": usa `prompt()` y `textContent`
- [ ] Botón "Editar Descripción": usa `prompt()` para cambiar el párrafo de descripción
- [ ] Botón "Cambiar Email": usa `prompt()` para actualizar el email

### Parte 3: Añadir elementos
- [ ] Botón "Añadir Habilidad": usa `createElement()` para crear un nuevo div con clase "habilidad"
- [ ] Usa `appendChild()` para añadirlo a la lista de habilidades
- [ ] El texto de la nueva habilidad debe pedirse con `prompt()`

### Parte 4: Mostrar/Ocultar elementos
- [ ] Botón "Ocultar Habilidades": usa `classList.toggle()` para mostrar/ocultar la lista de habilidades
- [ ] Cambia el texto del botón entre "Ocultar Habilidades" y "Mostrar Habilidades"
- [ ] Botón "Mostrar Información Extra": usa `classList.toggle()` para mostrar/ocultar el div de info-extra

### Parte 5: Cambiar tema
- [ ] Botón "Modo Oscuro": usa `classList.toggle()` en el body para añadir/quitar la clase "tema-oscuro"
- [ ] Cambia el texto del botón entre "Modo Oscuro" y "Modo Claro"

### Parte 6: Modificar estilos y contenido
- [ ] Al cambiar el nombre, añade un mensaje temporal en el footer usando `innerHTML`
- [ ] Usa `setAttribute()` para añadir un atributo `data-usuario` con el nombre al elemento nombre
- [ ] Muestra en consola el valor con `getAttribute()`

### Parte 7: Eliminar elementos
- [ ] Al hacer click en una habilidad, elimínala usando `remove()`
- [ ] Muestra en consola qué habilidad se eliminó usando `textContent`

### Parte 8: Navegación DOM
- [ ] Usa `parentElement` para acceder al contenedor de las habilidades desde una habilidad
- [ ] Usa `children` para contar cuántas habilidades hay y muéstralo en consola
- [ ] Usa `firstElementChild` para cambiar el color de la primera habilidad