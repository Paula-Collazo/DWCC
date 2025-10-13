const padre = document.getElementById("padre")
const hijo = document.getElementById("hijo")

padre.addEventListener("click", (e) => {
    alert("Estan clikando en el padre");
    e.stopPropagation();
});

hijo.addEventListener("click", (e) => {
    alert("Estan clickando en el hijo");
    e.stopPropagation();
});