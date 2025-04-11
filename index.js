
function handleScroll() {
    const cards = document.querySelectorAll('.missao, .visao');
    const windowHeight = window.innerHeight;

    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop <= windowHeight * 0.8) { 
            card.classList.add('visible');
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
