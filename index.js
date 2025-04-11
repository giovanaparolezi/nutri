function handleScroll() { 
    const elementsToReveal = document.querySelectorAll('.fade-in, .missao, .visao');
    const windowHeight = window.innerHeight;

    elementsToReveal.forEach(el => {
        const elTop = el.getBoundingClientRect().top;

        if (elTop <= windowHeight * 0.8) { 
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);



function playVideo() {
    let video = document.querySelector('.background-video');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
