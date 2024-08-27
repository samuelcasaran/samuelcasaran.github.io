const image = document.querySelector('.scrolling-image');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset; // Obtiene el desplazamiento vertical actual
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    
    // Calcula el porcentaje de desplazamiento vertical
    const scrollPercent = scrollTop / maxScroll;
    
    // Calcula el desplazamiento de la imagen
    const translateX = -scrollPercent * 50; // Ajusta el valor según tu preferencia
    
    // Aplica el desplazamiento de la imagen
    image.style.transform = `translateX(${translateX}%)`;
});
