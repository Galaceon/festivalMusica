document.addEventListener('DOMContentLoaded', function() {

    navegacionFija()
    crearGaleria()
})

function navegacionFija() {
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll', function() {
        if(sobreFestival.getBoundingClientRect().bottom < 1) {
            header.classList.add('fixed');
        }else {
            header.classList.remove('fixed');
        }
    })
}

function crearGaleria() {
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `src/gallery/full/${i}.jpg`;
        imagen.alt = 'Imagen Galería';

        imagen.onclick = function() {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('IMG');
    imagen.src = `src/gallery/full/${i}.jpg`;
    imagen.alt = 'Imagen Galería';

    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.onclick = cerrarModal;

    // Generar Modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);

    //Agregar al HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden');
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');

    setTimeout(() => {
        modal?.remove(); // apuntar en libreta

        const body = document.querySelector('body');
    body.classList.remove('overflow-hidden');
    }, 500)
}