let imagenes = [
    "img/book/book1.jpeg",
    "img/book/book2.jpeg",
    "img/book/book3.jpeg",
    "img/book/book4.jpeg",
    "img/book/book5.jpg",
    "img/book/book6.JPG",
    "img/book/book7.JPG",
    "img/book/book8.JPG",
    "img/book/book9.JPG",
    "img/book/book10.JPG",
    "img/book/book11.png",
    "img/book/book12.JPG",
    "img/book/book13.jpg",
    "img/book/book14.jpg",
    "img/book/book15.jpg",
    "img/book/book16.jpg" 
];

let indexActual = 0;

let modal = document.getElementById("modalCustom");
let modalImg = document.getElementById("modalImagen");
let cerrar = document.querySelector(".cerrar");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

/* ABRIR MODAL */
document.querySelectorAll(".book-thumb").forEach(function(img){
    img.addEventListener("click", function(){
        indexActual = Number(this.dataset.index);
        mostrarImagen();
        modal.classList.add("activo");
    });
});

/* MOSTRAR IMAGEN */
function mostrarImagen() {
    modalImg.src = imagenes[indexActual];
}

/* CERRAR */
cerrar.addEventListener("click", function(){
    modal.classList.remove("activo");
});

/* CLICK AFUERA */
modal.addEventListener("click", function(e){
    if(e.target === modal){
        modal.classList.remove("activo");
    }
});

/* ANTERIOR */
prev.addEventListener("click", function(e){
    e.stopPropagation();
    indexActual--;
    if(indexActual < 0) indexActual = imagenes.length - 1;
    mostrarImagen();
});

/* SIGUIENTE */
next.addEventListener("click", function(e){
    e.stopPropagation();
    indexActual++;
    if(indexActual >= imagenes.length) indexActual = 0;
    mostrarImagen();
});
