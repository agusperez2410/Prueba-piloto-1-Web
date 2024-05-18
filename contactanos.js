/*esto es para llamar a los archivos mediante las id*/
const nav = document.querySelector("#nav"); 
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

/*En esta seccion pasamos a darle funciones a los documentos*/

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");

})