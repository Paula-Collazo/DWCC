// 1. Seleccionar elementos
const nombre = document.getElementById("nombre"); // getElementById
const profesion = document.getElementById("profesion"); // getElementById
const descripción = document.getElementById("descripcion");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const ciudad = document.getElementById("ciudad");
const infoExtra = document.getElementById("info-extra");
const mensajeFooter = document.getElementById("mensaje-footer");
const numHabilidades = document.getElementById("num-habiliodades");

const btnCambiarNombre = document.querySelector("#btn-cambiar-nombre");
const btnCambiarProfesion = document.querySelector("#btn-cambiar-profesion");
const btnAñadirHabilidad = document.querySelector("#btn-añadir-habilidad");
const btnTema = document.querySelector("#btn-tema");
const btnOcultarHabilidad = document.querySelector("#btn-ocultar-habilidades");

//selecionar lista habilidades
const listaHabilidades = document.getElementById("lista-habilidades");
// 2. Función para cambiar el nombre
// usar prompt(), textContent, setAttribute()

function cambiarNombre() {
  const nuevoNombre = prompt("Escribe tu nombre:");
  if (nuevoNombre.trim() !== "") {
    nombre.textContent = nuevoNombre;
    mensajeFooter.textContent = nuevoNombre;
    nombre.setAttribute("data.usuario", nuevoNombre);
    console.log(
      `Nombre almacenado en atributo: ${nombre.getAttribute("data-usuario")}`
    );

    setTimeout(() => {
      mensajeFooter.textContent = "Perfil creado con JavaScript";
    }, 5000);
  }
}

// 3. Función para cambiar la profesión
// usar prompt(), textContent
function cambiarProfesion() {
  const nuevaProfesion = prompt("Escribe tu profesión:");
  if (nuevaProfesion.trim() !== "") {
    profesion.textContent = nuevaProfesion;
  }
}

// 4. Función para editar descripción
// usar prompt(), textContent

// 5. Función para añadir habilidad
// usar createElement(), appendChild(), prompt()

function añadirHabilidad() {
  const nuevaHabilidad = prompt("Escribe una nueva habilidad:");
  if (nuevaHabilidad.trim() !== "") {
    const divHabilidad = document.createElement("div");
    divHabilidad.className = "habilidad";
    divHabilidad.textContent = nuevaHabilidad;
     listaHabilidades.appendChild(divHabilidad);
    inicializarEventosHabilidades();
    actualizarNumeroHabilidades();
}}

function inicializarEventosHabilidades() {
  const todasLasHabilodades = document.querySelectorAll(".habilidad");
  todasLasHabilodades.forEach((habilidad) => {
    habilidad.addEventListener("click", () => {
      habilidad.remove();
      actualizarNumeroHabilidades();
    });
  });
}

// 6. Función para ocultar/mostrar habilidades
// usar classList.toggle()

function cambiarVisibilidadHabilidades() {
  listaHabilidades.classList.toggle("oculto");
  if (listaHabilidades.classList.contains("oculto")) {
    btnOcultarHabilidad.textContent = "Mostrar Habilidades";
  } else {
    btnOcultarHabilidad.textContent = "Ocultar Habilidades";
  }
}

// 7. Función para cambiar tema
// usar classList.toggle() en body
function cambiarTema() {
  document.body.classList.toggle("tema-oscuro");
  if (document.body.classList.contains("tema-oscuro")) {
    btnTema.textContent = "Quitar tema oscuro";
  } else {
    btnTema.textContent = "Tema oscuro";
  }
}

function actualizarNumeroHabilidades() {
  const a = listaHabilidades.children.length;
  numHabilidades.textContent = `Tengo ${a} habilidades `;
  const primeraHabilidad = listaHabilidades.firstElementChild;
  primeraHabilidad.style.background = "red"
}

inicializarEventosHabilidades();
actualizarNumeroHabilidades();
btnCambiarNombre.addEventListener("click", cambiarNombre);
btnCambiarProfesion.addEventListener("click", cambiarProfesion);
btnAñadirHabilidad.addEventListener("click", añadirHabilidad);
btnOcultarHabilidad.addEventListener("click", cambiarVisibilidadHabilidades);
btnTema.addEventListener("click", cambiarTema);

// 8. Función para mostrar info extra
// usar classList.toggle()

// 9. Función para cambiar email
// usar prompt(), textContent

// 10. Event listeners
// Añadir addEventListener a cada botón

// 11. Event listener para eliminar habilidades
// Usar querySelectorAll() y forEach para añadir evento click
