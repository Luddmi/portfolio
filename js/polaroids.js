
let thumbs = document.querySelectorAll(".book-thumb");
let modal = document.getElementById("modalCustom");
let modalImg = document.getElementById("modalImagen");
let cerrar = document.querySelector(".cerrar");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

let imagenes = [];
let indexActual = 0;

thumbs.forEach(function(img, i) {
    img.addEventListener("click", function() {

        // reconstruye la lista según la galería clickeada
        imagenes = [];
        thumbs.forEach(function(t) {
            imagenes.push(t.src);
        });

        indexActual = i;
        modalImg.src = imagenes[indexActual];
        modal.classList.add("activo");
    });
});

cerrar.onclick = function() {
    modal.classList.remove("activo");
};

prev.onclick = function() {
    indexActual = (indexActual - 1 + imagenes.length) % imagenes.length;
    modalImg.src = imagenes[indexActual];
};

next.onclick = function() {
    indexActual = (indexActual + 1) % imagenes.length;
    modalImg.src = imagenes[indexActual];
};

modal.onclick = function(e) {
    if (e.target === modal) {
        modal.classList.remove("activo");
    }
};

